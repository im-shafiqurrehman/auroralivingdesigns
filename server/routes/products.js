const express = require('express');
const router = express.Router();
const {
  getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct,
} = require('../controllers/productController');
const { protect, isAdmin } = require('../middleware/auth');
const { upload } = require('../middleware/cloudinary');

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);
router.post('/', protect, isAdmin, upload.array('images', 10), createProduct);
router.put('/:id', protect, isAdmin, upload.array('images', 10), updateProduct);
router.delete('/:id', protect, isAdmin, deleteProduct);

module.exports = router;
