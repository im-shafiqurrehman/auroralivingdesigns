const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { protect, isAdmin } = require('../middleware/auth');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Inquiry = require('../models/Inquiry');
const User = require('../models/User');
const Setting = require('../models/Setting');

const DEFAULT_STORE_CONFIG = {
  storeName: 'Aurora Living Designs',
  contactEmail: 'info@auroralivingdesigns.online',
  whatsapp: '+1 (226) 998-1419',
  location: '280 Hamilton road, london, ontario',
  mapUrl: 'https://www.google.com/maps?q=280+Hamilton+road,+london,+ontario',
};

const STORE_SETTINGS_KEY = 'store-config';

async function getStoreConfig() {
  const setting = await Setting.findOneAndUpdate(
    { key: STORE_SETTINGS_KEY },
    { $setOnInsert: { key: STORE_SETTINGS_KEY, value: DEFAULT_STORE_CONFIG } },
    { upsert: true, new: true }
  ).lean();

  return { ...DEFAULT_STORE_CONFIG, ...(setting?.value || {}) };
}

// GET /api/admin/stats
router.get('/stats', protect, isAdmin, async (req, res) => {
  try {
    const [products, categories, inquiries, newInquiries, users] = await Promise.all([
      Product.countDocuments(),
      Category.countDocuments(),
      Inquiry.countDocuments(),
      Inquiry.countDocuments({ status: 'new' }),
      User.countDocuments(),
    ]);

    res.json({ products, categories, inquiries, newInquiries, users });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

// GET /api/admin/settings/store
router.get('/settings/store', protect, isAdmin, async (req, res) => {
  try {
    const storeConfig = await getStoreConfig();
    res.set('Cache-Control', 'no-store, max-age=0');
    res.json(storeConfig);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load store settings' });
  }
});

// PUT /api/admin/settings/store
router.put('/settings/store', protect, isAdmin, async (req, res) => {
  const { storeName, contactEmail, whatsapp, location, mapUrl } = req.body;
  if (!storeName || !contactEmail) {
    return res.status(400).json({ message: 'Store name and contact email are required' });
  }

  try {
    const storeConfig = { storeName, contactEmail, whatsapp, location, mapUrl };
    await Setting.findOneAndUpdate(
      { key: STORE_SETTINGS_KEY },
      { $set: { value: storeConfig } },
      { upsert: true, new: true }
    );

    res.json({ message: 'Store settings updated', ...storeConfig });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save store settings' });
  }
});

// PUT /api/admin/settings/password
router.put('/settings/password', protect, isAdmin, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Both fields are required' });
  }
  if (newPassword.length < 8) {
    return res.status(400).json({ message: 'New password must be at least 8 characters' });
  }

  try {
    const user = await User.findById(req.user._id);
    const match = await user.matchPassword(currentPassword);
    if (!match) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    // Skip the pre-save hook re-hashing by marking as modified
    user.markModified('password');
    await user.save({ validateBeforeSave: false });

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update password' });
  }
});

module.exports = router;
