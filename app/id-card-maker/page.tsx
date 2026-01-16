import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online | Employee, Student ID Card Generator - BioDatawala',
  description: 'Create professional ID cards online for employees, students, events. Free templates, instant download, customizable designs.',
  keywords: 'ID card maker, employee ID card, student ID card, visitor pass, event pass generator, photo ID card online',
};

export default function IDCardMaker() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional ID Card Maker
              </h1>
              <p className="text-xl mb-6">
                Create employee ID cards, student IDs, visitor passes, and event badges in minutes. 
                Professional templates with photos, barcodes, and QR codes.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Create ID Card Free</Button>
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Creating Professional ID Cards</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of ID Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Employee ID Cards</h4>
              <p className="text-gray-700 mb-4">
                Corporate employee ID cards include company logo, employee photo, name, designation, employee ID number, 
                department, and validity period. Often feature barcodes or RFID chips for access control. Essential for 
                office security and identification.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School and college ID cards display student photo, name, roll number, class/course, academic year, and 
                institution name. May include library access, attendance tracking, and cafeteria payment features.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Pass</h4>
              <p className="text-gray-700 mb-4">
                Temporary visitor passes for guests entering office premises. Include visitor name, company represented, 
                host employee name, date, time in/out, and authorized areas. Usually printed on-demand.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Passes</h4>
              <p className="text-gray-700 mb-4">
                Conference, seminar, and event passes identify attendees and access levels. Include event name, attendee name, 
                organization, access type (VIP, speaker, delegate), and event dates.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential ID Card Information</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Photo</strong>: Clear passport-size photograph</li>
                <li><strong>Full Name</strong>: Employee/Student name</li>
                <li><strong>ID Number</strong>: Unique identification number</li>
                <li><strong>Designation/Class</strong>: Role or grade level</li>
                <li><strong>Department/Section</strong>: Organizational unit</li>
                <li><strong>Company/Institution Logo</strong>: Branding element</li>
                <li><strong>Validity Period</strong>: Expiry date if applicable</li>
                <li><strong>Contact Information</strong>: Emergency or general contact</li>
                <li><strong>Barcode/QR Code</strong>: For digital tracking (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Security Features</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Security Elements to Include:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Holographic overlays</strong>: Prevent duplication</li>
                  <li><strong>UV printing</strong>: Invisible under normal light</li>
                  <li><strong>Microtext</strong>: Tiny text visible under magnification</li>
                  <li><strong>RFID/NFC chips</strong>: Electronic authentication</li>
                  <li><strong>Barcodes/QR codes</strong>: Quick verification</li>
                  <li><strong>Color-shifting inks</strong>: Change color at angles</li>
                  <li><strong>Watermarks</strong>: Embedded logos or patterns</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard ID Card Sizes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>CR80 (Standard)</strong>: 85.6mm × 53.98mm (same as credit card)</li>
                <li><strong>CR79</strong>: 79mm × 50mm (slightly smaller, easier to laminate)</li>
                <li><strong>CR100</strong>: 98.5mm × 67mm (larger format for more information)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Keep it Simple</strong>: Don't overcrowd with information</li>
                <li><strong>Use Company Colors</strong>: Maintain brand consistency</li>
                <li><strong>High-Quality Photos</strong>: Clear, professional headshots</li>
                <li><strong>Readable Fonts</strong>: Minimum 8pt font size</li>
                <li><strong>Both Sides</strong>: Utilize front and back effectively</li>
                <li><strong>Durability</strong>: Use lamination or PVC cards</li>
                <li><strong>Orientation</strong>: Horizontal usually works best</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold mb-3">PVC Card Printing</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Durable plastic cards</li>
                    <li>Professional appearance</li>
                    <li>Water and wear resistant</li>
                    <li>Can embed RFID chips</li>
                    <li>Higher cost per card</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Paper + Lamination</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Cost-effective solution</li>
                    <li>Quick production</li>
                    <li>Easy to replace</li>
                    <li>Good for temporary passes</li>
                    <li>Less durable than PVC</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Management Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Maintain digital database of all issued cards</li>
                <li>Implement return policy for departing employees</li>
                <li>Regular audits to track active cards</li>
                <li>Immediate deactivation for lost cards</li>
                <li>Set expiry dates for security</li>
                <li>Train staff on ID verification procedures</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Professional ID Cards Now</h3>
                <p className="mb-6">Used by 1000+ organizations for employee and student IDs</p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started →
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
