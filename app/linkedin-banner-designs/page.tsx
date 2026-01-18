import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { linkedInBannerTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'LinkedIn Banner Maker Free | Professional Cover Photo Designer - BioDatawala',
  description: 'Create eye-catching LinkedIn banners with 10+ professional templates. Perfect size 1584x396. Free to customize, instant download.',
  keywords: 'linkedin banner, linkedin cover photo, linkedin background, professional banner design, linkedin header',
};

export default function LinkedInBannerDesigns() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                LinkedIn Banner Designer
              </h1>
              <p className="text-xl mb-6">
                Create professional LinkedIn banners that make a powerful first impression. Perfect size (1584x396), 
                customizable templates for every industry. Stand out and get noticed by recruiters.
              </p>
              <Button size="lg">Create LinkedIn Banner Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional LinkedIn Banner Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {linkedInBannerTemplates.map((template) => (
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
                Your LinkedIn banner (also called cover photo or background image) is prime real estate on your profile. 
                It's one of the first things visitors see and plays a crucial role in your professional brand. A 
                well-designed banner can increase profile views by up to 40% and make you more memorable to recruiters.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Perfect LinkedIn Banner Size</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="font-bold mb-2">Official Dimensions:</p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Desktop:</strong> 1584 x 396 pixels</li>
                  <li><strong>Mobile:</strong> 1128 x 191 pixels (visible area)</li>
                  <li><strong>File Format:</strong> JPG or PNG</li>
                  <li><strong>Max File Size:</strong> 8MB</li>
                  <li><strong>Safe Zone:</strong> Keep important content in the center 1000x200px</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">What to Include in Your LinkedIn Banner</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Your Value Proposition</h4>
              <p className="text-gray-700 mb-4">
                Communicate what you do and who you help in 5-7 words. Examples:
                <br />• "Helping Startups Build Scalable Web Applications"
                <br />• "Data Scientist | AI/ML Expert | Speaker"
                <br />• "Marketing Strategist for B2B SaaS Companies"
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Professional Branding Elements</h4>
              <p className="text-gray-700 mb-4">
                Include your personal logo, company logo, or professional icons that represent your expertise. 
                Use brand colors consistently across your profile.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Contact Information (Optional)</h4>
              <p className="text-gray-700 mb-4">
                Some professionals add email, website URL, or social media handles. Keep it subtle and professional.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Visual Interest</h4>
              <p className="text-gray-700 mb-4">
                Use relevant background images, patterns, or gradients that reflect your industry while keeping 
                text readable.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">LinkedIn Banner Ideas by Profession</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">For Job Seekers:</h4>
                  <p className="text-sm text-gray-700">
                    "Actively Seeking [Job Title] Roles | [Key Skill 1] | [Key Skill 2] | [Key Skill 3]" with 
                    professional color scheme
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">For Entrepreneurs:</h4>
                  <p className="text-sm text-gray-700">
                    "Founder of [Company Name] | Solving [Problem] for [Target Audience]" with company branding
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">For Consultants:</h4>
                  <p className="text-sm text-gray-700">
                    "[Industry] Consultant | Helping Companies [Benefit] | [Years]+ Years Experience" with 
                    professional imagery
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">For Content Creators:</h4>
                  <p className="text-sm text-gray-700">
                    "Creating Content About [Topic] | [Follower Count]+ Followers | [Platform] Creator" with 
                    vibrant design
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-blue-800">Do's ✓</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Use high-resolution images (at least 1584x396)</li>
                  <li>✓ Keep important elements in the safe zone</li>
                  <li>✓ Use readable fonts (minimum 40px for key text)</li>
                  <li>✓ Maintain brand consistency with profile photo</li>
                  <li>✓ Test on both desktop and mobile</li>
                  <li>✓ Use contrasting colors for text visibility</li>
                  <li>✓ Keep it professional and industry-appropriate</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-red-800">Don'ts ✗</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✗ Use low-quality or pixelated images</li>
                  <li>✗ Overcrowd with too much text</li>
                  <li>✗ Use overly casual or unprofessional images</li>
                  <li>✗ Include outdated information</li>
                  <li>✗ Use hard-to-read fonts or colors</li>
                  <li>✗ Copy someone else's design exactly</li>
                  <li>✗ Forget to update when changing roles</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Psychology for LinkedIn Banners</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Blue</strong>: Trust, professionalism, corporate (most popular on LinkedIn)</li>
                <li><strong>Navy</strong>: Authority, expertise, confidence</li>
                <li><strong>Green</strong>: Growth, innovation, sustainability</li>
                <li><strong>Purple</strong>: Creativity, wisdom, luxury</li>
                <li><strong>Orange</strong>: Energy, enthusiasm, approachability</li>
                <li><strong>Gray/Black</strong>: Sophistication, minimalism, modern</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Typography Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Limit to 2 fonts maximum (1 heading, 1 body)</li>
                <li>Use sans-serif fonts for better readability</li>
                <li>Recommended fonts: Montserrat, Roboto, Open Sans, Poppins</li>
                <li>Main text should be 50-70px</li>
                <li>Supporting text can be 30-40px</li>
                <li>Ensure high contrast between text and background</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Upload Your LinkedIn Banner</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Go to your LinkedIn profile</li>
                <li>Click the camera icon on your current banner</li>
                <li>Click "Change photo"</li>
                <li>Upload your banner image (JPG or PNG)</li>
                <li>Adjust positioning if needed</li>
                <li>Click "Apply" to save</li>
                <li>Check appearance on desktop and mobile</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">When to Update Your Banner</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Starting a job search</li>
                <li>Launching a new business or product</li>
                <li>Changing careers or industries</li>
                <li>After earning certifications or awards</li>
                <li>For special campaigns or events</li>
                <li>At least once every 6 months to stay fresh</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Banner Optimization Tips</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ A/B test different versions with colleagues</li>
                  <li>✓ Include keywords relevant to your target audience</li>
                  <li>✓ Align banner message with your headline</li>
                  <li>✓ Use action-oriented language</li>
                  <li>✓ Keep it updated with current role and achievements</li>
                  <li>✓ Compress image file size for faster loading</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your LinkedIn Banner Now</h3>
                <p className="mb-6">Make a powerful first impression on LinkedIn</p>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Design Your Banner →
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
