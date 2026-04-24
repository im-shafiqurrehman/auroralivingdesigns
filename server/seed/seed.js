const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Inquiry = require('../models/Inquiry');

const PLACEHOLDER = (label) =>
  `https://placehold.co/800x800/0d0d0d/f0c040?text=${encodeURIComponent(label)}`;

const isFresh = process.argv.includes('--fresh');

async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/aurora-living-designs';
  await mongoose.connect(mongoUri);
  console.log('✓ Connected to MongoDB\n');

  if (isFresh) {
    console.log('--fresh flag detected. Dropping existing data...');
    await User.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();
    await Inquiry.deleteMany();
    console.log('✓ Collections cleared\n');
  }

  // ─── Users ────────────────────────────────────────────────────────────────
  const adminPassword = await bcrypt.hash('Admin@123', 10);
  const userPassword = await bcrypt.hash('User@1234', 10);

  // Use upsert so re-running without --fresh doesn't duplicate
  const admin = await User.findOneAndUpdate(
    { email: 'admin@concretecrafts.com' },
    {
      name: 'Admin',
      email: 'admin@concretecrafts.com',
      password: adminPassword,
      role: 'admin',
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  console.log(`✓ Admin user:  ${admin.email}  (password: Admin@123)`);

  const testUser = await User.findOneAndUpdate(
    { email: 'user@test.com' },
    {
      name: 'Test User',
      email: 'user@test.com',
      password: userPassword,
      role: 'user',
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  console.log(`✓ Test user:   ${testUser.email}  (password: User@1234)\n`);

  // ─── Categories ───────────────────────────────────────────────────────────
  const categoryData = [
    { name: 'Garden Fountains', slug: 'garden-fountains', description: 'Handcrafted concrete fountains for outdoor spaces.' },
    { name: 'Ceiling Medallions', slug: 'ceiling-medallions', description: 'Ornate concrete medallions for interior ceilings.' },
    { name: 'Sculptures', slug: 'sculptures', description: 'Decorative concrete sculptures and wall plaques.' },
    { name: 'Custom Pieces', slug: 'custom-pieces', description: 'Bespoke concrete works made to your specifications.' },
  ];

  const categoryMap = {};
  for (const cat of categoryData) {
    const doc = await Category.findOneAndUpdate(
      { slug: cat.slug },
      cat,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    categoryMap[cat.slug] = doc._id;
    console.log(`✓ Category: ${doc.name}`);
  }
  console.log('');

  // ─── Products ─────────────────────────────────────────────────────────────
  const productData = [
    {
      name: '3-Tier Classical Garden Fountain',
      slug: '3-tier-classical-garden-fountain',
      category: categoryMap['garden-fountains'],
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
      category: categoryMap['ceiling-medallions'],
      shortDescription: 'A 36-inch hand-sculpted ceiling medallion with acanthus leaf detailing.',
      longDescription: 'Inspired by Victorian neoclassical architecture, this medallion features deeply carved acanthus leaf motifs and a central chandelier boss.',
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
      category: categoryMap['garden-fountains'],
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
      category: categoryMap['sculptures'],
      shortDescription: 'A bold lion head wall plaque with commanding detail.',
      longDescription: 'Cast from an original hand-sculpted master mold, this lion head plaque brings classical drama to exterior and interior walls.',
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
      category: categoryMap['ceiling-medallions'],
      shortDescription: 'A 24-inch medallion with flowing acanthus leaf pattern.',
      longDescription: 'A refined, mid-size ceiling medallion suitable for rooms with standard ceiling heights.',
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
      category: categoryMap['ceiling-medallions'],
      shortDescription: 'A dramatic 30-inch baroque medallion with rosette center.',
      longDescription: 'This medallion takes inspiration from European baroque interiors. The rosette center is surrounded by scrolling foliage and geometric banding.',
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
      category: categoryMap['garden-fountains'],
      shortDescription: 'A wall-mounted fountain with Neptune mask spout.',
      longDescription: 'Designed for courtyard and verandah walls. Features a classical mask spout and a deep basin. Includes back fitting for water pipe connection.',
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
      category: categoryMap['garden-fountains'],
      shortDescription: 'An overflowing urn fountain on a classical pedestal base.',
      longDescription: 'Water cascades gently over the rim of a Greco-Roman style urn, recirculating into a hidden reservoir at the base.',
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
      category: categoryMap['sculptures'],
      shortDescription: 'A decorative oval wall planter with shell and scroll motifs.',
      longDescription: 'Adds classical elegance to any exterior wall. The planter bowl is deep enough for trailing plants and features relief-carved shell and scroll ornaments.',
      price: 8200,
      dimensions: '50cm wide × 35cm tall × 20cm depth',
      weight: '9 kg',
      material: 'Cast concrete, sealed',
      images: [PLACEHOLDER('Oval Wall Planter')],
      inStock: true,
      featured: false,
    },
  ];

  for (const prod of productData) {
    await Product.findOneAndUpdate(
      { slug: prod.slug },
      prod,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    console.log(`✓ Product: ${prod.name}`);
  }
  console.log('');

  // ─── Sample Inquiries ─────────────────────────────────────────────────────
  const inquiryData = [
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
  ];

  if (isFresh || (await Inquiry.countDocuments()) === 0) {
    await Inquiry.insertMany(inquiryData);
    console.log(`✓ ${inquiryData.length} sample inquiries created`);
  } else {
    console.log('  Skipping inquiries (already exist — use --fresh to reset)');
  }

  console.log('\n═══════════════════════════════════════════════');
  console.log('  Seed complete!');
  console.log('─────────────────────────────────────────────');
  console.log('  Admin   → admin@concretecrafts.com / Admin@123');
  console.log('  User    → user@test.com / User@1234');
  console.log('═══════════════════════════════════════════════\n');

  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
