import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { idCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'ID Card Maker Online Free | Employee & Student ID Card Generator - BioDatawala',
  description: 'Create professional ID cards online for employees, students, events. 10+ customizable templates with photos and barcodes. Free to design, instant PDF download.',
  keywords: 'ID card maker, employee ID card, student ID card, visitor pass, event badge, identity card design',
};

export default function IDCardMaker() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ID Card Maker
              </h1>
              <p className="text-xl mb-6">
                Design professional ID cards for employees, students, events, and organizations. Includes photo, 
                barcode, QR code options. Create secure identification cards in minutes.
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to ID Card Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of ID Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Corporate Employee ID Cards</h4>
              <p className="text-gray-700 mb-4">
                Professional employee identification with photo, name, designation, employee ID number, and company logo. 
                Essential for office access control, attendance tracking, and professional identification.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Student ID Cards</h4>
              <p className="text-gray-700 mb-4">
                School or college identification cards featuring student photo, name, roll number, class/grade, and 
                institution logo. Used for library access, exam halls, and student verification.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visitor Pass/Temporary ID</h4>
              <p className="text-gray-700 mb-4">
                Temporary identification for guests, contractors, or visitors. Includes date, time, purpose of visit, 
                and validity period for security purposes.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Event Access Badge</h4>
              <p className="text-gray-700 mb-4">
                Conference, seminar, or event identification badges with attendee name, organization, badge type 
                (speaker, attendee, VIP), and event branding.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential ID Card Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Photograph</strong>: Clear professional photo (passport size recommended)</li>
                <li><strong>Full Name</strong>: Complete name of the card holder</li>
                <li><strong>ID Number</strong>: Unique identification number</li>
                <li><strong>Designation/Role</strong>: Job title or student class</li>
                <li><strong>Organization Logo</strong>: Company or institution branding</li>
                <li><strong>Department</strong>: Specific department or division</li>
                <li><strong>Validity Period</strong>: Expiry date or valid until</li>
                <li><strong>Contact Information</strong>: Emergency contact or office number</li>
                <li><strong>Barcode/QR Code</strong>: For digital scanning and verification</li>
                <li><strong>Blood Group</strong>: Emergency medical information (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Front Side Design</h4>
              <p className="text-gray-700 mb-4">
                <strong>Primary Information:</strong> Place the most important details on the front - photo, name, 
                ID number, and organization logo. Use high contrast colors for better visibility. The photo should 
                occupy 30-40% of the front side.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Back Side Design</h4>
              <p className="text-gray-700 mb-4">
                <strong>Additional Details:</strong> Include address, emergency contact, terms and conditions, or 
                security features. Many organizations add a signature panel or barcode on the back.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Color Coding</h4>
              <p className="text-gray-700 mb-4">
                Use different colors to distinguish departments, access levels, or roles:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Blue</strong>: Management/Administration</li>
                <li><strong>Green</strong>: Operations/Technical</li>
                <li><strong>Yellow</strong>: Temporary/Contractor</li>
                <li><strong>Red</strong>: Emergency/Security</li>
                <li><strong>Purple</strong>: Visitor Access</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Security Features for ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Holographic Overlay</strong>: Prevents duplication and tampering</li>
                <li><strong>UV Printing</strong>: Invisible ink visible only under UV light</li>
                <li><strong>Microtext</strong>: Tiny text that's hard to replicate</li>
                <li><strong>RFID Chip</strong>: For electronic access control systems</li>
                <li><strong>Magnetic Stripe</strong>: Stores digital information</li>
                <li><strong>Watermark</strong>: Subtle background pattern</li>
                <li><strong>Serial Number</strong>: Unique tracking identifier</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard ID Card Size</h3>
              <p className="text-gray-700 mb-4">
                The international standard ID card size is:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>CR80 Size</strong>: 85.6mm × 53.98mm (3.375" × 2.125")</li>
                <li>Same as credit card size</li>
                <li>Fits standard wallet pockets</li>
                <li>Compatible with most card printers</li>
                <li>Portrait orientation typical</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Photo Guidelines for ID Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use recent photo (within last 6 months)</li>
                <li>Plain light-colored background</li>
                <li>Face clearly visible, no sunglasses</li>
                <li>Professional attire recommended</li>
                <li>Neutral facial expression</li>
                <li>High resolution (minimum 300 DPI)</li>
                <li>Passport-size format works best</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-teal-800">PVC Cards (Recommended)</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Durable and waterproof</li>
                    <li>✓ Lasts 3-5 years</li>
                    <li>✓ Professional appearance</li>
                    <li>✓ Can be laminated</li>
                    <li>✓ RFID chip compatible</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-cyan-800">Paper/Laminated Cards</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Cost-effective</li>
                    <li>✓ Quick to produce</li>
                    <li>✓ Good for temporary use</li>
                    <li>✓ Easy to print in-house</li>
                    <li>✓ Lamination adds durability</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">ID Card Accessories</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Lanyards</strong>: Wear card around neck (most common)</li>
                <li><strong>Badge Holders</strong>: Protective plastic sleeve</li>
                <li><strong>Retractable Reels</strong>: Extend card for scanning</li>
                <li><strong>Badge Clips</strong>: Attach to clothing</li>
                <li><strong>Armband Holders</strong>: For active environments</li>
              </ul>

              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional ID Card</h3>
                <p className="mb-6">Design secure identification cards for your organization</p>
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
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
