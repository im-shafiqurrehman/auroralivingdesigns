const Category = require('../models/Category');
const slugify = require('slugify');

// GET /api/categories — all categories sorted by name
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to fetch categories' });
  }
};

// POST /api/categories — create (admin only)
exports.createCategory = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    if (!name) return res.status(400).json({ message: 'Category name is required' });

    const slug = slugify(name, { lower: true, strict: true });
    const exists = await Category.findOne({ slug });
    if (exists) return res.status(400).json({ message: 'A category with this name already exists' });

    const category = await Category.create({
      name: name.trim(),
      slug,
      description: description || '',
      image: image || '',
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Failed to create category' });
  }
};

// PUT /api/categories/:id — update (admin only)
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    const { name, description, image } = req.body;

    if (name && name.trim() !== category.name) {
      category.name = name.trim();
      const newSlug = slugify(name, { lower: true, strict: true });
      // Check slug uniqueness (excluding self)
      const conflict = await Category.findOne({ slug: newSlug, _id: { $ne: category._id } });
      category.slug = conflict ? `${newSlug}-${Date.now()}` : newSlug;
    }

    if (description !== undefined) category.description = description;
    if (image !== undefined) category.image = image;

    await category.save();
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Failed to update category' });
  }
};

// DELETE /api/categories/:id — delete (admin only)
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    await category.deleteOne();
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to delete category' });
  }
};
