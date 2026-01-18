import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { linkedinBannerTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'LinkedIn Banner Designs | Professional Profile Background Images - BioDatawala',
  description: 'Create stunning LinkedIn banner designs that showcase your professional brand. Custom templates for all industries. Perfect size 1584x396px.',
  keywords: 'linkedin banner, linkedin background, linkedin cover photo, professional banner design, linkedin profile picture',
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
                Create professional LinkedIn banners that make a powerful first impression. Industry-specific templates 
                optimized for 1584×396px. Stand out and showcase your personal brand.
              </p>
              <Button size="lg">Design Banner Free</Button>
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
                Your LinkedIn banner (also called background photo or cover image) is prime real estate on your profile. 
                It's one of the first things visitors see, appearing prominently at the top of your profile. A professional, 
                well-designed banner can increase profile views by up to 21 times according to LinkedIn data. It's your 
                chance to showcase your personal brand, expertise, and professional identity visually.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Perfect LinkedIn Banner Dimensions</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Recommended Size</strong>: 1584 × 396 pixels</li>
                  <li><strong>Minimum Size</strong>: 1128 × 191 pixels</li>
                  <li><strong>Aspect Ratio</strong>: 4:1 (width to height)</li>
                  <li><strong>File Size</strong>: Maximum 8MB</li>
                  <li><strong>File Format</strong>: JPG, PNG, or GIF</li>
                  <li><strong>Mobile Display</strong>: Center section is most visible on mobile (1350×220px safe zone)</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> Your profile photo covers the bottom-left area of the banner. Design around 
                this to ensure important elements aren't hidden.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">What to Include in Your Banner</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Essential Elements</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Your Value Proposition</strong>: What you do and who you help</li>
                <li><strong>Professional Title/Role</strong>: Your primary expertise</li>
                <li><strong>Key Skills or Specializations</strong>: 3-5 main areas</li>
                <li><strong>Contact Information</strong>: Email or website (optional)</li>
                <li><strong>Industry-Relevant Visuals</strong>: Images that represent your work</li>
                <li><strong>Brand Colors</strong>: Consistent with your personal brand</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Optional Elements</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Company logo (if prominently associated)</li>
                <li>Certifications or credentials</li>
                <li>Call-to-action ("Available for consulting")</li>
                <li>Awards or achievements</li>
                <li>Relevant statistics or metrics</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Keep It Professional</h4>
              <p className="text-gray-700 mb-4">
                LinkedIn is a professional network. Avoid overly casual images, party photos, or anything controversial. 
                Your banner should reflect the same professionalism as your resume.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Use High-Quality Images</h4>
              <p className="text-gray-700 mb-4">
                Blurry or pixelated banners look unprofessional. Use high-resolution images (at least 1584×396px) and 
                ensure they look sharp on both desktop and mobile devices.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Maintain Brand Consistency</h4>
              <p className="text-gray-700 mb-4">
                Use colors, fonts, and design elements consistent with your personal brand. If you have a website or 
                portfolio, your LinkedIn banner should complement that aesthetic.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Consider the Profile Photo Overlap</h4>
              <p className="text-gray-700 mb-4">
                Your circular profile photo covers the bottom-left corner. Avoid placing important text or visuals in 
                that area (approximately 300×300px from the bottom-left corner).
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Make It Readable</h4>
              <p className="text-gray-700 mb-4">
                If you include text, ensure it's large enough to read on mobile devices. Use contrasting colors for 
                text and background. Avoid small fonts (minimum 40-50px for main text).
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Banner Ideas by Industry</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tech Professionals</h4>
                  <p className="text-sm text-gray-700">
                    Use code snippets, circuit boards, or abstract tech imagery. Include programming languages or 
                    technologies you specialize in. Modern, clean designs work best.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Business & Finance</h4>
                  <p className="text-sm text-gray-700">
                    Professional cityscape, office environments, or abstract business graphics. Use blues, grays, and 
                    gold for trustworthy, professional feel.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Creative Professionals</h4>
                  <p className="text-sm text-gray-700">
                    Showcase your work! Use a collage of your designs, photography, or art. Colorful and unique designs 
                    that reflect your creative style.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Healthcare</h4>
                  <p className="text-sm text-gray-700">
                    Medical imagery (stethoscope, ECG lines), healthcare facilities, or abstract health symbols. 
                    Use calming blues and greens.
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Educators & Coaches</h4>
                  <p className="text-sm text-gray-700">
                    Inspirational quotes, learning imagery, or classroom/training visuals. Show your teaching philosophy 
                    or methodology.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Freelancers & Consultants</h4>
                  <p className="text-sm text-gray-700">
                    Highlight your services and availability. Include "Open for Projects" or "Available for Consulting" 
                    with contact info.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Psychology for Banners</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Blue</strong>: Trust, professionalism, stability (most popular for corporate)</li>
                <li><strong>Green</strong>: Growth, health, balance (great for sustainability, wellness)</li>
                <li><strong>Purple</strong>: Creativity, wisdom, luxury (creative industries)</li>
                <li><strong>Orange</strong>: Energy, enthusiasm, innovation (startups, tech)</li>
                <li><strong>Black/Gray</strong>: Sophistication, elegance, authority (executive level)</li>
                <li><strong>Red</strong>: Passion, energy, urgency (use sparingly)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Using low-resolution or stretched images</li>
                <li>Including too much text (keep it concise)</li>
                <li>Placing important elements in the bottom-left (profile photo area)</li>
                <li>Using generic stock photos everyone else uses</li>
                <li>Inconsistent branding across your profile</li>
                <li>Outdated information (update regularly)</li>
                <li>Unprofessional or overly casual imagery</li>
                <li>Difficult-to-read fonts or color combinations</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">When to Update Your Banner</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>When you change jobs or roles</li>
                <li>When you rebrand your business</li>
                <li>When launching a new service or product</li>
                <li>Seasonally (showing you're active)</li>
                <li>When your current banner looks outdated</li>
                <li>When job searching (add "Open to Work" messaging)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Upload Your Banner</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Go to your LinkedIn profile</li>
                <li>Click the camera icon in the top-right of your banner area</li>
                <li>Select "Upload photo"</li>
                <li>Choose your image file (JPG or PNG)</li>
                <li>Adjust positioning if needed</li>
                <li>Click "Apply" to save</li>
              </ol>

              <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your LinkedIn Banner Now</h3>
                <p className="mb-6">Make a powerful first impression with a professional banner</p>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Start Designing →
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
