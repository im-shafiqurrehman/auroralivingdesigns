const Product = require('../models/Product');
const Category = require('../models/Category');
const slugify = require('slugify');

exports.getProducts = async (req, res) => {
  const { category, sort, page = 1, limit = 12, featured } = req.query;
  const query = {};

  if (category) {
    const cat = await Category.findOne({ slug: category });
    if (cat) query.category = cat._id;
  }
  if (featured === 'true') query.featured = true;

  const sortOptions = {
    newest: { createdAt: -1 },
    'price-asc': { price: 1 },
    'price-desc': { price: -1 },
  };
  const sortBy = sortOptions[sort] || { createdAt: -1 };

  const skip = (Number(page) - 1) * Number(limit);
  const total = await Product.countDocuments(query);
  const products = await Product.find(query)
    .populate('category', 'name slug')
    .sort(sortBy)
    .skip(skip)
    .limit(Number(limit));

  res.json({ products, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
};

exports.getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate('category', 'name slug');
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const {
    name, category, shortDescription, longDescription,
    price, dimensions, weight, material, inStock, featured,
  } = req.body;

  let slug = slugify(name, { lower: true, strict: true });
  const existing = await Product.findOne({ slug });
  if (existing) slug = `${slug}-${Date.now()}`;

  let images = [];
  if (req.files && req.files.length > 0) {
    images = req.files.map((f) => f.path);
  } else if (req.body.images) {
    images = Array.isArray(req.body.images) ? req.body.images : [req.body.images];
  }

  const product = await Product.create({
    name, slug, category, shortDescription, longDescription,
    price, dimensions, weight, material, images,
    inStock: inStock !== undefined ? inStock : true,
    featured: featured !== undefined ? featured : false,
  });

  await product.populate('category', 'name slug');
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const fields = [
    'name', 'category', 'shortDescription', 'longDescription',
    'price', 'dimensions', 'weight', 'material', 'inStock', 'featured',
  ];
  fields.forEach((f) => { if (req.body[f] !== undefined) product[f] = req.body[f]; });

  if (req.body.name) {
    let slug = slugify(req.body.name, { lower: true, strict: true });
    const existing = await Product.findOne({ slug, _id: { $ne: product._id } });
    if (existing) slug = `${slug}-${Date.now()}`;
    product.slug = slug;
  }

  if (req.files && req.files.length > 0) {
    const newImages = req.files.map((f) => f.path);
    product.images = req.body.replaceImages === 'true' ? newImages : [...product.images, ...newImages];
  }

  await product.save();
  await product.populate('category', 'name slug');
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  await product.deleteOne();
  res.json({ message: 'Product deleted' });
};
