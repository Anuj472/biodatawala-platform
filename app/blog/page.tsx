import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Card from '@/components/common/Card';

export const metadata = {
  title: 'Blog - Tips, Guides & Resources | BioDatawala',
  description: 'Expert tips on creating professional biodata, resumes, and documents. Learn best practices, design tips, and career advice.',
};

const blogArticles = [
  {
    id: 1,
    title: '10 Common Mistakes to Avoid in Marriage Biodata Format 2026',
    excerpt: 'Learn the most common errors people make when creating marriage biodata and how to avoid them for better responses.',
    category: 'Marriage',
    readTime: '5 min read',
    date: 'Jan 15, 2026',
    slug: '10-mistakes-marriage-biodata',
  },
  {
    id: 2,
    title: 'Resume Writing Tips for Freshers: Land Your First Job',
    excerpt: 'Complete guide for freshers on creating ATS-friendly resumes that get interview calls. Includes template recommendations.',
    category: 'Career',
    readTime: '8 min read',
    date: 'Jan 14, 2026',
    slug: 'resume-tips-freshers-2026',
  },
  {
    id: 3,
    title: 'Hindu vs Muslim vs Christian Biodata: Format Differences Explained',
    excerpt: 'Understand the key differences between different religious biodata formats and choose the right template.',
    category: 'Marriage',
    readTime: '6 min read',
    date: 'Jan 12, 2026',
    slug: 'biodata-format-differences',
  },
  {
    id: 4,
    title: 'How to Create ATS-Friendly Resume in 2026',
    excerpt: 'Master the art of creating resumes that pass Applicant Tracking Systems and reach human recruiters.',
    category: 'Career',
    readTime: '10 min read',
    date: 'Jan 10, 2026',
    slug: 'ats-friendly-resume-guide',
  },
  {
    id: 5,
    title: 'Top Wedding Invitation Card Trends for Indian Weddings 2026',
    excerpt: 'Discover the latest design trends in wedding invitations - from minimalist to royal palace themes.',
    category: 'Wedding',
    readTime: '7 min read',
    date: 'Jan 8, 2026',
    slug: 'wedding-invitation-trends-2026',
  },
  {
    id: 6,
    title: 'Complete Guide to Professional Business Card Design',
    excerpt: 'Learn design principles, essential information to include, and common mistakes to avoid in business cards.',
    category: 'Business',
    readTime: '6 min read',
    date: 'Jan 5, 2026',
    slug: 'business-card-design-guide',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Blog & Resources</h1>
            <p className="text-xl">Expert tips, guides, and best practices for creating professional documents</p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card hover padding="lg" className="h-full">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
