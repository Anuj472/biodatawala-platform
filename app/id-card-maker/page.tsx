import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online Free | Employee & Student ID Cards - BioDatawala',
  description: 'Create professional ID cards online for employees, students, events. Free templates with photo, barcode, QR code. Download and print instantly.',
  keywords: 'ID card maker, employee ID card, student ID card, visitor pass, event badge maker, ID card online',
};

export default function IDCardMaker() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional ID Card Maker
              </h1>
              <p className="text-xl mb-6">
                Create employee ID cards, student IDs, visitor passes, and event badges instantly. 
                Professional templates with photo, barcode, and security features.
              </p>
              <Button size="lg">Create ID Card Free</Button>
            </div>
          </div>
        </section>

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

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to ID Card Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of ID Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Employee ID Cards</h4>
              <p className="text-gray-700 mb-4">
                Corporate employee IDs include employee photo, name, designation, department, employee ID number, 
                company logo, and barcode for access control. Essential for workplace security and professional identity.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                <li>Employee name and photo</li>
                <li>Job title and department</li>
                <li>Employee ID number</li>
                <li>Company logo and branding</li>
                <li>Barcode/QR code for access</li>
                <li>Emergency contact (on back)</li>
                <li>Blood group (optional)</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School and college ID cards with student photo, name, class/grade, roll number, academic year, 
                school logo, and contact information. Required for campus access and library services.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Passes</h4>
              <p className="text-gray-700 mb-4">
                Temporary ID cards for visitors with date, time, purpose of visit, host employee name, and 
                visitor's basic information. Security essential for controlled premises.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Badges</h4>
              <p className="text-gray-700 mb-4">
                Conference, seminar, and event participant badges with attendee name, organization, designation, 
                event branding, and access level. Color-coding for different participant categories.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential ID Card Elements</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Front Side Must Include:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>✅ Professional photograph</li>
                  <li>✅ Full name (clearly visible)</li>
                  <li>✅ ID number/Employee number</li>
                  <li>✅ Organization logo</li>
                  <li>✅ Designation/Department</li>
                  <li>✅ Validity period (if applicable)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Back Side Can Include:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Barcode/QR code</li>
                  <li>• Emergency contact information</li>
                  <li>• Blood group</li>
                  <li>• Address</li>
                  <li>• Terms and conditions</li>
                  <li>• Company address</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Use High-Quality Photos</strong>: Clear, professional headshot with plain background</li>
                <li><strong>Readable Fonts</strong>: Use 10-14pt fonts, avoid decorative typefaces</li>
                <li><strong>Brand Colors</strong>: Match organization's color scheme</li>
                <li><strong>White Space</strong>: Don't overcrowd - keep it clean and organized</li>
                <li><strong>Security Features</strong>: Add hologram, watermark, or special printing</li>
                <li><strong>Durability</strong>: Use quality card stock and lamination</li>
                <li><strong>Standard Size</strong>: CR80 (85.6mm × 53.98mm) - credit card size</li>
                <li><strong>Dual-Sided</strong>: Utilize both sides efficiently</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Security Features for ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Holographic Overlays</strong>: Prevent counterfeiting</li>
                <li><strong>UV Printing</strong>: Invisible elements visible under UV light</li>
                <li><strong>Microtext</strong>: Tiny text difficult to replicate</li>
                <li><strong>Barcodes/QR Codes</strong>: Quick scanning and verification</li>
                <li><strong>RFID Chips</strong>: Contactless access control</li>
                <li><strong>Photo Quality Check</strong>: High-resolution, tamper-proof</li>
                <li><strong>Signature Panel</strong>: Authorized signature space</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Printing Options</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">In-House Printing</h4>
              <p className="text-gray-700 mb-4">
                <strong>Pros:</strong> Cost-effective for large volumes, immediate printing, full control, easy reprints.<br/>
                <strong>Cons:</strong> Initial equipment cost, maintenance, supplies management.<br/>
                <strong>Best for:</strong> Organizations with 50+ employees, frequent ID issuance.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Professional Printing Services</h4>
              <p className="text-gray-700 mb-4">
                <strong>Pros:</strong> High quality, security features, no equipment needed, professional finish.<br/>
                <strong>Cons:</strong> Per-card cost, turnaround time, minimum order quantities.<br/>
                <strong>Best for:</strong> Small organizations, one-time events, premium quality needs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div>
                  <h4 className="font-bold mb-2">PVC Plastic Cards</h4>
                  <p className="text-gray-700 text-sm mb-2">Most common, durable, waterproof, credit-card feel</p>
                  <p className="text-gray-600 text-sm">Ideal for: Permanent employee IDs, student cards</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Paper/Cardstock</h4>
                  <p className="text-gray-700 text-sm mb-2">Cost-effective, easy to print, biodegradable</p>
                  <p className="text-gray-600 text-sm">Ideal for: Temporary passes, events, conferences</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Smart Cards (RFID)</h4>
                  <p className="text-gray-700 text-sm mb-2">Embedded chip, contactless access, high security</p>
                  <p className="text-gray-600 text-sm">Ideal for: High-security facilities, payment systems</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Teslin Synthetic</h4>
                  <p className="text-gray-700 text-sm mb-2">Extremely durable, tear-proof, water-resistant</p>
                  <p className="text-gray-600 text-sm">Ideal for: Outdoor workers, harsh environments</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold mb-2">What is the standard ID card size?</h4>
                  <p className="text-gray-700">Standard CR80 size: 85.6mm × 53.98mm (3.375" × 2.125"), same as credit cards.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Can I add a barcode to my ID card?</h4>
                  <p className="text-gray-700">Yes! Our premium templates include barcode and QR code generation for access control systems.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">How many ID cards can I create?</h4>
                  <p className="text-gray-700">Free users get 5 downloads/month. Premium users have unlimited downloads.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Professional ID Cards Today</h3>
                <p className="mb-6">Fast, secure, and professional ID card solutions</p>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
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
