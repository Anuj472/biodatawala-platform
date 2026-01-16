import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Maker Online Free | Professional Business Card Design - BioDatawala',
  description: 'Design professional business cards online. Modern templates with QR codes. Free customization, instant download.',
  keywords: 'business card maker, business card design, professional business cards, visiting card maker, custom business cards',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Create impressive business cards that make lasting first impressions. Modern designs with QR codes, 
                minimalist layouts, and professional templates. Free to customize, instant download.
              </p>
              <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                Design Your Card Free
              </Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
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

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Business Card Design Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite digital networking, business cards remain essential for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>First Impressions</strong>: Physical card shows professionalism and preparedness</li>
                <li><strong>Memorable Branding</strong>: Tangible reminder of your business</li>
                <li><strong>Quick Information Exchange</strong>: Faster than typing contacts</li>
                <li><strong>Networking Events</strong>: Essential at conferences and trade shows</li>
                <li><strong>Cultural Importance</strong>: Still valued in many business cultures</li>
                <li><strong>Personal Touch</strong>: More personal than digital sharing</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Design Styles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Minimalist Professional</h4>
              <p className="text-gray-700 mb-4">
                Clean, simple design with essential information only. White space-focused with elegant typography. 
                Perfect for consultants, lawyers, and corporate professionals. Features: simple layout, limited colors, classic fonts.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Creative Colorful</h4>
              <p className="text-gray-700 mb-4">
                Vibrant colors, unique layouts, and creative elements. Ideal for designers, artists, and creative professionals. 
                Features: bold colors, unique shapes, custom illustrations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. QR Code Business Cards</h4>
              <p className="text-gray-700 mb-4">
                Modern cards with scannable QR codes linking to digital profile, website, or vCard. Tech-forward approach 
                combining physical and digital networking. Features: prominent QR code, minimal text, digital-first design.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Photo Business Cards</h4>
              <p className="text-gray-700 mb-4">
                Professional headshot included for personal branding. Helps people remember you after meetings. 
                Perfect for real estate agents, sales professionals, and consultants.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">Must-Have Elements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Full Name (clearly readable)</li>
                  <li>✓ Job Title / Designation</li>
                  <li>✓ Company Name</li>
                  <li>✓ Phone Number (mobile preferred)</li>
                  <li>✓ Email Address</li>
                  <li>✓ Website URL</li>
                </ul>
                <h4 className="text-lg font-bold mt-4 mb-3">Optional Elements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>○ Company Logo</li>
                  <li>○ Physical Address</li>
                  <li>○ Social Media Handles (LinkedIn, Instagram)</li>
                  <li>○ QR Code</li>
                  <li>○ Tagline or Slogan</li>
                  <li>○ Professional Photo</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Business Card Sizes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>India Standard</strong>: 3.5" × 2" (89mm × 51mm)</li>
                <li><strong>US Standard</strong>: 3.5" × 2" (88.9mm × 50.8mm)</li>
                <li><strong>Europe Standard</strong>: 3.346" × 2.165" (85mm × 55mm)</li>
                <li><strong>Square Cards</strong>: 2.5" × 2.5" (unique, memorable)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Principles</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Readability First</strong>: Use minimum 8pt font size</li>
                <li><strong>Contrast</strong>: Ensure text is easily readable on background</li>
                <li><strong>Hierarchy</strong>: Name should be most prominent</li>
                <li><strong>White Space</strong>: Don't overcrowd with information</li>
                <li><strong>Brand Consistency</strong>: Match your other branding materials</li>
                <li><strong>Quality</strong>: Use high-resolution images and logos</li>
                <li><strong>Print Considerations</strong>: Leave bleed area for printing</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Using too many fonts (stick to 2-3 max)</li>
                <li>Cramming too much information</li>
                <li>Poor quality images or logos</li>
                <li>Hard-to-read color combinations</li>
                <li>Outdated contact information</li>
                <li>No white space (cluttered design)</li>
                <li>Using personal email addresses</li>
                <li>Ignoring back side of card</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Tips</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li>📄 <strong>Paper Stock</strong>: Use 300-400 GSM for premium feel</li>
                  <li>🎨 <strong>Finish Options</strong>: Matte, glossy, or textured</li>
                  <li>✨ <strong>Special Effects</strong>: Foil stamping, embossing, spot UV</li>
                  <li>🖨️ <strong>Print Quantity</strong>: Order in bulk for better pricing</li>
                  <li>👁️ <strong>Proof Check</strong>: Always review proof before final print</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Design Your Business Card Today</h3>
                <p className="mb-6">Professional templates, easy customization, print-ready files</p>
                <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                  Create Business Card →
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
