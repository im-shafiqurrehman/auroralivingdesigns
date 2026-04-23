const Inquiry = require('../models/Inquiry');

exports.createInquiry = async (req, res) => {
  const { name, email, phone, message, productRef } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ message: 'Name, email and message are required' });

  const inquiry = await Inquiry.create({ name, email, phone, message, productRef: productRef || null });
  res.status(201).json(inquiry);
};

exports.getInquiries = async (req, res) => {
  const { status, page = 1, limit = 20 } = req.query;
  const query = status ? { status } : {};
  const skip = (Number(page) - 1) * Number(limit);
  const total = await Inquiry.countDocuments(query);
  const inquiries = await Inquiry.find(query)
    .populate('productRef', 'name slug')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit));
  res.json({ inquiries, total });
};

exports.updateInquiry = async (req, res) => {
  const inquiry = await Inquiry.findById(req.params.id);
  if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
  if (req.body.status) inquiry.status = req.body.status;
  await inquiry.save();
  res.json(inquiry);
};
