# Aurora Living Designs — Full Stack Setup Guide

## Project Structure

```
aurora/
├── server/          ← Express.js REST API
└── client/          ← Next.js 14 Frontend
```

---

## Environment Variables

### Server — create `/server/.env`

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/aurora
JWT_SECRET=pick_a_long_random_string_here
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### Client — create `/client/.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## Backend Setup

```bash
cd server
npm install
```

### Run the seed script (populates admin + dummy data)

```bash
npm run seed
```

This creates:
- Admin user: `admin@concretecrafts.com` / `Admin@123`
- 4 categories
- 9 products
- 3 sample inquiries

### Start the server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

### Build for production

```bash
npm run build
npm start
```

---

## API Reference

### Auth
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| POST | `/api/auth/logout` | Public |
| GET | `/api/auth/me` | Protected |

### Products
| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/products` | Public |
| GET | `/api/products/:slug` | Public |
| POST | `/api/products` | Admin |
| PUT | `/api/products/:id` | Admin |
| DELETE | `/api/products/:id` | Admin |

Query params for GET /api/products:
- `?category=garden-fountains`
- `?sort=newest` / `price-asc` / `price-desc`
- `?featured=true`
- `?page=1&limit=12`

### Categories
| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/categories` | Public |
| POST | `/api/categories` | Admin |
| PUT | `/api/categories/:id` | Admin |
| DELETE | `/api/categories/:id` | Admin |

### Inquiries
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/inquiries` | Public |
| GET | `/api/inquiries` | Admin |
| PUT | `/api/inquiries/:id` | Admin |

---

## Cloudinary Setup

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Go to Dashboard and copy your Cloud Name, API Key, API Secret
3. Paste them into `/server/.env`
4. Images upload automatically when you add products via admin

If you skip Cloudinary for now, image upload still works — images just won't persist. Use the placeholder URLs from seed data.

---

## MongoDB Setup

Use [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier):

1. Create a cluster
2. Create a database user
3. Whitelist your IP (or use 0.0.0.0/0 for dev)
4. Copy the connection string and paste it as `MONGO_URI`

---

## Deployment

### Backend (Railway / Render / VPS)
- Set all env variables in the platform dashboard
- Build command: `npm install`
- Start command: `npm start`

### Frontend (Vercel)
- Connect your GitHub repo
- Set `NEXT_PUBLIC_API_URL` to your deployed backend URL
- Vercel auto-detects Next.js

---

## Admin Access

Navigate to `/login` and sign in with:
- Email: `admin@concretecrafts.com`
- Password: `Admin@123`

The admin dashboard is at `/admin` and is protected — only users with `role: "admin"` in MongoDB can access it.

---

## Brand Colors

| Token | Value | Use |
|-------|-------|-----|
| Primary gold | `#f0c040` | Headlines, CTAs, accents |
| Dark gold | `#b8942a` | Borders, hover states |
| Background | `#0d0d0d` | Page background |
| Card | `#111111` | Card surfaces |
| Text | `#f5f5f0` | Body text |
| Muted | `#a89f8c` | Secondary text |

Fonts: **Playfair Display** (headings) + **Cormorant Garamond** (body)
