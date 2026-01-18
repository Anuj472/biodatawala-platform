import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online Free | Employee, Student, Visitor Cards - BioDatawala',
  description: 'Create professional ID cards online for employees, students, events, and visitors. 10+ templates with photo, barcode, and QR code support. Download instantly.',
  keywords: 'ID card maker, employee ID card, student ID card, visitor pass, event badge, corporate ID card maker online',
};

export default function IDCardMaker() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional ID Card Maker
              </h1>
              <p className="text-xl mb-6">
                Create employee IDs, student cards, visitor passes, and event badges instantly. 
                Professional templates with photo, barcode, and QR code support.
              </p>
              <Button size="lg">Create ID Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional ID Card Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {idCardTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Creating ID Cards</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Professional ID Cards Matter</h3>
              <p className="text-gray-700 mb-4">
                ID cards are essential for security, access control, and professional identity. Whether for corporate offices, 
                educational institutions, events, or visitor management, a well-designed ID card enhances credibility, ensures security, 
                and creates a professional impression.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of ID Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Corporate Employee ID Cards</h4>
              <p className="text-gray-700 mb-4">
                Professional employee identification with photo, name, designation, employee ID number, and company logo. 
                Often includes barcode or magnetic stripe for access control systems. Essential for building security and attendance tracking.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School or college identification featuring student photo, name, roll number, class/grade, and institution logo. 
                May include library access, mess facility, and academic year. Often used for examination halls and campus facilities.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Passes</h4>
              <p className="text-gray-700 mb-4">
                Temporary identification for guests and visitors with date, time, visiting department, and host name. 
                Security-focused design with validity period clearly marked. Often color-coded for different access levels.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Passes & Conference Badges</h4>
              <p className="text-gray-700 mb-4">
                Attendee identification for conferences, seminars, and events. Includes participant name, company/organization, 
                event name, and access level. Often features colorful branding matching event theme.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Membership Cards</h4>
              <p className="text-gray-700 mb-4">
                Club or organization membership identification with member details, membership tier, validity period, and benefits. 
                Used by gyms, libraries, associations, and loyalty programs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements of ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Photo</strong>: Clear, professional headshot with plain background</li>
                <li><strong>Name</strong>: Full name in legible font</li>
                <li><strong>ID Number</strong>: Unique identification number</li>
                <li><strong>Designation/Role</strong>: Job title or student class</li>
                <li><strong>Organization Logo</strong>: Company or institution branding</li>
                <li><strong>Barcode/QR Code</strong>: For digital scanning and access control</li>
                <li><strong>Validity Period</strong>: Issue and expiry dates</li>
                <li><strong>Security Features</strong>: Holograms, UV printing (for premium cards)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard ID Card Sizes</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>CR80 (Standard)</strong>: 85.6mm × 53.98mm (Same as credit card)</li>
                  <li><strong>CR79</strong>: 85mm × 54mm (Slightly smaller for lanyards)</li>
                  <li><strong>CR100</strong>: 98mm × 67mm (Larger format for more information)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Use brand colors</strong>: Maintain organizational color scheme</li>
                <li><strong>Keep it simple</strong>: Avoid cluttered designs</li>
                <li><strong>Ensure readability</strong>: Use clear, legible fonts (minimum 8pt)</li>
                <li><strong>High contrast</strong>: Dark text on light background or vice versa</li>
                <li><strong>Quality photo</strong>: Minimum 300 DPI for printing</li>
                <li><strong>Include contact info</strong>: Emergency number or address on back</li>
                <li><strong>Consider orientation</strong>: Horizontal or vertical layout</li>
                <li><strong>Security features</strong>: Add watermarks or special fonts</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Printing Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">🖨️ PVC Cards (Recommended)</h4>
                  <ul className="text-sm space-y-2">
                    <li>✅ Durable and waterproof</li>
                    <li>✅ Professional finish</li>
                    <li>✅ Long-lasting (2-3 years)</li>
                    <li>✅ Can add magnetic stripe</li>
                    <li>✅ Cost: ₹20-50 per card</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">📄 Paper/Laminated</h4>
                  <ul className="text-sm space-y-2">
                    <li>✅ Budget-friendly</li>
                    <li>✅ Quick to produce</li>
                    <li>✅ Good for temporary use</li>
                    <li>✅ Easy to update</li>
                    <li>✅ Cost: ₹5-15 per card</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bulk ID Card Creation Tips</h3>
              <p className="text-gray-700 mb-4">
                For organizations needing multiple cards:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Prepare a spreadsheet with all employee/student data</li>
                <li>Collect uniform photos (same dimensions, background)</li>
                <li>Use consistent naming convention for files</li>
                <li>Choose single template for entire batch</li>
                <li>Generate unique ID numbers systematically</li>
                <li>Review and proofread before bulk printing</li>
                <li>Consider professional printing services for large quantities</li>
              </ul>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Professional ID Cards?</h3>
                <p className="mb-6">Design and download in minutes</p>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Start Creating →
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
