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
    {
      name: 'Wood Antiques Restoration',
      slug: 'wood-antiques-restoration',
      description:
        'Restoration, refurbishing, and custom crafting of wooden antiques. We preserve the original character of each piece while enhancing durability and beauty using high-quality materials and expert techniques. Services include antique furniture restoration, wood repair and refinishing, custom-made wooden pieces, and polishing, painting and detailing.',
      image: '',
    },
    {
      name: 'Gypsum Design & Interiors',
      slug: 'gypsum-design-interiors',
      description:
        'Modern gypsum board features for both interior and exterior spaces. From elegant ceilings and TV walls to outdoor fire pits and water features. Services include gypsum board walls and ceilings, custom TV wall units, lighting-integrated designs, outdoor features such as fire pits, fountains and garden elements, and full design and execution services.',
      image: '',
    },
    {
      name: 'Custom Pieces',
      slug: 'custom-pieces',
      description:
        'Bespoke works made to your exact specifications. Tell us your vision and we bring it to life.',
      image: '',
    },
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
    // Wood Antiques Restoration
    {
      name: 'Antique Dining Table Restoration',
      slug: 'antique-dining-table-restoration',
      category: categoryMap['wood-antiques-restoration'],
      shortDescription:
        'Full restoration of antique dining tables — stripped, repaired, refinished, and sealed to original character.',
      longDescription:
        'We assess the structural integrity first, repair any joints or broken elements, then strip back old finishes to bare wood. The surface is sanded through multiple grits, stained to match the original tone, and sealed with a durable topcoat. Result: a piece that looks and feels as it did when first crafted.',
      price: 15000,
      dimensions: 'Varies by piece',
      weight: '',
      material: 'Solid hardwood, period-appropriate finishes',
      images: [PLACEHOLDER('Dining Table Restoration')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Custom Handcrafted Wooden Cabinet',
      slug: 'custom-handcrafted-wooden-cabinet',
      category: categoryMap['wood-antiques-restoration'],
      shortDescription:
        'Bespoke wooden cabinets crafted to your dimensions, style, and finish preferences.',
      longDescription:
        'Designed from scratch or modelled after a period style you love. We use solid timber throughout — no veneered chipboard. Each cabinet is jointed, assembled, and finished by hand in our workshop.',
      price: 35000,
      dimensions: 'Custom',
      weight: '',
      material: 'Solid sheesham, walnut, or oak on request',
      images: [PLACEHOLDER('Custom Wooden Cabinet')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Wood Polishing & Detailing Service',
      slug: 'wood-polishing-detailing',
      category: categoryMap['wood-antiques-restoration'],
      shortDescription:
        'Professional polishing, painting, and detailing for wooden furniture of any age.',
      longDescription:
        'Breathes new life into tired pieces without a full restoration. We clean, sand lightly, and apply French polish, lacquer, or wax depending on the wood type and desired finish. Ideal for heirloom pieces that just need refreshing.',
      price: 5000,
      dimensions: 'Varies',
      weight: '',
      material: 'French polish, wax, lacquer finishes',
      images: [PLACEHOLDER('Wood Polishing')],
      inStock: true,
      featured: false,
    },

    // Gypsum Design & Interiors
    {
      name: 'Custom Gypsum TV Wall Unit',
      slug: 'custom-gypsum-tv-wall-unit',
      category: categoryMap['gypsum-design-interiors'],
      shortDescription:
        'Fully custom TV wall designs in gypsum board — from concept sketch to finished installation.',
      longDescription:
        'We design and execute TV wall units that integrate shelving, lighting, and decorative recesses into a single cohesive feature wall. Lighting channels are built in for LED strip placement. Finished smooth or with texture on request.',
      price: 45000,
      dimensions: 'Custom to room',
      weight: '',
      material: 'Gypsum board, metal framing, LED-ready channels',
      images: [PLACEHOLDER('Gypsum TV Wall')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Gypsum Ceiling Design & Installation',
      slug: 'gypsum-ceiling-design-installation',
      category: categoryMap['gypsum-design-interiors'],
      shortDescription:
        'Drop ceilings, coffered designs, and lighting-integrated gypsum ceilings for any room size.',
      longDescription:
        'We handle the full ceiling project from structural framing to final coat. Designs include simple drop ceilings, multi-level coffered panels, circular centrepieces, and perimeter cove lighting. We work with your interior designer or provide in-house design guidance.',
      price: 30000,
      dimensions: 'Per square foot, custom',
      weight: '',
      material: 'Gypsum board, steel framing',
      images: [PLACEHOLDER('Gypsum Ceiling')],
      inStock: true,
      featured: true,
    },
    {
      name: 'Outdoor Fire Pit Feature',
      slug: 'outdoor-fire-pit-feature',
      category: categoryMap['gypsum-design-interiors'],
      shortDescription:
        'Bespoke outdoor fire pit and seating structures — designed and built for your garden or terrace.',
      longDescription:
        'We design custom fire pit enclosures using weather-resistant materials, integrated with seating walls, planters, or water features as required. Suitable for rooftop terraces, garden courtyards, and landscaped areas.',
      price: 60000,
      dimensions: 'Custom',
      weight: '',
      material: 'Weather-resistant concrete, outdoor-grade finishes',
      images: [PLACEHOLDER('Outdoor Fire Pit')],
      inStock: true,
      featured: false,
    },
    {
      name: 'Garden Water Feature',
      slug: 'garden-water-feature',
      category: categoryMap['gypsum-design-interiors'],
      shortDescription:
        'Custom garden fountains, wall water features, and pond designs for exterior spaces.',
      longDescription:
        'From simple wall-mounted water cascades to full pond and fountain installations, we design and execute water features that become the centrepiece of any garden. Submersible pump systems included. Waterproofing guaranteed.',
      price: 40000,
      dimensions: 'Custom',
      weight: '',
      material: 'Reinforced concrete, waterproof render',
      images: [PLACEHOLDER('Garden Water Feature')],
      inStock: true,
      featured: false,
    },

    // Custom Pieces
    {
      name: 'Bespoke Custom Commission',
      slug: 'bespoke-custom-commission',
      category: categoryMap['custom-pieces'],
      shortDescription:
        'Have something specific in mind? We quote and build fully custom pieces to your brief.',
      longDescription:
        'Send us your idea — a sketch, a photo, a description. We consult on materials and feasibility, provide a detailed quote, and execute the work in our workshop. No minimum size. No limitation on complexity.',
      price: 0,
      dimensions: 'Custom',
      weight: '',
      material: 'Varies',
      images: [PLACEHOLDER('Custom Commission')],
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
      message: 'Interested in a gypsum TV wall for my drawing room. Can you provide a quote?',
      status: 'new',
    },
    {
      name: 'Bilal Chaudhry',
      email: 'bilal@example.com',
      phone: '+92 300 222 0000',
      message: 'We need a custom ceiling design for a corporate office. Full floor. Please contact.',
      status: 'replied',
    },
    {
      name: 'Nadia Khawaja',
      email: 'nadia@example.com',
      phone: '+92 333 333 0000',
      message: 'Interior designer based in Lahore. Looking to discuss a hotel lobby wood restoration project.',
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
