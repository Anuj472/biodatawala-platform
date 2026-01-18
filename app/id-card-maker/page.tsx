import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online Free | Employee, Student & Visitor ID Cards - BioDatawala',
  description: 'Create professional ID cards for employees, students, visitors, and events. Free templates with photo, barcode, and QR code support.',
  keywords: 'ID card maker online, employee ID card, student ID card, visitor pass, event badge, corporate ID design',
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
                Create employee, student, visitor, and event ID cards online. Add photos, barcodes, and QR codes. 
                Download print-ready designs instantly.
              </p>
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Create ID Card Free
              </Button>
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

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to ID Card Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of ID Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Corporate Employee ID Cards</h4>
              <p className="text-gray-700 mb-4">
                Professional ID cards for company employees featuring company logo, employee photo, designation, employee ID number, 
                department, and validity period. Often includes barcode or RFID chip for access control systems. Standard size is 
                CR80 (85.6mm x 54mm) - credit card size.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School and university ID cards with student photo, roll number, class/grade, academic year, and emergency contact. 
                Often includes library card functionality and can be used for attendance tracking. May include blood group and 
                parent contact information.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Passes</h4>
              <p className="text-gray-700 mb-4">
                Temporary ID cards for visitors with date, time, visitor name, company/purpose, host name, and validity duration. 
                Often color-coded for different access levels. Includes safety instructions and emergency procedures.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Passes & Conference Badges</h4>
              <p className="text-gray-700 mb-4">
                Event-specific ID cards with attendee name, organization, role/designation, event branding, QR code for check-in, 
                and access level indicators. May include social media handles for networking.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Membership Cards</h4>
              <p className="text-gray-700 mb-4">
                Club or organization membership cards featuring member photo, membership ID, tier/level, validity dates, and benefits 
                information. Used for gyms, libraries, professional associations, and exclusive clubs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements of ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Organization Logo</strong>: Company or institution branding</li>
                <li><strong>Cardholder Photo</strong>: Clear, recent photograph</li>
                <li><strong>Full Name</strong>: Cardholder's complete name</li>
                <li><strong>ID Number</strong>: Unique identification number</li>
                <li><strong>Designation/Role</strong>: Job title or student class</li>
                <li><strong>Department</strong>: Team or section (for employees)</li>
                <li><strong>Validity Dates</strong>: Issue and expiry dates</li>
                <li><strong>Barcode/QR Code</strong>: For scanning and verification</li>
                <li><strong>Emergency Contact</strong>: Phone number (for students)</li>
                <li><strong>Blood Group</strong>: Optional medical information</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Security Features</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Basic Security Features:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Unique ID Numbers</strong>: Sequential or random numbering system</li>
                  <li><strong>Barcodes</strong>: 1D barcodes for quick scanning</li>
                  <li><strong>QR Codes</strong>: 2D codes with more information capacity</li>
                  <li><strong>Signature Panel</strong>: Authorized signature space</li>
                  <li><strong>Holographic Overlays</strong>: Tamper-proof seals</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Advanced Security Features:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>RFID Chips</strong>: Radio-frequency identification for access control</li>
                  <li><strong>Magnetic Stripes</strong>: Data storage for automated systems</li>
                  <li><strong>Microprinting</strong>: Tiny text visible only under magnification</li>
                  <li><strong>UV Printing</strong>: Visible only under UV light</li>
                  <li><strong>Biometric Data</strong>: Fingerprint or iris scan integration</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Dimensions & Specifications</h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Standard ID Card Sizes:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>CR80 (Standard)</strong>: 85.6mm x 54mm (3.375" x 2.125") - Most common</li>
                  <li><strong>CR79</strong>: 79mm x 50mm - Slightly smaller</li>
                  <li><strong>CR90</strong>: 92mm x 60mm - Larger format</li>
                  <li><strong>Thickness</strong>: 0.76mm (30 mil) standard PVC card</li>
                  <li><strong>Photo Size</strong>: Typically 25mm x 30mm or 35mm x 45mm</li>
                  <li><strong>Resolution</strong>: 300 DPI minimum for printing</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Create Professional ID Cards</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                <li><strong>Choose Template</strong>: Select appropriate template for employee, student, or visitor</li>
                <li><strong>Add Organization Details</strong>: Logo, name, and branding colors</li>
                <li><strong>Upload Photo</strong>: Clear passport-size photograph with plain background</li>
                <li><strong>Enter Information</strong>: Name, ID number, designation, department</li>
                <li><strong>Add Security Elements</strong>: Barcode, QR code, or serial number</li>
                <li><strong>Design Back Side</strong>: Emergency contact, terms, or access privileges</li>
                <li><strong>Review & Download</strong>: Check all details and download print-ready file</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Best Practices for ID Card Management</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Maintain a database of issued ID cards</li>
                <li>Set expiry dates and renewal reminders</li>
                <li>Implement card return policy for departing members</li>
                <li>Use different colors for departments or access levels</li>
                <li>Include emergency contact information on back</li>
                <li>Laminate cards for durability and security</li>
                <li>Provide cardholders for visibility</li>
                <li>Regular audits of active ID cards</li>
                <li>Immediate deactivation of lost or stolen cards</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Photo Requirements for ID Cards</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Plain white or light-colored background</li>
                  <li>Face clearly visible, no sunglasses or hats</li>
                  <li>Recent photo (within last 6 months)</li>
                  <li>Good lighting, no shadows on face</li>
                  <li>Neutral expression, looking straight at camera</li>
                  <li>High resolution (minimum 300 DPI)</li>
                  <li>Proper framing (head and shoulders)</li>
                  <li>Professional attire recommended</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Professional ID Cards Today</h3>
                <p className="mb-6">Perfect for organizations, schools, events, and businesses</p>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Start Creating Now →
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
