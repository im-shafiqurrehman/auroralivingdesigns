const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { MongoMemoryServer } = require('mongodb-memory-server');

dotenv.config();

if (!process.env.JWT_SECRET) {
  if (process.env.VERCEL) {
    throw new Error('JWT_SECRET must be set in Vercel environment variables');
  }

  // Keep local development working even when .env is not configured.
  process.env.JWT_SECRET = 'dev-only-jwt-secret-change-me';
  console.warn('JWT_SECRET not set. Using development fallback secret.');
}

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const inquiryRoutes = require('./routes/inquiries');
const adminRoutes = require('./routes/admin');

const app = express();
const globalForMongoose = global;

if (!globalForMongoose.__auroraMongoose) {
  globalForMongoose.__auroraMongoose = { conn: null, promise: null };
}

const ensureMongoConnection = async () => {
  if (globalForMongoose.__auroraMongoose.conn) {
    return globalForMongoose.__auroraMongoose.conn;
  }

  if (!globalForMongoose.__auroraMongoose.promise) {
    let mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      if (process.env.VERCEL) {
        throw new Error('MONGO_URI must be set in Vercel environment variables');
      }

      const inMemoryMongo = await MongoMemoryServer.create();
      mongoUri = inMemoryMongo.getUri();
      console.warn('MONGO_URI not set. Using in-memory MongoDB for development.');
    }

    globalForMongoose.__auroraMongoose.promise = mongoose.connect(mongoUri);
  }

  globalForMongoose.__auroraMongoose.conn = await globalForMongoose.__auroraMongoose.promise;
  return globalForMongoose.__auroraMongoose.conn;
};

const configuredClientOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const defaultAllowedOrigins = [
  'https://auroralivingdesigns.vercel.app',
  'https://auroralivingdesigns-cvj6.vercel.app',
];

const allowedOrigins = new Set([
  ...defaultAllowedOrigins,
  ...configuredClientOrigins,
]);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server requests and local development origins.
      if (!origin) return callback(null, true);
      if (allowedOrigins.has(origin)) {
        return callback(null, true);
      }
      if (/^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(async (req, res, next) => {
  if (req.path === '/health' || req.path === '/api/health') {
    return next();
  }

  try {
    await ensureMongoConnection();
    next();
  } catch (err) {
    next(err);
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/admin', adminRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || 'Server Error' });
});

const startServer = async () => {
  try {
    await ensureMongoConnection();
    console.log('MongoDB connected');

    const desiredPort = Number(process.env.PORT) || 5000;
    const listenWithFallback = (port) => {
      const server = app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });

      server.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
          const nextPort = port + 1;
          console.warn(`Port ${port} is in use. Retrying on ${nextPort}...`);
          listenWithFallback(nextPort);
          return;
        }
        throw error;
      });
    };

    listenWithFallback(desiredPort);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = app;
module.exports.startServer = startServer;

if (require.main === module) {
  startServer();
}
