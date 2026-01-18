import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { letterheadTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Letterhead Template Maker Free | Professional Company Letterhead Designer - BioDatawala',
  description: 'Create professional letterheads for your business with 10+ templates. Add logo, contact details, and branding. Free to customize, instant download.',
  keywords: 'letterhead template, business letterhead, company letterhead, professional letterhead design, custom letterhead maker',
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
                Letterhead Template Maker
              </h1>
              <p className="text-xl mb-6">
                Design professional letterheads for your business communications. Add your logo, contact details, 
                and branding elements. Perfect for official letters, invoices, and correspondence.
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
                A letterhead is the heading at the top of a sheet of business letter paper. It includes your company 
                name, logo, address, and contact information. Professional letterheads establish credibility and 
                brand identity for all your business correspondence.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Letterhead Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Company Logo</strong>: Primary branding element at the top</li>
                <li><strong>Company Name</strong>: Full legal or trading name</li>
                <li><strong>Address</strong>: Complete business address</li>
                <li><strong>Phone Number</strong>: Primary contact number</li>
                <li><strong>Email Address</strong>: Professional business email</li>
                <li><strong>Website URL</strong>: Company website</li>
                <li><strong>Registration Details</strong>: Company registration number (if applicable)</li>
                <li><strong>Tax Information</strong>: GST/Tax ID (if required)</li>
                <li><strong>Social Media</strong>: LinkedIn, Twitter handles (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Letterhead Size</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-bold mb-2">Common Sizes:</p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>A4</strong>: 210mm × 297mm (International standard)</li>
                  <li><strong>Letter</strong>: 8.5" × 11" (US standard)</li>
                  <li><strong>Legal</strong>: 8.5" × 14" (US legal documents)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Letterhead Layout Options</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Top Header Design</h4>
              <p className="text-gray-700 mb-4">
                Most common format - logo and contact details at the top of the page. Clean, professional, and 
                maximizes letter writing space.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Top & Bottom Design</h4>
              <p className="text-gray-700 mb-4">
                Header at top with logo and name, footer at bottom with address and contact details. Balanced 
                and elegant appearance.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Sidebar Design</h4>
              <p className="text-gray-700 mb-4">
                Vertical stripe on left or right side with company info. Modern and space-efficient.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Corner Design</h4>
              <p className="text-gray-700 mb-4">
                Minimal design with logo in top corner and contact in bottom corner. Clean and unobtrusive.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-blue-800">Do's ✓</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Use your brand colors consistently</li>
                  <li>✓ Keep design simple and professional</li>
                  <li>✓ Ensure high-resolution logo (300 DPI)</li>
                  <li>✓ Use readable fonts (11-12pt for body text)</li>
                  <li>✓ Maintain proper margins (1" on all sides)</li>
                  <li>✓ Test print before bulk printing</li>
                  <li>✓ Include all legally required information</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-red-800">Don'ts ✗</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✗ Overcrowd with too much information</li>
                  <li>✗ Use more than 2-3 colors</li>
                  <li>✗ Use low-quality or pixelated logos</li>
                  <li>✗ Choose decorative fonts for contact info</li>
                  <li>✗ Make header too large (max 2-3 inches)</li>
                  <li>✗ Forget to leave writing space</li>
                  <li>✗ Use overly casual designs for formal business</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Typography Guidelines</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Company Name</strong>: 18-24pt, bold, brand font</li>
                <li><strong>Contact Details</strong>: 9-10pt, simple readable font</li>
                <li><strong>Body Text</strong>: 11-12pt, professional serif or sans-serif</li>
                <li><strong>Recommended Fonts</strong>: Arial, Helvetica, Times New Roman, Calibri</li>
                <li><strong>Font Limit</strong>: Maximum 2 fonts (1 heading, 1 body)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Professional Industries</h4>
                  <p className="text-sm text-gray-700">
                    Law, finance, consulting: Navy, gray, black, dark blue. Conservative and trustworthy.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Creative Industries</h4>
                  <p className="text-sm text-gray-700">
                    Design, marketing, media: Vibrant colors, brand-specific palettes. More flexible and expressive.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Letterheads</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Corporate Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Formal and conservative for established businesses. Includes all legal requirements and professional 
                presentation.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Personal Letterhead</h4>
              <p className="text-gray-700 mb-4">
                For freelancers and professionals. More flexible design with personal branding elements.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Medical/Healthcare Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Clean and professional with medical qualifications, registration numbers, and clinic details.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Legal Letterhead</h4>
              <p className="text-gray-700 mb-4">
                Traditional format with bar association details, court registration, and formal presentation.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Letterheads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-800">Digital Letterheads</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Use RGB color mode</li>
                    <li>✓ Save as PDF or Word template</li>
                    <li>✓ 72-150 DPI resolution sufficient</li>
                    <li>✓ Can include clickable links</li>
                    <li>✓ Easy to update and modify</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-gray-800">Printed Letterheads</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Use CMYK color mode</li>
                    <li>✓ 300 DPI minimum resolution</li>
                    <li>✓ Quality paper (90-120 GSM)</li>
                    <li>✓ Professional printing service</li>
                    <li>✓ Consider watermarks</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Uses</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Business correspondence and formal letters</li>
                <li>Quotations and proposals</li>
                <li>Invoices and receipts</li>
                <li>Contracts and agreements</li>
                <li>Official announcements</li>
                <li>Client communications</li>
                <li>Legal documents</li>
                <li>Medical prescriptions and reports</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cost Estimates</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-green-800">Printing Costs (India)</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Black & White</strong>: ₹2-5 per sheet</li>
                  <li><strong>Color</strong>: ₹10-20 per sheet</li>
                  <li><strong>Premium Paper</strong>: ₹20-50 per sheet</li>
                  <li><strong>Minimum Order</strong>: 100-500 sheets typical</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Letterhead</h3>
                <p className="mb-6">Build credibility with branded business stationery</p>
                <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100">
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
