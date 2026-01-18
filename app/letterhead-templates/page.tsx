import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { letterheadTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Letterhead Templates | Professional Business Letterhead Design - BioDatawala',
  description: 'Create professional letterhead designs for your business. Customizable templates with company logo and branding. Print-ready PDF download.',
  keywords: 'letterhead template, business letterhead, company letterhead design, professional letterhead, branded stationery',
};

export default function LetterheadTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Letterhead Templates
              </h1>
              <p className="text-xl mb-6">
                Design professional letterheads that elevate your business communication. Customizable templates with 
                your logo and brand colors. Perfect for official letters, proposals, and correspondence.
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Business Letterheads</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Letterheads Are Essential for Business</h3>
              <p className="text-gray-700 mb-4">
                A professional letterhead is more than just stationery—it's a crucial branding tool that adds credibility 
                to your business communications. Every official letter, proposal, quote, or formal communication represents 
                your company. A well-designed letterhead conveys professionalism, establishes brand identity, and ensures 
                your communications are instantly recognizable. Studies show that businesses with branded letterheads are 
                perceived as 30% more trustworthy by recipients.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Letterhead Elements</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Header Section</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Company Logo</strong>: Primary branding element, usually top-left or centered</li>
                <li><strong>Company Name</strong>: Full legal business name</li>
                <li><strong>Tagline</strong>: Optional, if it's part of your branding</li>
                <li><strong>Contact Information</strong>: Phone, email, website</li>
                <li><strong>Physical Address</strong>: Complete business address</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Footer Section</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Registration Details</strong>: Company registration number, GST number</li>
                <li><strong>Additional Contact Info</strong>: Alternative phone numbers, branch addresses</li>
                <li><strong>Social Media</strong>: Professional social media handles</li>
                <li><strong>Legal Disclaimers</strong>: If required for your industry</li>
                <li><strong>Website URL</strong>: Company website</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Letterhead Design Principles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Brand Consistency</h4>
              <p className="text-gray-700 mb-4">
                Your letterhead should match your overall brand identity. Use the same colors, fonts, and design elements 
                as your business cards, website, and other marketing materials. Consistency builds brand recognition and 
                trust.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. White Space</h4>
              <p className="text-gray-700 mb-4">
                The main body of the letterhead should have ample white space for the letter content. Headers and footers 
                should not take up more than 25% of the page combined. Leave adequate margins (minimum 1 inch on all sides).
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Readable Typography</h4>
              <p className="text-gray-700 mb-4">
                Use professional, easy-to-read fonts. For contact information, use minimum 8pt font. Your company name 
                should be prominent (16-24pt). Avoid decorative or script fonts for contact details.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Professional Color Scheme</h4>
              <p className="text-gray-700 mb-4">
                Stick to 2-3 colors maximum. Use your brand colors but ensure good contrast for readability. Dark text 
                on light background works best for printed letters. Consider how colors will print in grayscale.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Letterhead Sizes</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>A4 (International)</strong>: 210mm × 297mm (8.27" × 11.69")</li>
                  <li><strong>US Letter</strong>: 8.5" × 11" (216mm × 279mm)</li>
                  <li><strong>Legal Size</strong>: 8.5" × 14" (216mm × 356mm)</li>
                  <li><strong>A5 (Compact)</strong>: 148mm × 210mm (5.83" × 8.27")</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Recommendation:</strong> Design for A4 size as it's the international standard and works in most countries.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Letterhead Designs</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Traditional/Classic</h4>
              <p className="text-gray-700 mb-4">
                Conservative design with logo at top center or left, bordered header and footer, serif fonts. Best for: 
                Law firms, financial institutions, government offices, established corporations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Modern/Minimalist</h4>
              <p className="text-gray-700 mb-4">
                Clean lines, lots of white space, sans-serif fonts, subtle colors. Best for: Tech companies, startups, 
                creative agencies, modern businesses.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Creative/Artistic</h4>
              <p className="text-gray-700 mb-4">
                Unique layouts, bold colors, custom graphics, unconventional placement. Best for: Design studios, 
                creative agencies, artists, photographers.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Corporate/Professional</h4>
              <p className="text-gray-700 mb-4">
                Balanced design, brand colors, professional imagery, structured layout. Best for: Medium to large 
                corporations, consulting firms, professional services.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Letterhead Layout Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Top-Aligned Layout</h4>
                  <p className="text-sm text-gray-700">
                    Logo and contact info at the top. Most common and traditional. Provides maximum space for letter content.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Top & Bottom Layout</h4>
                  <p className="text-sm text-gray-700">
                    Header with logo and name, footer with contact details. Frames the letter nicely and looks balanced.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Sidebar Layout</h4>
                  <p className="text-sm text-gray-700">
                    Vertical band on left or right side with company info. Modern look, stands out from traditional designs.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Centered Layout</h4>
                  <p className="text-sm text-gray-700">
                    Logo and name centered at top. Symmetrical and elegant. Works well for formal business communications.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">What to Include in Different Sections</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Header Must-Haves</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Company logo (high resolution)</li>
                <li>Company legal name</li>
                <li>Primary contact number</li>
                <li>Professional email address</li>
                <li>Website URL</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Footer Information</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Complete physical address</li>
                <li>Registration/GST numbers (if applicable)</li>
                <li>Additional branch addresses</li>
                <li>Fax number (if relevant)</li>
                <li>Social media icons with handles</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Print Specifications</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Resolution</strong>: Minimum 300 DPI for print</li>
                  <li><strong>Color Mode</strong>: CMYK for printing, RGB for digital</li>
                  <li><strong>Bleed</strong>: 3mm (0.125") bleed area for professional printing</li>
                  <li><strong>Safe Zone</strong>: Keep important elements 5mm from edges</li>
                  <li><strong>Paper Stock</strong>: 80-100 GSM for letters, 100-120 GSM for premium</li>
                  <li><strong>Finish</strong>: Matte or silk finish preferred over glossy</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Letterheads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-gray-800">Digital Letterheads</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Can be used as email templates</li>
                    <li>✓ Easy to update information</li>
                    <li>✓ No printing costs</li>
                    <li>✓ Instant use and distribution</li>
                    <li>✓ Eco-friendly option</li>
                    <li>✓ Can include clickable links</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-gray-800">Printed Letterheads</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ More formal and official feel</li>
                    <li>✓ Better for legal documents</li>
                    <li>✓ Tactile, premium experience</li>
                    <li>✓ Can include security features</li>
                    <li>✓ No technology required</li>
                    <li>✓ Traditional professionalism</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Uses for Letterheads</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Official business correspondence</li>
                <li>Client proposals and quotes</li>
                <li>Legal notices and contracts</li>
                <li>Invoice and billing documents</li>
                <li>Reference letters and recommendations</li>
                <li>Press releases and announcements</li>
                <li>Thank you letters to clients</li>
                <li>Internal memos and notices</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Using low-resolution logos (causes pixelation)</li>
                <li>Including too much information (cluttered look)</li>
                <li>Inconsistent branding across materials</li>
                <li>Using unprofessional email addresses</li>
                <li>Outdated contact information</li>
                <li>Poor color choices that don't print well</li>
                <li>Inadequate margins for letter content</li>
                <li>Complex designs that distract from the message</li>
              </ul>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Letterhead</h3>
                <p className="mb-6">Elevate your business communications with branded stationery</p>
                <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
                  Design Letterhead Now →
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
