import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Maker Online Free | Professional Visiting Card Designer - BioDatawala',
  description: 'Create professional business cards online. 10+ modern templates with QR codes, social media, and custom branding. Download print-ready PDFs.',
  keywords: 'business card maker, visiting card design, professional business card, QR code business card, online card designer',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Create stunning business cards that make lasting impressions. Modern templates with QR codes, 
                social media integration, and professional designs.
              </p>
              <Button size="lg">Design Business Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Modern Business Card Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessCardTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Business Card Design Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite living in a digital age, business cards remain essential networking tools. They provide a tangible connection, 
                convey professionalism, and are universally understood across cultures and industries. A well-designed business card 
                creates memorable first impressions and facilitates follow-up communications.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Full Name</strong>: Prominently displayed, easy to read</li>
                <li><strong>Job Title/Designation</strong>: Professional role or expertise</li>
                <li><strong>Company Name & Logo</strong>: Brand identity</li>
                <li><strong>Phone Number</strong>: Direct line or mobile</li>
                <li><strong>Email Address</strong>: Professional email</li>
                <li><strong>Website</strong>: Company or personal portfolio URL</li>
                <li><strong>Physical Address</strong>: Office location (optional)</li>
                <li><strong>Social Media</strong>: LinkedIn, Instagram handles (if relevant)</li>
                <li><strong>QR Code</strong>: Links to digital profile or vCard</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Business Card Sizes</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Standard (US)</strong>: 3.5" × 2" (88.9mm × 50.8mm)</li>
                  <li><strong>Standard (Europe)</strong>: 85mm × 55mm</li>
                  <li><strong>Standard (India)</strong>: 90mm × 50mm</li>
                  <li><strong>Square</strong>: 2.5" × 2.5" (unique, memorable)</li>
                  <li><strong>Slim</strong>: 3.5" × 1.75" (modern, minimalist)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Design Styles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Minimalist Professional</h4>
              <p className="text-gray-700 mb-4">
                Clean, simple design with lots of white space. Black text on white background or vice versa. Perfect for lawyers, 
                consultants, and corporate professionals. Emphasizes clarity and sophistication.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Creative & Colorful</h4>
              <p className="text-gray-700 mb-4">
                Vibrant colors, unique layouts, and creative typography. Ideal for designers, artists, photographers, and marketing 
                professionals. Shows personality and creative flair.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Corporate Traditional</h4>
              <p className="text-gray-700 mb-4">
                Formal design with company branding, conservative colors (navy, gray, black). Standard layout with clear hierarchy. 
                Perfect for banking, finance, and established corporations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Modern Two-Sided</h4>
              <p className="text-gray-700 mb-4">
                Front features minimal contact info and logo; back showcases services, tagline, or additional details. 
                Maximizes information while maintaining clean front design.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. QR Code Integrated</h4>
              <p className="text-gray-700 mb-4">
                Modern cards with prominent QR code linking to digital portfolio, website, or vCard. Tech-forward approach perfect 
                for startups, tech companies, and digital professionals.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Readable fonts</strong>: Minimum 8pt font size; use professional typefaces</li>
                <li><strong>Contrast</strong>: Ensure text stands out from background</li>
                <li><strong>Bleed area</strong>: Extend design 1/8" beyond trim for professional printing</li>
                <li><strong>Safe zone</strong>: Keep important info 1/8" from edges</li>
                <li><strong>Resolution</strong>: 300 DPI minimum for crisp printing</li>
                <li><strong>Color mode</strong>: Use CMYK for printing, not RGB</li>
                <li><strong>Logo quality</strong>: Vector format (SVG, AI, EPS) preferred</li>
                <li><strong>Consistency</strong>: Match company branding guidelines</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Typography Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Name</strong>: 14-18pt, bold or medium weight</li>
                <li><strong>Title</strong>: 10-12pt, regular or light weight</li>
                <li><strong>Contact details</strong>: 8-10pt, regular weight</li>
                <li><strong>Font pairing</strong>: Maximum 2 font families per card</li>
                <li><strong>Hierarchy</strong>: Size and weight create visual importance</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Options & Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">📄 Standard Printing</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>Paper</strong>: 300-350 GSM cardstock</li>
                    <li><strong>Finish</strong>: Matte or glossy</li>
                    <li><strong>Cost</strong>: ₹500-800 for 100 cards</li>
                    <li><strong>Timeline</strong>: 2-3 days</li>
                    <li>✅ Best for most businesses</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">✨ Premium Printing</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>Paper</strong>: 400+ GSM, textured</li>
                    <li><strong>Finish</strong>: Spot UV, foil stamping, embossing</li>
                    <li><strong>Cost</strong>: ₹1,500-3,000 for 100 cards</li>
                    <li><strong>Timeline</strong>: 5-7 days</li>
                    <li>✅ Premium brands, executives</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Special Finishes & Effects</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Spot UV</strong>: Glossy coating on specific areas for contrast</li>
                <li><strong>Foil Stamping</strong>: Metallic gold, silver, or colored foil</li>
                <li><strong>Embossing</strong>: Raised design elements</li>
                <li><strong>Debossing</strong>: Indented design elements</li>
                <li><strong>Edge Painting</strong>: Colored edges for uniqueness</li>
                <li><strong>Die Cutting</strong>: Custom shapes beyond rectangle</li>
                <li><strong>Letterpress</strong>: Vintage, tactile impression</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Physical Cards</h3>
              <p className="text-gray-700 mb-4">
                Modern approach: Hybrid strategy combining traditional printed cards with digital alternatives:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Physical cards</strong>: For in-person networking events, meetings, conferences</li>
                <li><strong>Digital cards</strong>: For email signatures, LinkedIn, virtual events</li>
                <li><strong>QR codes</strong>: Bridge physical and digital - scan to save contact</li>
                <li><strong>NFC cards</strong>: Tap-to-share contact information (premium option)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Too much information - keep it focused</li>
                <li>Poor quality images or logos</li>
                <li>Difficult to read fonts or colors</li>
                <li>No whitespace - overcrowded design</li>
                <li>Using personal email instead of professional</li>
                <li>Outdated information (always update before reprinting)</li>
                <li>Low-quality printing - invest in good printing</li>
              </ul>

              <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Design Your Business Card?</h3>
                <p className="mb-6">Create a professional card that stands out</p>
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
