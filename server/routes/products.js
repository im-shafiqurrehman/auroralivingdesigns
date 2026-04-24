const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, isAdmin } = require('../middleware/auth');
const { upload } = require('../middleware/cloudinary');

// Public routes
router.get('/', getProducts);
// This handles both slug (public) and ObjectId (admin edit) — controller decides
router.get('/:slug', getProductBySlug);

// Admin-only routes — protect + isAdmin + image upload
router.post('/', protect, isAdmin, upload.array('images', 10), createProduct);
router.put('/:id', protect, isAdmin, upload.array('images', 10), updateProduct);
router.delete('/:id', protect, isAdmin, deleteProduct);

module.exports = router;
