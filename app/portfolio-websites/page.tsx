import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { portfolioWebsiteTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Portfolio Website Builder | Professional Personal Portfolio Sites - BioDatawala',
  description: 'Create stunning portfolio websites to showcase your work. Designer, developer, photographer, and freelancer templates. No coding required.',
  keywords: 'portfolio website, personal website builder, online portfolio, designer portfolio, developer portfolio, freelancer website',
};

export default function PortfolioWebsites() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Portfolio Website Builder
              </h1>
              <p className="text-xl mb-6">
                Create a professional portfolio website to showcase your work and attract clients. Beautiful templates for 
                designers, developers, photographers, and freelancers. No coding required.
              </p>
              <Button size="lg">Build Portfolio Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Portfolio Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {portfolioWebsiteTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Portfolio Websites</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why You Need a Portfolio Website</h3>
              <p className="text-gray-700 mb-4">
                In 2026, a portfolio website is no longer optional for creative professionals and freelancers—it's essential. 
                Your portfolio is your digital storefront, showcasing your best work 24/7 to potential clients and employers 
                worldwide. While LinkedIn and Instagram have their place, a dedicated portfolio website gives you complete 
                control over your professional narrative, demonstrates your expertise, and significantly increases your 
                chances of landing high-paying clients or dream jobs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Portfolio Website Sections</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Homepage/Hero Section</h4>
              <p className="text-gray-700 mb-4">
                <strong>Purpose:</strong> Make a powerful first impression in 3 seconds<br />
                <strong>Include:</strong> Your name, professional title, brief tagline, eye-catching hero image<br />
                <strong>Example:</strong> "Hi, I'm Sarah. A UI/UX Designer crafting digital experiences that users love."<br />
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. About Me</h4>
              <p className="text-gray-700 mb-4">
                Tell your professional story. Include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Your background and journey</li>
                <li>What you do and who you serve</li>
                <li>Your unique approach or philosophy</li>
                <li>Professional photo (approachable, professional)</li>
                <li>Key achievements or credentials</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Portfolio/Work Showcase</h4>
              <p className="text-gray-700 mb-4">
                <strong>The most important section.</strong> Display 6-12 of your best projects. For each project include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Project Title</strong>: Clear, descriptive name</li>
                <li><strong>Visual</strong>: High-quality image or mockup</li>
                <li><strong>Description</strong>: Challenge, solution, results</li>
                <li><strong>Role</strong>: Your specific contribution</li>
                <li><strong>Tools/Technologies</strong>: Software or skills used</li>
                <li><strong>Outcome</strong>: Measurable results if possible</li>
                <li><strong>Call-to-Action</strong>: "View Case Study" or "See More"</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Services Offered</h4>
              <p className="text-gray-700 mb-4">
                Clearly list what you offer:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>3-6 main services with brief descriptions</li>
                <li>Icons or visuals for each service</li>
                <li>Pricing (optional - can be "Starting from...")</li>
                <li>Process overview (consultation, design, delivery)</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Testimonials/Client Reviews</h4>
              <p className="text-gray-700 mb-4">
                Social proof is crucial. Include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>3-5 client testimonials</li>
                <li>Client name, company, and photo if possible</li>
                <li>Specific results or outcomes they achieved</li>
                <li>Star ratings or numerical scores</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">6. Contact Section</h4>
              <p className="text-gray-700 mb-4">
                Make it easy to reach you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Contact form (name, email, message, project type)</li>
                <li>Email address and phone number</li>
                <li>Social media links (LinkedIn, Instagram, Behance)</li>
                <li>Location (city/country if relevant)</li>
                <li>Availability status ("Available for projects") </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Portfolio Website by Profession</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Graphic Designers</h4>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Focus:</strong> Visual projects (logos, branding, posters)</li>
                  <li>• <strong>Layout:</strong> Grid or masonry for visual impact</li>
                  <li>• <strong>Showcase:</strong> Before/after, design process</li>
                  <li>• <strong>Tools:</strong> Adobe Creative Suite proficiency</li>
                </ul>
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">Web Developers</h4>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Focus:</strong> Live websites, web apps, code samples</li>
                  <li>• <strong>Include:</strong> GitHub links, tech stack used</li>
                  <li>• <strong>Showcase:</strong> Responsive design demos</li>
                  <li>• <strong>Highlight:</strong> Problem-solving and optimization</li>
                </ul>
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">Photographers</h4>
              <div className="bg-pink-50 p-4 rounded-lg mb-4">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Focus:</strong> High-quality image galleries</li>
                  <li>• <strong>Categories:</strong> Wedding, portrait, commercial, etc.</li>
                  <li>• <strong>Layout:</strong> Full-screen galleries, lightbox viewing</li>
                  <li>• <strong>Include:</strong> Pricing packages, booking calendar</li>
                </ul>
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">Writers/Content Creators</h4>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Focus:</strong> Published articles, blog posts, samples</li>
                  <li>• <strong>Include:</strong> Writing niche, client list</li>
                  <li>• <strong>Showcase:</strong> Links to published work</li>
                  <li>• <strong>Blog:</strong> Demonstrate expertise through blogging</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Visual Design</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Clean Layout</strong>: Avoid clutter, use white space effectively</li>
                <li><strong>Consistent Branding</strong>: Color scheme, fonts throughout</li>
                <li><strong>High-Quality Images</strong>: Professional, high-res visuals only</li>
                <li><strong>Readable Typography</strong>: 16px minimum for body text</li>
                <li><strong>Hierarchy</strong>: Clear visual hierarchy guides visitors</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">User Experience</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Fast Loading</strong>: Under 3 seconds load time</li>
                <li><strong>Mobile Responsive</strong>: 60%+ traffic is mobile</li>
                <li><strong>Easy Navigation</strong>: Clear menu, max 5-7 items</li>
                <li><strong>Smooth Scrolling</strong>: Pleasant browsing experience</li>
                <li><strong>Clear CTAs</strong>: "Contact Me", "View Project" buttons</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">SEO for Portfolio Websites</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Title Tags</strong>: "[Your Name] - [Your Profession] Portfolio"</li>
                <li><strong>Meta Descriptions</strong>: Compelling description with keywords</li>
                <li><strong>Alt Text</strong>: Describe images for search engines</li>
                <li><strong>URL Structure</strong>: Clean URLs (yourname.com/web-design)</li>
                <li><strong>Keywords</strong>: Use profession + location naturally</li>
                <li><strong>Blog</strong>: Regular posts help SEO ranking</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Technical Considerations</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Domain & Hosting</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Domain</strong>: yourname.com or yourname.design preferred</li>
                <li><strong>Hosting</strong>: Reliable hosting (Netlify, Vercel for modern sites)</li>
                <li><strong>SSL Certificate</strong>: HTTPS is essential (free with most hosts)</li>
                <li><strong>Email</strong>: Professional email (name@yoursite.com)</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Performance</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Optimize images (compress without losing quality)</li>
                <li>Use lazy loading for images</li>
                <li>Minimize code (CSS, JavaScript)</li>
                <li>Use CDN for faster global loading</li>
                <li>Enable browser caching</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Showing too many projects (quality > quantity)</li>
                <li>Missing contact information or broken contact forms</li>
                <li>Slow loading times from large, unoptimized images</li>
                <li>Not mobile-responsive design</li>
                <li>Outdated work or portfolio not regularly updated</li>
                <li>No clear call-to-action</li>
                <li>Overly complex navigation</li>
                <li>Missing about/bio section</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Maintenance & Updates</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Add new projects quarterly</li>
                <li>Remove outdated work</li>
                <li>Update testimonials and client list</li>
                <li>Refresh About section annually</li>
                <li>Check all links monthly</li>
                <li>Monitor analytics to improve</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Build Your Portfolio Website Today</h3>
                <p className="mb-6">Showcase your work and attract your dream clients</p>
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  Start Building Now →
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
