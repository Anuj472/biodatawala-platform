import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online Free | Employee, Student ID Card Creator - BioDatawala',
  description: 'Create professional ID cards online for employees, students, visitors, and events. 10+ templates with photo, barcode, QR code. Download instantly.',
  keywords: 'id card maker, employee id card, student id card, visitor pass, event pass, corporate id card online',
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
                Create employee ID cards, student IDs, visitor passes, and event badges online. 
                Add photos, barcodes, QR codes. Download print-ready PDFs instantly.
              </p>
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">Create ID Card Free</Button>
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
                Corporate employee ID cards with photo, name, designation, employee ID number, department, and company logo. 
                Include security features like barcodes or magnetic strips for access control.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School and college student ID cards with photo, roll number, class/course, academic year, and institution logo. 
                Can include library membership, bus pass, or meal plan information.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Passes</h4>
              <p className="text-gray-700 mb-4">
                Temporary passes for office visitors with date, time, purpose of visit, and host employee information. 
                Typically valid for single day or specific time period.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Badges</h4>
              <p className="text-gray-700 mb-4">
                Conference, seminar, or trade show badges with attendee name, company, designation, and access level. 
                Can include schedule, QR code for check-in, and networking features.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements of ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Photo</strong>: Clear headshot with plain background</li>
                <li><strong>Name</strong>: Full name prominently displayed</li>
                <li><strong>ID Number</strong>: Unique identifier</li>
                <li><strong>Organization Logo</strong>: Company/institution branding</li>
                <li><strong>Designation/Role</strong>: Job title or student class</li>
                <li><strong>Validity Period</strong>: Expiry date if applicable</li>
                <li><strong>Barcode/QR Code</strong>: For scanning and verification</li>
                <li><strong>Emergency Contact</strong>: Optional but recommended</li>
                <li><strong>Signature</strong>: Authorized signatory</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Security Features</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Holographic Overlays</strong>: Prevent tampering and duplication</li>
                <li><strong>Barcodes</strong>: For quick scanning and access control</li>
                <li><strong>QR Codes</strong>: Store additional information digitally</li>
                <li><strong>Magnetic Strips</strong>: For swipe card access systems</li>
                <li><strong>RFID Chips</strong>: Contactless access control</li>
                <li><strong>UV Printing</strong>: Invisible features visible under UV light</li>
                <li><strong>Microtext</strong>: Tiny text difficult to replicate</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Best Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use high-resolution photos (passport size recommended)</li>
                <li>Maintain consistent design across all cards</li>
                <li>Include both sides - front and back information</li>
                <li>Use durable PVC cards for longevity</li>
                <li>Implement clear color coding for departments/access levels</li>
                <li>Regular audits and replacement of expired cards</li>
                <li>Secure storage and issuance process</li>
                <li>Clear policy for lost or stolen cards</li>
              </ul>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Creating Professional ID Cards</h3>
                <p className="mb-6">Free templates, easy customization, instant download</p>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Create ID Card Now →
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
