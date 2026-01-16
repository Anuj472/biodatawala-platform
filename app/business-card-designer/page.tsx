import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Designer Online Free | Professional Visiting Card Maker - BioDatawala',
  description: 'Design professional business cards online for free. Modern, creative, and minimalist templates. Add logo, QR code. Download and print.',
  keywords: 'business card designer, visiting card maker, professional business card, business card template, QR code business card',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Create stunning business cards that make a lasting impression. Modern templates with logo, 
                QR code, and professional design. Perfect for entrepreneurs and professionals.
              </p>
              <Button size="lg">Design Your Card Free</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Business Card Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessCardTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Business Card Design Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite digital networking, business cards remain essential for face-to-face interactions. They provide 
                a tangible reminder of your meeting, showcase your professionalism, and offer a quick way to share contact 
                information. A well-designed card makes you memorable and demonstrates attention to detail.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information on Business Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Name</strong>: Your full name, prominently displayed</li>
                <li><strong>Job Title</strong>: Your position or profession</li>
                <li><strong>Company Name</strong>: Organization you represent</li>
                <li><strong>Logo</strong>: Company or personal brand logo</li>
                <li><strong>Phone Number</strong>: Primary contact number</li>
                <li><strong>Email Address</strong>: Professional email</li>
                <li><strong>Website</strong>: Company or personal website URL</li>
                <li><strong>Physical Address</strong>: (Optional) Office location</li>
                <li><strong>Social Media</strong>: LinkedIn, Twitter handles</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Design Principles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Keep It Simple</h4>
              <p className="text-gray-700 mb-4">
                Less is more. Avoid cluttering with too much information or decorative elements. 
                Focus on essential contact details with plenty of white space for breathing room.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Hierarchy and Readability</h4>
              <p className="text-gray-700 mb-4">
                Your name should be the most prominent element, followed by job title and contact information. 
                Use font sizes and weights strategically. Minimum font size should be 8pt for readability.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Brand Consistency</h4>
              <p className="text-gray-700 mb-4">
                Match your brand colors, fonts, and style. Your business card should align with your website, 
                letterhead, and other marketing materials for cohesive brand identity.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Quality Materials</h4>
              <p className="text-gray-700 mb-4">
                Card stock thickness matters - 14pt to 16pt is standard, 18pt+ is premium. Consider finishes: 
                matte (professional, easy to write on), glossy (vibrant colors), or textured (unique feel).
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Popular Business Card Styles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
                  <h4 className="font-bold mb-2">Minimalist Professional</h4>
                  <p className="text-gray-700 text-sm mb-2">Clean lines, simple typography, monochromatic colors</p>
                  <p className="text-gray-600 text-sm">Best for: Lawyers, consultants, corporate professionals</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200">
                  <h4 className="font-bold mb-2">Creative Colorful</h4>
                  <p className="text-gray-700 text-sm mb-2">Vibrant colors, unique layouts, artistic elements</p>
                  <p className="text-gray-600 text-sm">Best for: Designers, artists, creative agencies</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-200">
                  <h4 className="font-bold mb-2">Modern Tech</h4>
                  <p className="text-gray-700 text-sm mb-2">QR codes, geometric shapes, tech-forward design</p>
                  <p className="text-gray-600 text-sm">Best for: Tech startups, developers, IT professionals</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-200">
                  <h4 className="font-bold mb-2">Photo Business Card</h4>
                  <p className="text-gray-700 text-sm mb-2">Professional headshot, personal branding focus</p>
                  <p className="text-gray-600 text-sm">Best for: Real estate agents, personal brands</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Business Card Sizes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>US Standard</strong>: 3.5" × 2" (89mm × 51mm)</li>
                <li><strong>Europe Standard</strong>: 85mm × 55mm (3.35" × 2.17")</li>
                <li><strong>Square Card</strong>: 2.5" × 2.5" (unique, memorable)</li>
                <li><strong>Mini Card</strong>: 3.5" × 1.25" (slim, modern)</li>
                <li><strong>Folded Card</strong>: 7" × 2" folded to 3.5" × 2" (more space)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">QR Code on Business Cards</h3>
              <p className="text-gray-700 mb-4">
                QR codes bridge physical and digital. When scanned, they can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Direct to your website or LinkedIn profile</li>
                <li>Automatically save contact details to phone</li>
                <li>Share your digital portfolio</li>
                <li>Link to a video introduction</li>
                <li>Provide directions to your office</li>
                <li>Offer a special discount or promotion</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Tip:</strong> Keep QR code size at least 1" × 1" for reliable scanning. Test it before printing!
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Two-Sided vs Single-Sided Cards</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Front Side (Always Include):</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Logo and company name</li>
                  <li>• Your name and title</li>
                  <li>• Primary contact method</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Back Side (Optional Uses):</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Additional contact information</li>
                  <li>• QR code for digital vCard</li>
                  <li>• Social media handles</li>
                  <li>• Tagline or mission statement</li>
                  <li>• Multiple language versions</li>
                  <li>• Services list or specializations</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Business Card Mistakes</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Too Much Information</strong>: Keep it concise and relevant</li>
                <li><strong>Poor Quality Images</strong>: Use high-resolution logos (300 DPI minimum)</li>
                <li><strong>Hard to Read Fonts</strong>: Avoid overly decorative typefaces</li>
                <li><strong>Wrong Contact Info</strong>: Double-check phone, email, website</li>
                <li><strong>No Bleed Area</strong>: Design should extend past cut line</li>
                <li><strong>Inconsistent Branding</strong>: Match your other marketing materials</li>
                <li><strong>Cheap Paper Stock</strong>: Invest in quality - it reflects on you</li>
                <li><strong>Forgetting to Proofread</strong>: Typos destroy credibility</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Printing Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Order a sample first before bulk printing</li>
                <li>Use CMYK color mode for printing (not RGB)</li>
                <li>Include 1/8" bleed area beyond card edge</li>
                <li>Keep important elements 1/8" inside cut line</li>
                <li>Convert all text to outlines to preserve fonts</li>
                <li>Save final file as PDF with crop marks</li>
                <li>Order extras - you'll need more than you think</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital Business Cards</h3>
              <p className="text-gray-700 mb-4">
                Consider creating a digital version that can be shared via email, text, or NFC technology. 
                Digital cards can be updated instantly, tracked for engagement, and are eco-friendly. 
                Many apps now allow tapping phones to exchange contact information.
              </p>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Design Your Professional Business Card</h3>
                <p className="mb-6">Make a lasting impression with our premium templates</p>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
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
