import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Maker Online | Create Professional Certificates - BioDatawala',
  description: 'Generate professional certificates online. Award, appreciation, course completion certificates. Free templates, instant download.',
  keywords: 'certificate maker, certificate generator, award certificate, appreciation certificate, course completion certificate online',
};

export default function CertificateGenerator() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Certificate Generator
              </h1>
              <p className="text-xl mb-6">
                Create beautiful certificates for achievements, courses, events, and recognition. 
                Professional templates with customizable designs and instant download.
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">Create Certificate Free</Button>
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Creating Professional Certificates</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Certificates</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Achievement Certificates</h4>
              <p className="text-gray-700 mb-4">
                Recognize outstanding performance, milestones, or accomplishments. Include recipient name, achievement details, 
                date, and authorizing person's signature. Commonly used for academic excellence, sales targets, or project completion.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Certify successful completion of training programs, workshops, or courses. List course name, duration, topics covered, 
                assessment score (if applicable), and issuing institution credentials. Essential for professional development tracking.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Appreciation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Express gratitude and recognition for contributions, support, or service. Used for volunteers, donors, speakers, 
                or team members. Emphasize the value of their contribution and impact created.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Acknowledge attendance and involvement in events, conferences, webinars, or workshops. Include event name, 
                dates, and brief description. Serves as proof of professional engagement.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Certificate Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Certificate Title</strong>: "Certificate of Achievement", "Course Completion Certificate", etc.</li>
                <li><strong>Recipient Name</strong>: Presented to [Name] or This certifies that [Name]</li>
                <li><strong>Achievement/Reason</strong>: What is being certified or recognized</li>
                <li><strong>Date</strong>: Issue date or completion date</li>
                <li><strong>Signature</strong>: Authority or issuer signature</li>
                <li><strong>Issuing Organization</strong>: Company, school, or organization name and logo</li>
                <li><strong>Certificate Number</strong>: Unique identifier for tracking (optional)</li>
                <li><strong>Seal/Stamp</strong>: Official validation mark (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Wording Examples</h3>
              
              <div className="bg-amber-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Achievement Certificate</h4>
                <p className="text-gray-700 italic text-sm">
                  "This Certificate of Achievement is proudly presented to [Name] for outstanding performance in [specific area/project]. 
                  Your dedication and excellence have set a benchmark for others."
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Course Completion</h4>
                <p className="text-gray-700 italic text-sm">
                  "This is to certify that [Name] has successfully completed the [Course Name] training program conducted from 
                  [Start Date] to [End Date], comprising [X] hours of instruction."
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-2">Appreciation Certificate</h4>
                <p className="text-gray-700 italic text-sm">
                  "In recognition of exceptional service and dedication, this Certificate of Appreciation is presented to [Name]. 
                  Your contributions have made a significant impact."
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Professional Layout</strong>: Balanced design with clear hierarchy</li>
                <li><strong>Border Design</strong>: Classic borders add formality and elegance</li>
                <li><strong>Quality Paper</strong>: Use thick, textured paper (200-300 GSM)</li>
                <li><strong>Color Scheme</strong>: Gold, blue, or burgundy for formal certificates</li>
                <li><strong>Font Selection</strong>: Serif fonts for traditional, sans-serif for modern</li>
                <li><strong>White Space</strong>: Don't overcrowd the design</li>
                <li><strong>Logo Placement</strong>: Top center or top corners</li>
                <li><strong>Signature Space</strong>: Clear area at bottom for signatures</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Sizes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>A4 (210 × 297 mm)</strong>: Most common, easy to print and frame</li>
                <li><strong>Letter (8.5 × 11 inches)</strong>: Standard US size</li>
                <li><strong>A5 (148 × 210 mm)</strong>: Smaller, cost-effective option</li>
                <li><strong>Custom Sizes</strong>: 8×10 or 11×14 inches for premium certificates</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Certificates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-600">Digital Certificates</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Instant delivery via email</li>
                    <li>Eco-friendly and cost-effective</li>
                    <li>Easy to verify authenticity online</li>
                    <li>Can include blockchain verification</li>
                    <li>Shareable on LinkedIn and social media</li>
                    <li>No storage or shipping required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-orange-600">Printed Certificates</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Tangible keepsake</li>
                    <li>Traditional and formal</li>
                    <li>Can be framed and displayed</li>
                    <li>Embossed seals and signatures possible</li>
                    <li>Suitable for formal ceremonies</li>
                    <li>Premium feel with quality paper</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Making Certificates Authentic</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Unique Certificate Number</strong>: Sequential or random ID for tracking</li>
                <li><strong>QR Code</strong>: Links to verification page on your website</li>
                <li><strong>Digital Signature</strong>: Cryptographically signed PDF</li>
                <li><strong>Watermark</strong>: Organization logo as subtle background</li>
                <li><strong>Security Features</strong>: Holographic stickers or stamps</li>
                <li><strong>Verification Database</strong>: Online lookup system for authenticity</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Use Cases</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Corporate training completion</li>
                <li>Employee of the month recognition</li>
                <li>Webinar and workshop participation</li>
                <li>Volunteer service appreciation</li>
                <li>Sports tournament achievements</li>
                <li>Academic competitions and olympiads</li>
                <li>Professional skill certifications</li>
                <li>Community service recognition</li>
              </ul>

              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Certificate</h3>
                <p className="mb-6">Trusted by schools, companies, and organizations worldwide</p>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
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
