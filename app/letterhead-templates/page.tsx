import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { letterheadTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Letterhead Templates Free | Professional Company Letterhead Maker - BioDatawala',
  description: 'Create professional letterhead designs for your business. Customizable templates with company logo and branding. A4 size, print-ready PDF download.',
  keywords: 'letterhead template, company letterhead, business letterhead, professional letterhead, letterhead design',
};

export default function LetterheadTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Letterhead Templates
              </h1>
              <p className="text-xl mb-6">
                Design professional letterheads for your business or organization. Customizable templates with 
                company branding. A4 size, print-ready formats. Perfect for official correspondence.
              </p>
              <Button size="lg">Create Letterhead Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Letterhead Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {letterheadTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Letterhead Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">What is a Letterhead?</h3>
              <p className="text-gray-700 mb-4">
                A letterhead is the heading at the top of a business letter, containing the company or organization's 
                name, logo, address, and contact information. It's printed on official stationery paper and used for 
                formal correspondence. A well-designed letterhead projects professionalism and establishes brand identity.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Letterhead Components</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Company Logo</h4>
              <p className="text-gray-700 mb-4">
                Your logo is the centerpiece of brand recognition. Place it prominently at the top, typically centered 
                or top-left. Use high-resolution vector format for crisp printing. Logo should be appropriately sized 
                (not too large, not too small).
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Company Name</h4>
              <p className="text-gray-700 mb-4">
                Official registered business name in clear, professional font. Can be part of logo or separate. Use 
                proper capitalization and spacing. Consider including tagline if it's part of your brand.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Contact Information</h4>
              <p className="text-gray-700 mb-4">
                Complete business address, phone number(s), email address, and website URL. Often placed in header 
                or footer. Use consistent formatting. Include multiple contact methods for accessibility.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Registration Details (Optional)</h4>
              <p className="text-gray-700 mb-4">
                Company registration number, GST number, CIN (Corporate Identity Number). Typically in small font 
                at footer. Required for official business correspondence in many jurisdictions.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Letterhead Layout Options</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Classic Header Layout</h4>
                  <p className="text-gray-700 mb-2">
                    Logo and company name at top center or left. Contact information below or in footer. 
                    Clean, professional, widely recognized format.
                  </p>
                  <p className="text-sm text-gray-600 italic">Best for: Traditional businesses, law firms, corporations</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Modern Sidebar Layout</h4>
                  <p className="text-gray-700 mb-2">
                    Vertical band on left side with logo and contact info. Main content area remains spacious. 
                    Contemporary, distinctive look.
                  </p>
                  <p className="text-sm text-gray-600 italic">Best for: Creative agencies, startups, modern businesses</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Minimalist Layout</h4>
                  <p className="text-gray-700 mb-2">
                    Simple logo at top, minimal text. Contact details in small font at footer. Maximum white space.
                  </p>
                  <p className="text-sm text-gray-600 italic">Best for: Design studios, consultants, luxury brands</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Color Choices</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Brand Colors:</strong> Use your official brand color palette</li>
                <li><strong>Professional Tones:</strong> Navy, black, gray convey professionalism</li>
                <li><strong>Accent Colors:</strong> Use brand accent color sparingly for emphasis</li>
                <li><strong>Print Consideration:</strong> Ensure colors print well (not too light)</li>
                <li><strong>Limited Palette:</strong> 2-3 colors maximum for clean look</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Typography</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Professional Fonts:</strong> Arial, Helvetica, Times New Roman, Garamond</li>
                <li><strong>Font Hierarchy:</strong> Company name largest, contact details smallest</li>
                <li><strong>Readability:</strong> Minimum 9pt for body text, 8pt for footer</li>
                <li><strong>Consistency:</strong> Use same fonts as other brand materials</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Layout & Spacing</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Margins:</strong> 1 inch all sides (standard), 0.75 inch minimum</li>
                <li><strong>Content Area:</strong> Leave ample space for letter content</li>
                <li><strong>Header Size:</strong> 1-2 inches for header area</li>
                <li><strong>Balance:</strong> Don't overload header, keep it proportional</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Letterhead Sizes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>A4 (International):</strong> 210mm × 297mm (8.27" × 11.69")</li>
                <li><strong>Letter (US):</strong> 8.5" × 11" (216mm × 279mm)</li>
                <li><strong>A5 (Note):</strong> 148mm × 210mm (5.83" × 8.27")</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Letterhead Types</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Corporate Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Formal, traditional design. Includes all legal information, multiple contact methods. Used for 
                official business communication, contracts, proposals.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Personal Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Individual professional's letterhead. Includes personal logo or name, contact info. Used by 
                consultants, freelancers, professionals.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Department Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Specific to company departments (HR, Finance, Legal). Company branding with department identification. 
                Used for department-specific correspondence.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Non-Profit Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Includes mission statement or tagline. Registration number for tax purposes. Used for fundraising, 
                donor communication, official statements.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Letterheads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-800">Digital Letterhead (PDF)</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Use for email attachments</li>
                    <li>✓ RGB color mode</li>
                    <li>✓ Smaller file size</li>
                    <li>✓ Eco-friendly</li>
                    <li>✓ Easy to update</li>
                    <li>✓ Instant delivery</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-gray-800">Printed Letterhead</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Use for physical mail</li>
                    <li>✓ CMYK color mode</li>
                    <li>✓ High resolution (300 DPI)</li>
                    <li>✓ Premium paper (100-120 GSM)</li>
                    <li>✓ Professional feel</li>
                    <li>✓ Signature ready</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Specifications</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Paper Weight:</strong> 80-100 GSM (standard), 100-120 GSM (premium)</li>
                <li><strong>Paper Finish:</strong> Matte (professional), Glossy (modern), Textured (luxury)</li>
                <li><strong>Color Mode:</strong> CMYK for printing, RGB for digital</li>
                <li><strong>Resolution:</strong> 300 DPI minimum for print</li>
                <li><strong>Bleed:</strong> 3mm bleed for full-color designs</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>❌ Cluttered design with too much information</li>
                <li>❌ Low-resolution logo (pixelated when printed)</li>
                <li>❌ Unreadable fonts (too small or decorative)</li>
                <li>❌ Inconsistent branding (different from other materials)</li>
                <li>❌ Wrong color mode (RGB for print instead of CMYK)</li>
                <li>❌ Insufficient margins (text too close to edges)</li>
                <li>❌ Outdated contact information</li>
                <li>❌ Poor quality paper for printing</li>
              </ul>

              <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Letterhead</h3>
                <p className="mb-6">Design branded stationery for your business today</p>
                <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100">
                  Start Designing Now →
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
