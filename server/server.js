const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { MongoMemoryServer } = require('mongodb-memory-server');

dotenv.config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const inquiryRoutes = require('./routes/inquiries');

const app = express();

const configuredClientOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server requests and local development origins.
      if (!origin) return callback(null, true);
      if (configuredClientOrigins.length > 0) {
        return callback(null, configuredClientOrigins.includes(origin));
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

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || 'Server Error' });
});

const startServer = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      const inMemoryMongo = await MongoMemoryServer.create();
      mongoUri = inMemoryMongo.getUri();
      console.warn('MONGO_URI not set. Using in-memory MongoDB for development.');
    }

    await mongoose.connect(mongoUri);
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

startServer();
