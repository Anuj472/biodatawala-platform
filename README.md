# BioDatawala Platform

> Professional multi-service document design platform for creating biodatas, resumes, certificates, and more.

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🚀 Overview

BioDatawala is a comprehensive SaaS platform that enables users to create professional documents for various purposes - from marriage biodatas and resumes to business cards and certificates. The platform offers 100+ templates across 14 different services with an intuitive editor and instant download capabilities.

### 🎯 Key Features

- **14 Professional Services** - Marriage biodatas, resumes, wedding cards, business cards, certificates, ID cards, cover letters, portfolios, LinkedIn banners, letterheads, and more
- **100+ Templates** - Carefully designed templates for every use case
- **Easy-to-Use Editor** - Intuitive drag-and-drop editor with real-time preview
- **Instant Download** - Export as PDF, JPG, or PNG
- **Mobile Responsive** - Works seamlessly on all devices
- **SEO Optimized** - All pages optimized for search engines
- **Free & Premium** - Free templates with premium options available

## 📊 Project Status

**Current Phase**: Phase 4 Complete (71% Done)

### Progress Overview
- ✅ Service Pages: 10 of 14 (71%)
- ✅ Templates: 100 of 140 (71%)
- ✅ Core Components: 10 components built
- ✅ Editor Framework: Complete
- ✅ Authentication Pages: Complete
- ⏳ Template Rendering: In Progress
- ⏳ PDF Generation: Pending
- ⏳ Database Integration: Planned

### Completed Services

1. ✅ **Marriage Biodata Maker** - Create beautiful marriage biodatas
2. ✅ **Resume/CV Maker** - ATS-friendly professional resumes
3. ✅ **Wedding Invitation Cards** - Digital and printable wedding cards
4. ✅ **Business Card Designer** - Professional business cards
5. ✅ **Certificate Generator** - Achievement and course certificates
6. ✅ **ID Card Maker** - Employee and student ID cards
7. ✅ **Cover Letter Templates** - Job application cover letters
8. ✅ **Portfolio Websites** - Professional portfolio designs
9. ✅ **LinkedIn Banner Designs** - Optimized LinkedIn backgrounds
10. ✅ **Letterhead Templates** - Company letterhead designs

### Remaining Services

11. ⏳ Pre-Wedding Templates
12. ⏳ Biodata Posters
13. ⏳ Family Introduction Videos
14. ⏳ Job Application Tracker

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom React components

### Backend (Planned)
- **Authentication**: NextAuth.js
- **Database**: Supabase (PostgreSQL)
- **Storage**: AWS S3
- **Payment**: Razorpay / Stripe
- **Email**: SendGrid

### Tools & Libraries
- **PDF Generation**: jsPDF / @react-pdf/renderer
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (planned)
- **Validation**: Zod (planned)
- **Analytics**: Google Analytics 4

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Anuj472/biodatawala-platform.git
cd biodatawala-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
# Add other variables as needed
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
```
http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # TypeScript type checking
```

## 📚 Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[SPECIFICATION.md](docs/SPECIFICATION.md)** - Complete technical specifications
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide for various platforms
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and changes
- **[Phase Summaries](docs/)** - Detailed progress reports

## 🏭 Project Structure

```
biodatawala-platform/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── editor/            # Template editor
│   └── [services]/        # Service pages
├── components/
│   ├── common/            # Reusable UI components
│   └── editor/            # Editor components
├── lib/
│   ├── constants.ts       # App constants
│   ├── utils.ts           # Utility functions
│   ├── template-data.ts   # Template definitions
│   └── auth-config.ts     # Authentication config
├── types/                 # TypeScript type definitions
├── config/                # Configuration files
├── public/                # Static assets
├── docs/                  # Documentation
└── .env.example           # Environment variables template
```

## 🎨 Features in Detail

### Template Editor
- Real-time preview
- Drag-and-drop elements
- Color customization
- Font selection
- Photo upload
- Zoom controls (25%-200%)
- Save drafts
- Export to PDF/JPG/PNG

### Template Categories
1. **Marriage & Wedding** - Biodatas, wedding invitations, pre-wedding cards
2. **Career** - Resumes, CVs, cover letters
3. **Business** - Business cards, letterheads, certificates
4. **Identity** - ID cards, badges, passes
5. **Digital** - Portfolio websites, LinkedIn banners

## 💰 Pricing

### Free Plan
- Access to 60+ free templates
- Basic editor features
- PDF download with watermark
- 5 documents per month

### Monthly Plan (₹299/month)
- All 100+ templates
- Full editor features
- Unlimited downloads
- No watermark
- Priority support

### Yearly Plan (₹1,999/year)
- Everything in Monthly
- 2 months free
- Premium templates
- Custom branding
- Dedicated support

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 🐛 Bug Reports

Found a bug? Please open an issue on [GitHub Issues](https://github.com/Anuj472/biodatawala-platform/issues) with:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Anuj472/biodatawala-platform)

1. Push code to GitHub
2. Import repository to Vercel
3. Configure environment variables
4. Deploy

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: Anuj Kumar
- **GitHub**: [@Anuj472](https://github.com/Anuj472)

## 💬 Support

- **Email**: support@biodatawala.in
- **GitHub Issues**: [Create Issue](https://github.com/Anuj472/biodatawala-platform/issues)
- **Documentation**: [View Docs](docs/)

## 🚀 Roadmap

### Phase 5 (Current)
- [ ] Complete remaining 4 service pages
- [ ] Add remaining 40 templates
- [ ] Build template rendering engine
- [ ] Implement PDF generation
- [ ] Complete authentication system
- [ ] Database integration

### Future Features
- [ ] Payment gateway integration
- [ ] User dashboard
- [ ] Template favorites
- [ ] Template search & filters
- [ ] Collaborative editing
- [ ] API for developers
- [ ] Mobile app (React Native)
- [ ] AI-powered suggestions
- [ ] Multi-language support

## ⭐ Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting platform
- All open-source contributors

## 📊 Stats

- **Lines of Code**: 10,000+
- **Templates**: 100
- **Components**: 10
- **Pages**: 15
- **Commits**: 17
- **Contributors**: 1

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Anuj472">Anuj Kumar</a>
</p>

<p align="center">
  <a href="https://github.com/Anuj472/biodatawala-platform">GitHub</a> •
  <a href="docs/SPECIFICATION.md">Documentation</a> •
  <a href="https://github.com/Anuj472/biodatawala-platform/issues">Issues</a> •
  <a href="CHANGELOG.md">Changelog</a>
</p>
