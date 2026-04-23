const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config({ path: '../.env' });

const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Inquiry = require('../models/Inquiry');

const PLACEHOLDER = (label) =>
  `https://placehold.co/800x800/0d0d0d/f0c040?text=${encodeURIComponent(label)}`;

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  await User.deleteMany();
  await Category.deleteMany();
  await Product.deleteMany();
  await Inquiry.deleteMany();

  // Admin user
  await User.create({
    name: 'Aurora Admin',
    email: 'admin@concretecrafts.com',
    password: 'Admin@123',
    role: 'admin',
  });
  console.log('Admin user created');

  // Categories
  const categories = await Category.insertMany([
    { name: 'Garden Fountains', slug: 'garden-fountains', description: 'Handcrafted concrete fountains for outdoor spaces.' },
    { name: 'Ceiling Medallions', slug: 'ceiling-medallions', description: 'Ornate concrete medallions for interior ceilings.' },
    { name: 'Sculptures', slug: 'sculptures', description: 'Decorative concrete sculptures and wall plaques.' },
    { name: 'Custom Pieces', slug: 'custom-pieces', description: 'Bespoke concrete works made to your specifications.' },
  ]);
  const [fountains, medallions, sculptures, custom] = categories;
  console.log('Categories created');

  // Products
  await Product.insertMany([
    {
      name: '3-Tier Classical Garden Fountain',
      slug: '3-tier-classical-garden-fountain',
      category: fountains._id,
      shortDescription: 'A grand three-tier garden fountain hand-cast in premium concrete.',
      longDescription: 'Standing at 150cm, this fountain features three graduated tiers with ornamental column details. Each tier is hand-cast separately and assembled on-site. Includes submersible pump fitting.',
      price: 45000,
      dimensions: '90cm diameter × 150cm height',
      weight: '85 kg',
      material: 'Reinforced concrete composite',
      images: [PLACEHOLDER('3-Tier Fountain')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Victorian Acanthus Ceiling Medallion 36"',
      slug: 'victorian-acanthus-ceiling-medallion-36',
      category: medallions._id,
      shortDescription: 'A 36-inch hand-sculpted ceiling medallion with acanthus leaf detailing.',
      longDescription: 'Inspired by Victorian neoclassical architecture, this medallion features deeply carved acanthus leaf motifs and a central chandelier boss. Hand-sanded and sealed for a refined finish.',
      price: 12500,
      dimensions: '91cm diameter × 4cm depth',
      weight: '18 kg',
      material: 'White cement composite',
      images: [PLACEHOLDER('Victorian Medallion 36in')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Angel Birdbath with Pedestal',
      slug: 'angel-birdbath-with-pedestal',
      category: fountains._id,
      shortDescription: 'A graceful angel-motif birdbath mounted on a classical pedestal.',
      longDescription: 'A serene garden centerpiece. The basin is supported by a sculpted angel figure atop a fluted pedestal. Cast in weather-resistant concrete, suitable for all climates.',
      price: 18000,
      dimensions: '50cm diameter × 90cm height',
      weight: '32 kg',
      material: 'Weather-resistant concrete',
      images: [PLACEHOLDER('Angel Birdbath')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Lion Head Wall Plaque',
      slug: 'lion-head-wall-plaque',
      category: sculptures._id,
      shortDescription: 'A bold lion head wall plaque with commanding detail.',
      longDescription: 'Cast from an original hand-sculpted master mold, this lion head plaque brings classical drama to exterior and interior walls. Each piece is hand-finished and sealed.',
      price: 12000,
      dimensions: '45cm × 45cm × 15cm',
      weight: '12 kg',
      material: 'Cast concrete, sealed',
      images: [PLACEHOLDER('Lion Head Plaque')],
      inStock: true,
      featured: false,
    },
    {
      name: 'Acanthus Leaf Medallion 24"',
      slug: 'acanthus-leaf-medallion-24',
      category: medallions._id,
      shortDescription: 'A 24-inch medallion with flowing acanthus leaf pattern.',
      longDescription: 'A refined, mid-size ceiling medallion suitable for rooms with standard ceiling heights. Features overlapping acanthus leaves radiating from a central point.',
      price: 6500,
      dimensions: '61cm diameter × 3cm depth',
      weight: '10 kg',
      material: 'White cement composite',
      images: [PLACEHOLDER('Acanthus Medallion 24in')],
      inStock: true,
      featured: false,
    },
    {
      name: 'Baroque Rosette Ceiling Medallion 30"',
      slug: 'baroque-rosette-ceiling-medallion-30',
      category: medallions._id,
      shortDescription: 'A dramatic 30-inch baroque medallion with rosette center.',
      longDescription: 'This medallion takes inspiration from European baroque interiors. The rosette center is surrounded by scrolling foliage and geometric banding — ideal for high-ceilinged formal rooms.',
      price: 8500,
      dimensions: '76cm diameter × 4cm depth',
      weight: '14 kg',
      material: 'White cement composite',
      images: [PLACEHOLDER('Baroque Rosette 30in')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Neptune Wall Fountain',
      slug: 'neptune-wall-fountain',
      category: fountains._id,
      shortDescription: 'A wall-mounted fountain with Neptune mask spout.',
      longDescription: 'Designed for courtyard and verandah walls, the Neptune wall fountain features a classical mask spout and a deep basin. Includes back fitting for water pipe connection.',
      price: 22000,
      dimensions: '60cm wide × 80cm tall × 20cm depth',
      weight: '28 kg',
      material: 'Cast concrete, waterproofed',
      images: [PLACEHOLDER('Neptune Wall Fountain')],
      inStock: true,
      featured: false,
    },
    {
      name: 'Classical Pedestal Urn Fountain',
      slug: 'classical-pedestal-urn-fountain',
      category: fountains._id,
      shortDescription: 'An overflowing urn fountain on a classical pedestal base.',
      longDescription: 'Water cascades gently over the rim of a Greco-Roman style urn, recirculating into a hidden reservoir at the base. A quiet, elegant garden centerpiece.',
      price: 32000,
      dimensions: '55cm diameter × 120cm height',
      weight: '55 kg',
      material: 'Reinforced concrete, sealed',
      images: [PLACEHOLDER('Pedestal Urn Fountain')],
      inStock: true,
      featured: false,
    },
    {
      name: 'Ornate Oval Wall Planter',
      slug: 'ornate-oval-wall-planter',
      category: sculptures._id,
      shortDescription: 'A decorative oval wall planter with shell and scroll motifs.',
      longDescription: 'Adds classical elegance to any exterior wall. The planter bowl is deep enough for trailing plants and features relief-carved shell and scroll ornaments on the surround.',
      price: 8200,
      dimensions: '50cm wide × 35cm tall × 20cm depth',
      weight: '9 kg',
      material: 'Cast concrete, sealed',
      images: [PLACEHOLDER('Oval Wall Planter')],
      inStock: true,
      featured: false,
    },
  ]);
  console.log('Products created');

  await Inquiry.insertMany([
    {
      name: 'Zara Mahmood',
      email: 'zara@example.com',
      phone: '+92 321 111 0000',
      message: 'Interested in the Victorian Medallion for my drawing room. Can you advise on installation?',
      status: 'new',
    },
    {
      name: 'Bilal Chaudhry',
      email: 'bilal@example.com',
      phone: '+92 300 222 0000',
      message: 'We need a custom fountain for a corporate lobby. Dimensions: 2m × 2m. Please contact.',
      status: 'replied',
    },
    {
      name: 'Nadia Khawaja',
      email: 'nadia@example.com',
      phone: '+92 333 333 0000',
      message: 'I am an interior designer based in Karachi. Looking to place bulk orders for a hotel project.',
      status: 'new',
    },
  ]);
  console.log('Sample inquiries created');

  console.log('\nSeed complete.');
  console.log('Admin login: admin@concretecrafts.com / Admin@123');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
