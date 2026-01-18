import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { portfolioTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Portfolio Website Templates Free | Professional Portfolio Builder - BioDatawala',
  description: 'Create stunning portfolio websites for designers, developers, photographers. 10+ responsive templates. Free to customize, showcase your work professionally.',
  keywords: 'portfolio website, portfolio template, online portfolio, designer portfolio, developer portfolio, creative portfolio',
};

export default function PortfolioWebsites() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Portfolio Website Templates
              </h1>
              <p className="text-xl mb-6">
                Build a stunning online portfolio to showcase your work. Perfect for designers, developers, 
                photographers, and creative professionals. Responsive, modern templates that make you stand out.
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Creating Portfolio Websites</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why You Need a Portfolio Website</h3>
              <p className="text-gray-700 mb-4">
                In today's digital age, a portfolio website is essential for showcasing your skills and attracting 
                clients or employers. It's your personal brand hub - a place to display your best work, tell your 
                story, and establish credibility. Unlike social media platforms, you own and control your portfolio 
                completely.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Portfolio Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Homepage/Hero Section</strong>: Compelling introduction with your name and profession</li>
                <li><strong>About Page</strong>: Your story, background, and what makes you unique</li>
                <li><strong>Work/Projects Gallery</strong>: Showcase your best 6-12 projects</li>
                <li><strong>Case Studies</strong>: Detailed breakdowns of key projects</li>
                <li><strong>Skills & Services</strong>: What you offer and your expertise areas</li>
                <li><strong>Testimonials</strong>: Client reviews and recommendations</li>
                <li><strong>Contact Form</strong>: Easy way for visitors to reach you</li>
                <li><strong>Resume/CV Download</strong>: Downloadable PDF of your credentials</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Portfolio Templates by Profession</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Designer Portfolio</h4>
              <p className="text-gray-700 mb-4">
                <strong>Focus:</strong> Visual storytelling, large images, white space, case studies with design process.
                <br /><strong>Best for:</strong> Graphic designers, UI/UX designers, brand designers, illustrators.
                <br /><strong>Key features:</strong> Image galleries, before/after comparisons, client logos, Behance/Dribbble integration.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Developer Portfolio</h4>
              <p className="text-gray-700 mb-4">
                <strong>Focus:</strong> Technical skills, live project links, GitHub integration, code examples.
                <br /><strong>Best for:</strong> Web developers, software engineers, full-stack developers.
                <br /><strong>Key features:</strong> Tech stack icons, GitHub stats, live demos, code snippets.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Photographer Portfolio</h4>
              <p className="text-gray-700 mb-4">
                <strong>Focus:</strong> High-resolution images, minimal text, full-screen galleries.
                <br /><strong>Best for:</strong> Photographers, videographers, visual artists.
                <br /><strong>Key features:</strong> Lightbox galleries, category filtering, Instagram feed, booking system.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Writer/Content Creator Portfolio</h4>
              <p className="text-gray-700 mb-4">
                <strong>Focus:</strong> Published articles, writing samples, blog integration.
                <br /><strong>Best for:</strong> Writers, journalists, content strategists, copywriters.
                <br /><strong>Key features:</strong> Article excerpts, publication logos, testimonials, Medium integration.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Portfolio Design Best Practices</h3>
              
              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-cyan-800">Visual Design</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Keep it clean and uncluttered</li>
                  <li>✓ Use consistent color scheme (2-3 colors max)</li>
                  <li>✓ Choose readable fonts (1 heading font, 1 body font)</li>
                  <li>✓ Ensure mobile responsiveness</li>
                  <li>✓ Use high-quality images (optimize for web)</li>
                  <li>✓ Implement smooth transitions and animations</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-blue-800">Content Strategy</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Show only your best work (quality over quantity)</li>
                  <li>✓ Include variety to demonstrate range</li>
                  <li>✓ Write compelling project descriptions</li>
                  <li>✓ Explain your process and results</li>
                  <li>✓ Keep content updated regularly</li>
                  <li>✓ Use storytelling to engage visitors</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Present Your Projects</h3>
              <p className="text-gray-700 mb-4">
                Each project in your portfolio should tell a complete story:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Project Title</strong>: Clear, descriptive name</li>
                <li><strong>Client/Company</strong>: Who you worked for (if allowed)</li>
                <li><strong>Role</strong>: Your specific contribution</li>
                <li><strong>Challenge/Problem</strong>: What needed to be solved</li>
                <li><strong>Solution/Approach</strong>: How you tackled it</li>
                <li><strong>Results/Impact</strong>: Measurable outcomes when possible</li>
                <li><strong>Technologies/Tools</strong>: What you used</li>
                <li><strong>Visuals</strong>: Screenshots, mockups, or photos</li>
                <li><strong>Links</strong>: Live site, GitHub repo, or case study</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">About Page Elements</h3>
              <p className="text-gray-700 mb-4">
                Your About page should create a personal connection:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Professional Photo</strong>: High-quality headshot or creative portrait</li>
                <li><strong>Your Story</strong>: How you got into your field, what drives you</li>
                <li><strong>Experience</strong>: Years in industry, notable projects</li>
                <li><strong>Skills & Expertise</strong>: What you're great at</li>
                <li><strong>Clients/Companies</strong>: Logos of organizations you've worked with</li>
                <li><strong>Education/Certifications</strong>: Relevant credentials</li>
                <li><strong>Personal Touch</strong>: Hobbies, interests that humanize you</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">SEO for Portfolio Websites</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use descriptive page titles with your name and profession</li>
                <li>Write unique meta descriptions for each page</li>
                <li>Include alt text for all images</li>
                <li>Use relevant keywords naturally in content</li>
                <li>Create a blog to regularly publish content</li>
                <li>Build backlinks through guest posts and collaborations</li>
                <li>Optimize page load speed</li>
                <li>Submit sitemap to Google Search Console</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Portfolio Must-Haves vs Nice-to-Haves</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Must-Haves ✓</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Clear navigation</li>
                    <li>• Contact information</li>
                    <li>• Best work samples</li>
                    <li>• About section</li>
                    <li>• Mobile responsive</li>
                    <li>• Fast loading</li>
                    <li>• Professional domain</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-yellow-800">Nice-to-Haves +</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Blog section</li>
                    <li>• Testimonials carousel</li>
                    <li>• Newsletter signup</li>
                    <li>• Social proof badges</li>
                    <li>• Live chat</li>
                    <li>• Dark mode toggle</li>
                    <li>• Animations</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Portfolio Mistakes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Showing too many projects (stick to 6-12 best)</li>
                <li>Poor image quality or slow loading images</li>
                <li>No clear call-to-action</li>
                <li>Outdated work from years ago</li>
                <li>Too much text, not enough visuals</li>
                <li>Broken links or non-functional demos</li>
                <li>No contact information or hidden contact form</li>
                <li>Overly complex navigation</li>
              </ul>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Build Your Portfolio Website Today</h3>
                <p className="mb-6">Showcase your work and attract your dream clients</p>
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Get Started Now →
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
