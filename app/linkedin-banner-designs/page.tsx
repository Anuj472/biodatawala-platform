import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { linkedinBannerTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'LinkedIn Banner Maker Free | Professional LinkedIn Background - BioDatawala',
  description: 'Create eye-catching LinkedIn banner designs. Professional templates for personal branding. Perfect size 1584x396px. Stand out to recruiters and clients.',
  keywords: 'linkedin banner, linkedin background, linkedin cover photo, linkedin header, professional banner design',
};

export default function LinkedInBannerDesigns() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                LinkedIn Banner Designs
              </h1>
              <p className="text-xl mb-6">
                Create professional LinkedIn banners that make a strong first impression. Perfect size (1584x396px), 
                customizable templates for every profession. Stand out to recruiters, clients, and connections.
              </p>
              <Button size="lg">Design LinkedIn Banner Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional LinkedIn Banner Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {linkedinBannerTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to LinkedIn Banner Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Your LinkedIn Banner Matters</h3>
              <p className="text-gray-700 mb-4">
                Your LinkedIn banner (also called background photo or cover image) is prime real estate on your 
                profile. It's one of the first things visitors see and plays a crucial role in your personal 
                branding. A professional, well-designed banner can significantly increase profile views and 
                connection requests.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">LinkedIn Banner Size & Specifications</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Dimensions:</strong> 1584 pixels wide × 396 pixels high</li>
                  <li><strong>File Format:</strong> JPG, PNG, or GIF</li>
                  <li><strong>Maximum File Size:</strong> 8 MB</li>
                  <li><strong>Aspect Ratio:</strong> 4:1 (approximately)</li>
                  <li><strong>Safe Zone:</strong> Avoid placing text in bottom right corner (covered by profile photo)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">What to Include in Your LinkedIn Banner</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Professional Headline/Tagline</h4>
              <p className="text-gray-700 mb-4">
                Your value proposition in 5-7 words. Examples: "Digital Marketing Strategist | SEO Expert", 
                "Full Stack Developer | React & Node.js", "Helping Businesses Grow Through Content Marketing".
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Your Expertise/Skills</h4>
              <p className="text-gray-700 mb-4">
                List 3-5 key skills or services. Use keywords that your target audience searches for. Example: 
                "Brand Strategy • Content Creation • Social Media Marketing".
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Contact Information (Optional)</h4>
              <p className="text-gray-700 mb-4">
                Website URL, email, or location if relevant. Keep it subtle. Example: "yourname.com" in corner.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Brand Colors & Logo</h4>
              <p className="text-gray-700 mb-4">
                If you have a personal brand or company, incorporate your brand colors and logo. Maintain 
                consistency across all your professional materials.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">LinkedIn Banner Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Visual Design</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>High Contrast:</strong> Ensure text is readable against background</li>
                <li><strong>Professional Colors:</strong> Blue conveys trust, avoid overly bright colors</li>
                <li><strong>Simple & Clean:</strong> Avoid clutter, focus on key message</li>
                <li><strong>Brand Consistency:</strong> Match your website/portfolio colors</li>
                <li><strong>Quality Images:</strong> Use high-resolution photos (no pixelation)</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Typography</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Readable Fonts:</strong> Sans-serif fonts (Arial, Helvetica) work best</li>
                <li><strong>Font Size:</strong> Large enough to read on mobile (40-60px for main text)</li>
                <li><strong>Limited Fonts:</strong> Use maximum 2 font families</li>
                <li><strong>Text Alignment:</strong> Center or left-aligned typically works best</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">LinkedIn Banner Ideas by Profession</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tech Professionals</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Code snippets or tech icons</li>
                    <li>• Programming languages you know</li>
                    <li>• GitHub contributions graph</li>
                    <li>• Tech-themed abstract backgrounds</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Designers/Creatives</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your design work samples</li>
                    <li>• Abstract artistic patterns</li>
                    <li>• Color palettes</li>
                    <li>• Creative process visualization</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Business Professionals</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• City skyline or office themes</li>
                    <li>• Professional headshot environment</li>
                    <li>• Success/growth graphics</li>
                    <li>• Company branding elements</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Consultants/Coaches</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Client testimonial quotes</li>
                    <li>• Before/after results</li>
                    <li>• Speaking/workshop photos</li>
                    <li>• Your framework/methodology</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>❌ Using default LinkedIn background (missed branding opportunity)</li>
                <li>❌ Low-resolution or pixelated images</li>
                <li>❌ Too much text (overwhelming, hard to read)</li>
                <li>❌ Unprofessional photos or memes</li>
                <li>❌ Text covered by profile picture</li>
                <li>❌ Irrelevant images not related to your profession</li>
                <li>❌ Overly bright or harsh colors</li>
                <li>❌ Contact info in profile photo danger zone</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Change Your LinkedIn Banner</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Go to your LinkedIn profile page</li>
                <li>Click the camera icon in the top right of your current banner</li>
                <li>Select "Change photo" or "Upload photo"</li>
                <li>Choose your new banner image (1584x396px)</li>
                <li>Adjust positioning if needed</li>
                <li>Click "Apply" or "Save"</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">LinkedIn Banner Optimization Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Mobile Preview:</strong> Check how it looks on mobile (most users)</li>
                <li><strong>A/B Test:</strong> Try different designs, track profile views</li>
                <li><strong>Update Regularly:</strong> Refresh every 3-6 months or for campaigns</li>
                <li><strong>Keywords:</strong> Include searchable terms in visible text</li>
                <li><strong>Call-to-Action:</strong> Subtle CTA like "Let's Connect" or website URL</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Banner Text Examples by Goal</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold mb-2">Job Seeking:</p>
                  <p className="text-gray-700 italic">"Experienced Marketing Manager | Open to Opportunities | SEO • Content • Analytics"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold mb-2">Freelancing:</p>
                  <p className="text-gray-700 italic">"Freelance Web Developer | Available for Projects | React • Next.js • Tailwind"</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold mb-2">Thought Leadership:</p>
                  <p className="text-gray-700 italic">"Helping Startups Scale | Founder Coach | 500+ Companies Advised"</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your LinkedIn Banner Now</h3>
                <p className="mb-6">Make a strong first impression on your profile</p>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Design Banner Now →
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
