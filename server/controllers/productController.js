const Product = require('../models/Product');
const Category = require('../models/Category');
const slugify = require('slugify');

function parseOptionalNumber(value) {
  if (value === undefined || value === null || value === '') return undefined;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

// GET /api/products — paginated list with optional filters
exports.getProducts = async (req, res) => {
  try {
    const { category, sort, page = 1, limit = 12, featured } = req.query;
    const query = {};

    if (category) {
      const cat = await Category.findOne({ slug: category });
      if (cat) query.category = cat._id;
    }
    if (featured === 'true') query.featured = true;

    const sortOptions = {
      newest:       { createdAt: -1 },
      'price-asc':  { price: 1 },
      'price-desc': { price: -1 },
    };
    const sortBy = sortOptions[sort] || { createdAt: -1 };

    const skip  = (Number(page) - 1) * Number(limit);
    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('category', 'name slug')
      .sort(sortBy)
      .skip(skip)
      .limit(Number(limit));

    res.json({
      products,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to fetch products' });
  }
};

// GET /api/products/:slug — by slug OR by _id (admin edit needs id lookup)
exports.getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    // Support both slug and MongoDB ObjectId
    let product = await Product.findOne({ slug }).populate('category', 'name slug');
    if (!product && slug.match(/^[a-f\d]{24}$/i)) {
      product = await Product.findById(slug).populate('category', 'name slug');
    }
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to fetch product' });
  }
};

// POST /api/products — create (admin only)
exports.createProduct = async (req, res) => {
  try {
    const {
      name, slug: rawSlug, category, shortDescription, longDescription,
      price, dimensions, weight, material, inStock, featured,
    } = req.body;

    // Use provided slug or generate from name
    let slug = rawSlug
      ? rawSlug.toLowerCase().trim().replace(/\s+/g, '-')
      : slugify(name, { lower: true, strict: true });

    // Ensure uniqueness
    const existing = await Product.findOne({ slug });
    if (existing) slug = `${slug}-${Date.now()}`;

    // Collect image URLs — Cloudinary uploads come in req.files; existing URLs in req.body
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map((f) => f.path || f.secure_url || f.url);
    }
    if (req.body.existingImages) {
      const kept = Array.isArray(req.body.existingImages)
        ? req.body.existingImages
        : [req.body.existingImages];
      images = [...kept, ...images];
    }
    if (req.body.images && images.length === 0) {
      images = Array.isArray(req.body.images) ? req.body.images : [req.body.images];
    }

    const product = await Product.create({
      name,
      slug,
      category,
      shortDescription,
      longDescription: longDescription || '',
      price: parseOptionalNumber(price),
      dimensions: dimensions || '',
      weight: weight || '',
      material: material || '',
      images,
      inStock: inStock === 'false' ? false : inStock === false ? false : true,
      featured: featured === 'true' || featured === true,
    });

    await product.populate('category', 'name slug');
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Failed to create product' });
  }
};

// PUT /api/products/:id — update (admin only)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Scalar fields
    const scalarFields = [
      'name', 'category', 'shortDescription', 'longDescription',
      'price', 'dimensions', 'weight', 'material',
    ];
    scalarFields.forEach((f) => {
      if (req.body[f] !== undefined) {
        product[f] = f === 'price' ? parseOptionalNumber(req.body[f]) : req.body[f];
      }
    });

    // Boolean fields — comes as string from FormData
    if (req.body.inStock !== undefined) {
      product.inStock = req.body.inStock === 'true' || req.body.inStock === true;
    }
    if (req.body.featured !== undefined) {
      product.featured = req.body.featured === 'true' || req.body.featured === true;
    }

    // Slug — regenerate if name changed; override if slug field provided
    if (req.body.slug) {
      const slugCandidate = req.body.slug.toLowerCase().trim().replace(/\s+/g, '-');
      const conflict = await Product.findOne({ slug: slugCandidate, _id: { $ne: product._id } });
      product.slug = conflict ? `${slugCandidate}-${Date.now()}` : slugCandidate;
    } else if (req.body.name) {
      const slugCandidate = slugify(req.body.name, { lower: true, strict: true });
      const conflict = await Product.findOne({ slug: slugCandidate, _id: { $ne: product._id } });
      product.slug = conflict ? `${slugCandidate}-${Date.now()}` : slugCandidate;
    }

    // Images — start from whichever existing images the client kept, then append new uploads
    let images = [];

    // Existing URLs the client chose to keep
    if (req.body.existingImages !== undefined) {
      const kept = Array.isArray(req.body.existingImages)
        ? req.body.existingImages
        : [req.body.existingImages];
      images = kept.filter(Boolean);
    } else {
      // No existingImages field sent = keep all current images
      images = [...product.images];
    }

    // New Cloudinary uploads
    if (req.files && req.files.length > 0) {
      const newUrls = req.files.map((f) => f.path || f.secure_url || f.url);
      images = [...images, ...newUrls];
    }

    product.images = images;

    await product.save();
    await product.populate('category', 'name slug');
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Failed to update product' });
  }
};

// DELETE /api/products/:id — delete (admin only)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    await product.deleteOne();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to delete product' });
  }
};
