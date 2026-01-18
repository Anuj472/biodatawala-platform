import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Maker Online Free | Create Professional Certificates - BioDatawala',
  description: 'Create professional certificates online for achievements, courses, events, and awards. 10+ customizable templates. Download as PDF instantly.',
  keywords: 'certificate maker online, course completion certificate, award certificate, appreciation certificate, achievement certificate generator',
};

export default function CertificateGenerator() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Certificate Generator
              </h1>
              <p className="text-xl mb-6">
                Create beautiful certificates for courses, achievements, events, and awards. 
                Professional templates with customizable text, signatures, and seals.
              </p>
              <Button size="lg">Create Certificate Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
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

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Certificate Creation Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Certificates Matter</h3>
              <p className="text-gray-700 mb-4">
                Certificates serve as formal recognition of achievements, skills, and participation. They boost motivation, 
                validate learning, enhance credibility, and provide tangible proof of accomplishments. Whether for training programs, 
                events, competitions, or volunteer work, well-designed certificates leave a lasting impression.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Certificates</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Awarded upon finishing training programs, online courses, or educational workshops. Should include course name, 
                duration, completion date, key topics covered, and issuing organization's seal. Essential for professional development 
                and continuing education credits.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Achievement & Award Certificates</h4>
              <p className="text-gray-700 mb-4">
                Recognition for outstanding performance, competition winners, or exceptional contributions. Features trophy graphics, 
                gold/silver borders, and prestigious language. Perfect for academic excellence, sports achievements, and professional awards.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Acknowledges attendance and involvement in events, conferences, seminars, or workshops. Simpler design than achievement 
                certificates but still professional. Includes event name, date, and brief description of participation.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Appreciation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Thank you certificates for volunteers, donors, speakers, or team members. Warm and appreciative tone with decorative 
                elements. Expresses gratitude for specific contributions and impact made.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Skill Certification</h4>
              <p className="text-gray-700 mb-4">
                Validates specific competencies or skill mastery. Common in technical fields, vocational training, and professional 
                certifications. Often includes skill level, assessment details, and validity period.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Certificate Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Title</strong>: "Certificate of..." clearly stated at top</li>
                <li><strong>Recipient Name</strong>: Full name prominently displayed</li>
                <li><strong>Award Reason</strong>: What the certificate recognizes</li>
                <li><strong>Date</strong>: Date of issue or achievement</li>
                <li><strong>Signatures</strong>: Authorized signatories with titles</li>
                <li><strong>Organization Seal/Logo</strong>: Official branding</li>
                <li><strong>Certificate Number</strong>: Unique identifier for verification</li>
                <li><strong>Border/Frame</strong>: Professional decorative elements</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Wording Examples</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Course Completion</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700">
                <p className="font-semibold mb-2">Certificate of Completion</p>
                <p className="italic">
                  This is to certify that<br/>
                  <strong>[Recipient Name]</strong><br/>
                  has successfully completed the<br/>
                  <strong>[Course Name]</strong><br/>
                  conducted from [Start Date] to [End Date]<br/>
                  comprising [X] hours of training
                </p>
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">Achievement Award</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700">
                <p className="font-semibold mb-2">Certificate of Achievement</p>
                <p className="italic">
                  Presented to<br/>
                  <strong>[Recipient Name]</strong><br/>
                  In recognition of outstanding achievement in<br/>
                  <strong>[Achievement Description]</strong><br/>
                  Awarded on [Date]
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Professional fonts</strong>: Use serif fonts like Times New Roman, Garamond for formal feel</li>
                <li><strong>Color scheme</strong>: Gold, navy blue, burgundy for traditional; modern colors for contemporary</li>
                <li><strong>White space</strong>: Don't overcrowd; leave breathing room</li>
                <li><strong>Alignment</strong>: Center-align for formal certificates</li>
                <li><strong>Border weight</strong>: Substantial borders convey importance</li>
                <li><strong>Signature lines</strong>: Clear spaces for signatures and titles</li>
                <li><strong>Paper size</strong>: Standard A4 (portrait) or Letter size</li>
                <li><strong>Print quality</strong>: Minimum 300 DPI for professional printing</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing & Paper Options</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Recommended Paper Types:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Certificate Paper</strong>: Pre-designed borders, 90-100 GSM (₹50-100 per sheet)</li>
                  <li><strong>Premium Bond Paper</strong>: High-quality, textured, 100-120 GSM (₹30-60 per sheet)</li>
                  <li><strong>Parchment Paper</strong>: Traditional look, aged appearance (₹60-100 per sheet)</li>
                  <li><strong>Photo Paper</strong>: Glossy finish, vibrant colors (₹20-40 per sheet)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital Certificates vs Printed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">💻 Digital Certificates</h4>
                  <ul className="text-sm space-y-2">
                    <li>✅ Instant delivery via email</li>
                    <li>✅ Easy to verify with QR codes</li>
                    <li>✅ Shareable on LinkedIn/social media</li>
                    <li>✅ Eco-friendly, no printing costs</li>
                    <li>✅ Easy to store and retrieve</li>
                    <li>✅ Can include clickable verification links</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">📜 Printed Certificates</h4>
                  <ul className="text-sm space-y-2">
                    <li>✅ Traditional and formal</li>
                    <li>✅ Physical keepsake</li>
                    <li>✅ Frame-worthy</li>
                    <li>✅ Perceived higher value</li>
                    <li>✅ Official stamp/embossing possible</li>
                    <li>✅ Portfolio display</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Security Features</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Unique Certificate Number</strong>: For verification and tracking</li>
                <li><strong>QR Code</strong>: Links to online verification page</li>
                <li><strong>Watermark</strong>: Organization logo as background element</li>
                <li><strong>Holographic Seal</strong>: Physical security for printed certificates</li>
                <li><strong>Digital Signatures</strong>: Encrypted signatures for authenticity</li>
                <li><strong>Microtext</strong>: Tiny text difficult to replicate</li>
              </ul>

              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Professional Certificates?</h3>
                <p className="mb-6">Design and download in minutes</p>
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  Create Certificate Now →
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
