# 🚀 Quick Start Guide

Get BioDatawala running locally in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm 9+ installed
- Git installed

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Anuj472/biodatawala-platform.git
cd biodatawala-platform
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- NextAuth v5
- React 18
- TypeScript
- Tailwind CSS
- Supabase client

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.local.example .env.local
```

Or manually create `.env.local` with this content:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=BioDatawala

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=demo-secret-for-local-development-only
```

**That's all you need for local development!**

### 4. Run the Development Server

```bash
npm run dev
```

The app will start at `http://localhost:3000`

## 🎯 Test the Application

### 1. Visit the Homepage

Open `http://localhost:3000` in your browser

### 2. Try Demo Login

1. Go to `http://localhost:3000/login`
2. Use these credentials:
   - **Email**: `demo@biodatawala.in`
   - **Password**: `demo123`
3. Click "Sign In"
4. You'll be redirected to `/dashboard`

### 3. Explore Features

- **Homepage**: Browse all 14 services
- **Service Pages**: Marriage biodata, resumes, etc.
- **Dashboard**: View your personalized dashboard
- **Editor**: Visit `/editor/mb-001` for template editor

## 📁 Project Structure

```
biodatawala-platform/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Homepage
│   ├── login/               # Login page
│   ├── dashboard/           # User dashboard
│   ├── editor/[id]/         # Template editor
│   └── api/auth/            # NextAuth API routes
├── components/
│   ├── common/              # Reusable UI components
│   └── editor/              # Editor components
├── lib/
│   ├── auth.ts              # Authentication config
│   ├── constants.ts         # App constants
│   ├── template-data.ts     # Template definitions
│   └── utils.ts             # Utility functions
├── middleware.ts            # Route protection
└── .env.local               # Your local config
```

## 🛠️ Available Commands

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 🔑 Demo Accounts

### User Account
- **Email**: `demo@biodatawala.in`
- **Password**: `demo123`
- **Access**: Full user dashboard

## 🎨 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth v5
- **Database**: Supabase (configured, not yet connected)
- **Deployment**: Vercel-ready

## 🌐 Available Routes

### Public Routes
- `/` - Homepage
- `/login` - Login page
- `/marriage-biodata-maker` - Service page
- `/resume-cv-maker` - Service page
- `/wedding-invitation-cards` - Service page
- `/business-card-designer` - Service page
- `/certificate-generator` - Service page
- `/id-card-maker` - Service page
- `/blog` - Blog listing
- `/pricing` - Pricing plans

### Protected Routes (Requires Login)
- `/dashboard` - User dashboard
- `/editor/[templateId]` - Template editor

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution**: Make sure you have Node.js 18+ installed
```bash
node --version  # Should show v18 or higher
npm --version   # Should show v9 or higher
```

### Issue: Port 3000 is already in use

**Solution**: Use a different port
```bash
PORT=3001 npm run dev
```

### Issue: Login doesn't work

**Solution**: Check your `.env.local` file:
1. Make sure `NEXTAUTH_URL` is set to `http://localhost:3000`
2. Make sure `NEXTAUTH_SECRET` has some value (any string works for local dev)
3. Restart the dev server after changing `.env.local`

### Issue: TypeScript errors

**Solution**: Run type checking to see specific errors
```bash
npm run type-check
```

### Issue: Page not found

**Solution**: Make sure you're running `npm run dev` and the server is active

## 🚀 Next Steps

Once you have the app running:

1. **Explore the codebase**: Check out `/app`, `/components`, and `/lib` directories
2. **Test authentication**: Login, logout, and view the dashboard
3. **Browse templates**: Visit service pages to see 60 templates
4. **Read documentation**: Check `/docs` folder for detailed guides

## 📚 Documentation

- [Full Specification](./docs/SPECIFICATION.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Phase 2 Summary](./docs/PHASE2_SUMMARY.md)
- [Phase 3 Summary](./docs/PHASE3_SUMMARY.md)

## 🤝 Need Help?

If you encounter any issues:

1. Check this guide's troubleshooting section
2. Review the error message carefully
3. Create an issue on [GitHub](https://github.com/Anuj472/biodatawala-platform/issues)

## ✅ What's Working

- ✅ Homepage with all services
- ✅ 6 complete service pages
- ✅ 60 template definitions
- ✅ Authentication system
- ✅ User dashboard
- ✅ Editor UI framework
- ✅ Responsive design
- ✅ SEO optimization

## 🔜 Coming Soon

- ⏳ Template rendering in editor
- ⏳ PDF/JPG/PNG export
- ⏳ Database integration
- ⏳ Payment system
- ⏳ 8 more service pages
- ⏳ 80 more templates

---

**Happy Coding! 🎉**
