const Category = require('../models/Category');
const slugify = require('slugify');

exports.getCategories = async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  const { name, description, image } = req.body;
  const slug = slugify(name, { lower: true, strict: true });
  const exists = await Category.findOne({ slug });
  if (exists) return res.status(400).json({ message: 'Category already exists' });
  const category = await Category.create({ name, slug, description, image });
  res.status(201).json(category);
};

exports.updateCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  const { name, description, image } = req.body;
  if (name) {
    category.name = name;
    category.slug = slugify(name, { lower: true, strict: true });
  }
  if (description !== undefined) category.description = description;
  if (image !== undefined) category.image = image;
  await category.save();
  res.json(category);
};

exports.deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  await category.deleteOne();
  res.json({ message: 'Category deleted' });
};
