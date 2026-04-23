const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries, updateInquiry } = require('../controllers/inquiryController');
const { protect, isAdmin } = require('../middleware/auth');

router.post('/', createInquiry);
router.get('/', protect, isAdmin, getInquiries);
router.put('/:id', protect, isAdmin, updateInquiry);

module.exports = router;
