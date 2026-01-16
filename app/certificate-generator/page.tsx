import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Generator Online Free | Professional Certificate Maker - BioDatawala',
  description: 'Create professional certificates online for free. Award, appreciation, participation, course completion certificates. Instant download as PDF.',
  keywords: 'certificate maker, certificate generator, award certificate, appreciation certificate online, course completion certificate',
};

export default function CertificateGenerator() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Certificate Generator
              </h1>
              <p className="text-xl mb-6">
                Create beautiful certificates for achievements, courses, events, and awards. 
                Professional templates with instant customization and PDF download.
              </p>
              <Button size="lg">Create Certificate Free</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Certificate Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certificateTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Certificate Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Certificates</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Achievement Certificates</h4>
              <p className="text-gray-700 mb-4">
                Recognize outstanding performance, winning competitions, achieving milestones, or excellence in specific areas. 
                Features decorative borders, achievement seals, and formal language emphasizing the accomplishment.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Issued upon successful completion of training programs, online courses, workshops, or educational programs. 
                Includes course name, duration, skills acquired, dates, and trainer/instructor signatures.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Awarded to attendees of events, conferences, seminars, webinars, or workshops. Acknowledges involvement 
                and engagement. Typically includes event name, date, and basic participant information.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Appreciation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Express gratitude for contributions, volunteer work, support, or service. Used by organizations to thank 
                employees, volunteers, donors, or partners. Warm, thankful tone with decorative elements.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Award Certificates</h4>
              <p className="text-gray-700 mb-4">
                Formal recognition for winning awards, competitions, or achieving special recognition. Features trophy graphics, 
                gold seals, prestigious design elements, and formal language highlighting the honor.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Certificate Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Heading</strong>: "Certificate of..." (Achievement/Completion/Appreciation)</li>
                <li><strong>Recipient Name</strong>: Prominently displayed, properly spelled</li>
                <li><strong>Recognition Statement</strong>: What the certificate is for</li>
                <li><strong>Date</strong>: Issue date or achievement date</li>
                <li><strong>Authorized Signature</strong>: Signing authority with title</li>
                <li><strong>Organization Logo</strong>: Branding and authenticity</li>
                <li><strong>Seal/Stamp</strong>: Official seal for legitimacy</li>
                <li><strong>Certificate Number</strong>: Unique identifier (for tracking)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Design Best Practices</h3>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">🎨 Design Tips</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Use high-quality, elegant borders</li>
                  <li>• Choose formal, readable fonts (serif fonts work well)</li>
                  <li>• Balance white space - don't overcrowd</li>
                  <li>• Use official colors matching organization branding</li>
                  <li>• Add subtle watermark for authenticity</li>
                  <li>• Ensure print-friendly design (landscape A4 or letter size)</li>
                  <li>• Include decorative elements that match certificate purpose</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Wording Examples</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Course Completion Certificate:</h4>
                <p className="text-gray-700 italic">
                  "This is to certify that<br/>
                  <strong>[Name]</strong><br/>
                  has successfully completed the<br/>
                  <strong>[Course Name]</strong><br/>
                  conducted from [Start Date] to [End Date]<br/>
                  comprising [Number] hours of training<br/>
                  with [Grade/Distinction] performance."
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Appreciation Certificate:</h4>
                <p className="text-gray-700 italic">
                  "In recognition of outstanding dedication and service,<br/>
                  this certificate is proudly presented to<br/>
                  <strong>[Name]</strong><br/>
                  for [Reason for appreciation]<br/>
                  Your contribution has made a significant impact.<br/>
                  Awarded on [Date]"
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Physical Certificates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Digital Certificates</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✅ Instant delivery via email</li>
                    <li>✅ Easy to share on LinkedIn/social media</li>
                    <li>✅ No printing cost</li>
                    <li>✅ Eco-friendly</li>
                    <li>✅ Can include verification links</li>
                    <li>✅ Never gets lost or damaged</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-orange-800">Physical Certificates</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✅ Tangible keepsake</li>
                    <li>✅ Can be framed and displayed</li>
                    <li>✅ Traditional value</li>
                    <li>✅ No device needed to view</li>
                    <li>✅ Official physical presence</li>
                    <li>✅ Premium paper quality available</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Security Features</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Unique Certificate Number</strong>: Verification and tracking</li>
                <li><strong>QR Code</strong>: Link to online verification page</li>
                <li><strong>Watermark</strong>: Organization logo as subtle background</li>
                <li><strong>Security Paper</strong>: Special textures, patterns, or colors</li>
                <li><strong>Holographic Seal</strong>: Prevents counterfeiting</li>
                <li><strong>Digital Signature</strong>: Cryptographic authentication</li>
                <li><strong>Blockchain Verification</strong>: Modern, tamper-proof records</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">When to Issue Certificates</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Completion of training programs or courses</li>
                <li>Participation in workshops, seminars, conferences</li>
                <li>Recognition of employee achievements</li>
                <li>Student academic excellence or sports achievements</li>
                <li>Volunteer service and community contribution</li>
                <li>Competition winners and participants</li>
                <li>Membership in professional organizations</li>
                <li>Project completion in educational institutions</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tips for Bulk Certificate Generation</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Prepare a spreadsheet with all recipient data</li>
                <li>Ensure consistent name spelling and formatting</li>
                <li>Use mail merge or bulk generation tools</li>
                <li>Assign unique certificate numbers sequentially</li>
                <li>Quality check a sample before generating all</li>
                <li>Maintain a record/database of issued certificates</li>
                <li>Set up automated email delivery system</li>
                <li>Create a verification portal for authenticity checks</li>
              </ol>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Certificate Now</h3>
                <p className="mb-6">Professional templates, instant customization, free download</p>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
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
