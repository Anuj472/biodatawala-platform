import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { portfolioTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Portfolio Website Templates Free | Professional Portfolio Maker - BioDatawala',
  description: 'Create stunning portfolio websites with our free templates. Perfect for designers, developers, photographers, and freelancers. Mobile-responsive designs.',
  keywords: 'portfolio website, online portfolio, designer portfolio, developer portfolio, photographer portfolio, freelancer website',
};

export default function PortfolioWebsites() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Portfolio Website Templates
              </h1>
              <p className="text-xl mb-6">
                Showcase your work with stunning portfolio websites. Perfect for designers, developers, 
                photographers, and creative professionals. Mobile-responsive and easy to customize.
              </p>
              <Button size="lg">Create Portfolio Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Portfolio Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {portfolioTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Building Portfolio Websites</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why You Need a Portfolio Website</h3>
              <p className="text-gray-700 mb-4">
                A portfolio website is your digital showcase, your professional identity online. It's often the 
                first impression potential clients or employers get of your work. Unlike social media profiles or 
                job boards, your portfolio website is completely under your control, allowing you to present your 
                work exactly as you envision it.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Portfolio Website Sections</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Homepage/Hero Section</h4>
              <p className="text-gray-700 mb-4">
                <strong>What to Include:</strong> Professional photo or avatar, name, tagline describing what you 
                do ("UI/UX Designer", "Full-Stack Developer"), and a clear call-to-action button. First impressions 
                happen in 3 seconds - make them count.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. About Me Section</h4>
              <p className="text-gray-700 mb-4">
                <strong>Tell Your Story:</strong> Brief biography (2-3 paragraphs), your background, what drives 
                you, your approach to work. Include skills, years of experience, and what makes you unique. Keep 
                it conversational and authentic.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Portfolio/Work Section</h4>
              <p className="text-gray-700 mb-4">
                <strong>Showcase Best Work:</strong> 6-12 of your best projects. Quality over quantity. Include 
                project titles, descriptions, your role, technologies used, and results achieved. Use high-quality 
                images or demos. Add case studies for major projects.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Services/Skills Section</h4>
              <p className="text-gray-700 mb-4">
                <strong>What You Offer:</strong> List services you provide or skills you possess. Be specific - 
                "WordPress Development" not just "Web Development". Use icons or visual elements. Include 
                proficiency levels if relevant.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Testimonials/Reviews</h4>
              <p className="text-gray-700 mb-4">
                <strong>Build Trust:</strong> Client testimonials with names, photos, and company/role. Include 
                specific feedback about your work quality, communication, and results. 3-6 testimonials ideal.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">6. Contact Section</h4>
              <p className="text-gray-700 mb-4">
                <strong>Make It Easy:</strong> Contact form, email address, phone number (optional), social media 
                links. Consider adding your availability status ("Available for freelance"). Include location if 
                relevant.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Portfolio Types by Profession</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-800">Designer Portfolio</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Emphasize visual aesthetics and creativity</li>
                    <li>• Large, high-quality project images</li>
                    <li>• Case studies showing design process</li>
                    <li>• Before/after comparisons</li>
                    <li>• Dribbble, Behance integrations</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Developer Portfolio</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• GitHub profile integration</li>
                    <li>• Live project demos and code samples</li>
                    <li>• Technical stack for each project</li>
                    <li>• Blog posts on technical topics</li>
                    <li>• Open source contributions</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Photographer Portfolio</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Gallery-focused layout</li>
                    <li>• High-resolution images</li>
                    <li>• Category organization (weddings, portraits, etc.)</li>
                    <li>• Minimal text, let photos speak</li>
                    <li>• Instagram feed integration</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-orange-800">Writer/Content Creator Portfolio</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Writing samples with excerpts</li>
                    <li>• Publication links and bylines</li>
                    <li>• Blog or articles section</li>
                    <li>• Client logos and testimonials</li>
                    <li>• Content statistics (views, engagement)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Portfolio Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Visual Design</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Consistent Branding:</strong> Use 2-3 colors max, consistent typography</li>
                <li><strong>White Space:</strong> Don't cram everything, let content breathe</li>
                <li><strong>High-Quality Images:</strong> Optimize but maintain quality</li>
                <li><strong>Professional Typography:</strong> Readable fonts, proper hierarchy</li>
                <li><strong>Visual Hierarchy:</strong> Guide visitors' eyes to important content</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">User Experience</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Fast Loading:</strong> Optimize images, minimize code</li>
                <li><strong>Mobile Responsive:</strong> 60%+ visitors use mobile</li>
                <li><strong>Clear Navigation:</strong> Easy to find sections</li>
                <li><strong>Smooth Animations:</strong> Subtle, not distracting</li>
                <li><strong>Call-to-Actions:</strong> Make it obvious how to contact you</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Writing Effective Project Descriptions</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="font-bold mb-3">Template Structure:</p>
                <ol className="text-gray-700 space-y-2">
                  <li><strong>1. Project Title & Type:</strong> "E-commerce Website Redesign"</li>
                  <li><strong>2. Client/Context:</strong> "For XYZ Retail (or Personal Project)"</li>
                  <li><strong>3. Problem:</strong> "Client needed modern design to increase conversions"</li>
                  <li><strong>4. Your Role:</strong> "Lead Designer - UI/UX, Visual Design"</li>
                  <li><strong>5. Solution:</strong> "Created clean, user-friendly interface with..."</li>
                  <li><strong>6. Tools/Tech:</strong> "Built with: Figma, React, Tailwind CSS"</li>
                  <li><strong>7. Results:</strong> "Increased conversion rate by 35%"</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Domain Name & Hosting Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Domain:</strong> Use yourname.com if available, or yourname.design/.dev</li>
                <li><strong>Keep It Professional:</strong> Avoid numbers, hyphens, or nicknames</li>
                <li><strong>Hosting Options:</strong> Vercel (free), Netlify (free), GitHub Pages (free)</li>
                <li><strong>Custom Email:</strong> hello@yourname.com looks more professional</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">SEO for Portfolio Websites</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use your name and profession in title tags</li>
                <li>Write unique meta descriptions for each page</li>
                <li>Include alt text for all images</li>
                <li>Create descriptive URLs (yoursite.com/projects/app-design)</li>
                <li>Add schema markup for better search results</li>
                <li>Regular content updates (blog posts help SEO)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Portfolio Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>❌ Showing too many projects - focus on quality</li>
                <li>❌ Poor quality images or outdated work</li>
                <li>❌ No contact information or hidden contact form</li>
                <li>❌ Overly complex navigation</li>
                <li>❌ Slow loading times</li>
                <li>❌ Not mobile responsive</li>
                <li>❌ Vague project descriptions</li>
                <li>❌ Broken links or outdated information</li>
              </ul>

              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Build Your Portfolio Website Today</h3>
                <p className="mb-6">Showcase your work professionally and attract more clients</p>
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
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
