const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    dimensions: { type: String, default: '' },
    weight: { type: String, default: '' },
    material: { type: String, default: '' },
    images: [{ type: String }],
    inStock: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
