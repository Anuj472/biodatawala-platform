import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Generator Online Free | Award, Course Completion Certificates - BioDatawala',
  description: 'Create professional certificates online for courses, achievements, appreciation, awards. Free customizable templates with digital signatures. Download as PDF instantly.',
  keywords: 'certificate generator, certificate maker online, award certificate, course completion certificate, appreciation certificate, training certificate maker',
};

export default function CertificateGenerator() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Certificate Generator
              </h1>
              <p className="text-xl mb-6">
                Create beautiful certificates for courses, awards, achievements, and appreciation. Professional templates with digital signatures. Instant PDF download.
              </p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">Create Certificate Free</Button>
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
              <h2 className="text-3xl font-bold mb-6">Complete Certificate Design Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Certificates Matter</h3>
              <p className="text-gray-700 mb-4">
                Certificates serve as formal recognition of achievement, completion, or appreciation. They motivate recipients, validate skills, build credibility, and create lasting memories. A well-designed certificate adds professional value and shows respect for the recipient's accomplishment.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Certificates</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Achievement Certificates</h4>
              <p className="text-gray-700 mb-4">
                Recognition for accomplishments, milestones, or excellence. Features ornate borders, formal seals, and achievement details. Used for competitions, awards ceremonies, and recognition programs.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Issued after completing training, workshops, or courses. Includes course name, duration, skills acquired, date of completion, and instructor/institution signatures. Essential for professional development portfolios.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Acknowledges attendance at events, seminars, conferences, or workshops. Simpler than achievement certificates, focuses on event details and date of participation.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Appreciation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Thank you certificates for volunteers, donors, speakers, or contributors. Warm, grateful tone with decorative elements expressing gratitude and recognition.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Award Certificates</h4>
              <p className="text-gray-700 mb-4">
                Formal recognition for winners of competitions, contests, or best performer awards. Features trophy graphics, medals, and prestigious design elements.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Certificate Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Certificate Title</strong>: "Certificate of Achievement/Completion/Appreciation"</li>
                <li><strong>Recipient Name</strong>: Clearly displayed in elegant font</li>
                <li><strong>Recognition Statement</strong>: What is being certified</li>
                <li><strong>Details</strong>: Course name, event, achievement specifics</li>
                <li><strong>Date</strong>: Issue date or completion date</li>
                <li><strong>Signatures</strong>: Authorized signatories with titles</li>
                <li><strong>Organization Logo/Seal</strong>: Official emblem or stamp</li>
                <li><strong>Certificate Number</strong>: Unique ID for verification</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Design Principles</h3>
              
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">Visual Hierarchy</h4>
                <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Certificate title at the top (largest text)</li>
                  <li>Recipient name as the focal point (decorative font)</li>
                  <li>Recognition statement (medium size)</li>
                  <li>Details and date (smaller text)</li>
                  <li>Signatures and seals at bottom</li>
                </ol>
                
                <h4 className="text-lg font-bold mb-3 mt-4">Color Psychology</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Gold/Yellow</strong>: Achievement, excellence, prestige</li>
                  <li><strong>Blue</strong>: Trust, professionalism, corporate</li>
                  <li><strong>Green</strong>: Growth, learning, environmental</li>
                  <li><strong>Red</strong>: Leadership, awards, importance</li>
                  <li><strong>Purple</strong>: Creativity, wisdom, luxury</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Wording Examples</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-bold mb-2">Course Completion:</p>
                <p className="text-gray-700 italic mb-4">
                  "This is to certify that [Name] has successfully completed the course [Course Name] on [Date], demonstrating proficiency in [Skills/Topics]."
                </p>
                
                <p className="font-bold mb-2">Achievement:</p>
                <p className="text-gray-700 italic mb-4">
                  "In recognition of outstanding achievement and dedication, this certificate is proudly presented to [Name] for [Achievement Details]."
                </p>
                
                <p className="font-bold mb-2">Appreciation:</p>
                <p className="text-gray-700 italic">
                  "We extend our heartfelt appreciation to [Name] for their valuable contribution and dedicated service to [Organization/Event]."
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Certificates</h3>
              <p className="text-gray-700 mb-4">
                <strong>Digital Certificates</strong>: Email delivery, blockchain verification, lower cost, eco-friendly, instant issuance, easy storage and sharing.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Printed Certificates</strong>: Physical keepsake, premium paper quality, official seals and stamps, framing option, traditional value.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Paper and Printing</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Paper Weight</strong>: 200-300 GSM cardstock recommended</li>
                <li><strong>Paper Type</strong>: Parchment, linen, or glossy finish</li>
                <li><strong>Size</strong>: A4 (210mm × 297mm) or Letter (8.5" × 11")</li>
                <li><strong>Orientation</strong>: Landscape typically preferred</li>
                <li><strong>Printing Quality</strong>: Minimum 300 DPI resolution</li>
                <li><strong>Color Mode</strong>: CMYK for printing, RGB for digital</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Security Features for Certificates</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Unique Certificate Number</strong>: For verification tracking</li>
                <li><strong>QR Code</strong>: Links to online verification system</li>
                <li><strong>Watermark</strong>: Organization logo as background</li>
                <li><strong>Holographic Seal</strong>: Physical tamper-proof element</li>
                <li><strong>Digital Signature</strong>: Cryptographic verification</li>
                <li><strong>Blockchain</strong>: Immutable record of issuance</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Best Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Proofread all names and details carefully</li>
                <li>Use high-quality logos and signatures</li>
                <li>Maintain consistent branding</li>
                <li>Include verification method</li>
                <li>Archive certificate records</li>
                <li>Consider multiple language versions</li>
                <li>Make certificates shareable on social media</li>
              </ul>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Creating Certificates Now</h3>
                <p className="mb-6">Professional templates, easy customization, instant download</p>
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  Create Your Certificate →
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
