# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git installed
- Vercel account (recommended) or other hosting platform
- Domain name (optional)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Application
NEXT_PUBLIC_APP_URL=https://biodatawala.in
NEXT_PUBLIC_APP_NAME=BioDatawala

# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://biodatawala.in

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_password
SMTP_FROM=noreply@biodatawala.in

# Payment Gateway
STRIPE_PUBLIC_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx

# File Storage
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Vercel Deployment (Recommended)

### 1. Connect Repository

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### 2. Configure Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your GitHub repository
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 3. Add Environment Variables

1. Go to Project Settings > Environment Variables
2. Add all variables from `.env.local`
3. Make sure to add them for all environments (Production, Preview, Development)

### 4. Deploy

- Push to main branch for automatic deployment
- Or use `vercel --prod` for manual deployment

## Custom Domain Setup

### 1. Add Domain to Vercel

1. Go to Project Settings > Domains
2. Add your domain: `biodatawala.in`
3. Add www subdomain: `www.biodatawala.in`

### 2. Configure DNS

Add the following DNS records at your domain registrar:

```
Type  Name  Value
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### 3. SSL Certificate

Vercel automatically provisions SSL certificates. Wait a few minutes for HTTPS to be enabled.

## Manual Deployment (VPS/AWS)

### 1. Build Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

### 2. Start Production Server

```bash
# Start server
npm start

# Or with PM2
npm install -g pm2
pm2 start npm --name "biodatawala" -- start
pm2 save
pm2 startup
```

### 3. Nginx Configuration

```nginx
server {
    listen 80;
    server_name biodatawala.in www.biodatawala.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d biodatawala.in -d www.biodatawala.in

# Auto-renewal
sudo certbot renew --dry-run
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test all template downloads
- [ ] Check mobile responsiveness
- [ ] Verify SEO tags (robots.txt, sitemap.xml)
- [ ] Test payment integration (if enabled)
- [ ] Verify email sending
- [ ] Check analytics tracking
- [ ] Test authentication flow
- [ ] Verify SSL certificate
- [ ] Test performance (Lighthouse score)
- [ ] Check error tracking (Sentry setup)
- [ ] Verify database connections
- [ ] Test API endpoints

## Monitoring & Maintenance

### Analytics
- Google Analytics 4
- Vercel Analytics
- Custom event tracking

### Error Tracking
```bash
# Install Sentry
npm install @sentry/nextjs

# Initialize Sentry
npx @sentry/wizard -i nextjs
```

### Performance Monitoring
- Vercel Speed Insights
- Lighthouse CI
- Web Vitals tracking

### Backups
- Database: Daily automated backups
- Code: Version control with Git
- Assets: Cloud storage with versioning

## Rollback Strategy

### Vercel
```bash
# List deployments
vercel ls

# Promote a previous deployment
vercel promote [deployment-url]
```

### Manual
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or checkout specific commit
git checkout [commit-hash]
git push origin main --force
```

## Support

For deployment issues:
- Check Vercel logs
- Review build logs
- Contact: support@biodatawala.in
