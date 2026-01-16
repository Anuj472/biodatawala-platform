import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online Free | Employee, Student, Visitor ID Cards - BioDatawala',
  description: 'Create professional ID cards online for employees, students, visitors, and events. Free customizable templates with photo, barcode, QR code support. Download instantly.',
  keywords: 'ID card maker, employee ID card, student ID card, visitor pass, event pass maker, photo ID card online, free ID card design',
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
                Create employee, student, visitor, and event ID cards online. Add photos, barcodes, QR codes. Professional templates for all purposes.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Create ID Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">ID Card Templates for Every Need</h2>
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
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Professional ID Cards Matter</h3>
              <p className="text-gray-700 mb-4">
                ID cards serve multiple purposes - security, identification, access control, and professional branding. A well-designed ID card enhances organizational image, improves security, and creates a sense of belonging among employees or members.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of ID Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Employee ID Cards</h4>
              <p className="text-gray-700 mb-4">
                Corporate identity cards for office employees, featuring company logo, employee photo, name, designation, department, employee ID number, and validity period. Often includes barcode or RFID for access control.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School and college ID cards with student photo, name, roll number, class/course, academic year, and institution branding. May include library card number, blood group, and emergency contact.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Pass</h4>
              <p className="text-gray-700 mb-4">
                Temporary ID cards for guests and visitors, displaying visitor name, company/purpose, date, host employee name, and validity time. Different colors indicate different access levels.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Pass</h4>
              <p className="text-gray-700 mb-4">
                Conference, seminar, and exhibition passes with attendee name, event details, access type (VIP, delegate, media), and schedule. QR codes for quick check-in.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Membership Cards</h4>
              <p className="text-gray-700 mb-4">
                Gym, club, or organization membership cards showing member name, ID number, membership tier, benefits, and expiry date. Premium feel for exclusive memberships.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements of ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Organization Logo</strong>: Prominently displayed for branding</li>
                <li><strong>Photo</strong>: Clear, professional headshot (passport size)</li>
                <li><strong>Name</strong>: Full name in readable font</li>
                <li><strong>Designation/Title</strong>: Job role or position</li>
                <li><strong>ID Number</strong>: Unique identification number</li>
                <li><strong>Barcode/QR Code</strong>: For electronic verification</li>
                <li><strong>Validity Period</strong>: Issue and expiry dates</li>
                <li><strong>Contact Information</strong>: Organization address/phone</li>
                <li><strong>Security Features</strong>: Hologram, UV print (if applicable)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Design Best Practices</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">Front Side Design</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Company/institution logo at the top</li>
                  <li>Photo on left or right (standard passport size)</li>
                  <li>Name prominently displayed</li>
                  <li>Designation and department</li>
                  <li>ID number and barcode</li>
                </ul>
                
                <h4 className="text-lg font-bold mb-3">Back Side Design</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Contact information (address, phone)</li>
                  <li>Emergency contact details</li>
                  <li>Blood group (if applicable)</li>
                  <li>Terms and conditions</li>
                  <li>Signature line (authorized person)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard ID Card Sizes</h3>
              <p className="text-gray-700 mb-4">
                <strong>CR80 (Credit Card Size)</strong>: 85.6mm × 53.98mm - Most common standard<br/>
                <strong>CR79</strong>: 79mm × 50mm - Slightly smaller, fits some holders<br/>
                <strong>Custom Sizes</strong>: Vertical or horizontal orientation available
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Security Features to Include</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Holographic Overlays</strong>: Prevent duplication and forgery</li>
                <li><strong>UV Printing</strong>: Visible only under UV light</li>
                <li><strong>Microtext</strong>: Tiny text that's hard to replicate</li>
                <li><strong>Watermarks</strong>: Embedded design in card material</li>
                <li><strong>Color-Shifting Ink</strong>: Changes color at different angles</li>
                <li><strong>RFID Chips</strong>: For electronic access control</li>
                <li><strong>Magnetic Strips</strong>: Store encoded information</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Photo Requirements for ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Recent photo (taken within last 6 months)</li>
                <li>Plain background (white, blue, or gray)</li>
                <li>Face clearly visible, no sunglasses</li>
                <li>Formal attire preferred</li>
                <li>Front-facing, neutral expression</li>
                <li>High resolution (minimum 300 DPI)</li>
                <li>Passport-size dimensions</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing and Material Options</h3>
              <p className="text-gray-700 mb-4">
                <strong>PVC Cards</strong>: Durable, water-resistant, standard choice<br/>
                <strong>PET Cards</strong>: Eco-friendly, biodegradable option<br/>
                <strong>Smart Cards</strong>: Embedded chips for access control<br/>
                <strong>Laminated Paper</strong>: Budget-friendly for temporary use
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Professional ID Cards Today</h3>
                <p className="mb-6">Easy design, instant download, print-ready quality</p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Creating ID Cards →
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
