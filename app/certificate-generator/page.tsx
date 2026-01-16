import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Maker Online Free | Professional Certificate Generator - BioDatawala',
  description: 'Create professional certificates online. Achievement, participation, course completion certificates. Free templates, instant download.',
  keywords: 'certificate maker online, certificate generator, appreciation certificate, course completion certificate, award certificate template',
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
                Create beautiful certificates for achievements, courses, events, and awards. 
                10+ professional templates with customizable designs. Free to use, instant PDF download.
              </p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Create Certificate Free
              </Button>
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
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Certificates</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Achievement Certificates</h4>
              <p className="text-gray-700 mb-4">
                Recognize outstanding performance and accomplishments. Features formal borders, seals, and recognition language. 
                Perfect for academic excellence, employee recognition, or competition winners.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Acknowledge attendance and involvement in events, workshops, or seminars. Less formal than achievement certificates 
                but still professional. Includes event details and appreciation message.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Document successful completion of training programs, courses, or educational programs. Includes skills acquired, 
                duration, and certification details. Essential for professional development records.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Award Certificates</h4>
              <p className="text-gray-700 mb-4">
                Prestigious recognition for exceptional achievements. Features trophy graphics, gold accents, and formal language. 
                Used for competitions, contests, and special recognitions.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Certificate Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Title</strong>: "Certificate of Achievement/Participation/Completion"</li>
                <li><strong>Recipient Name</strong>: Full name clearly displayed</li>
                <li><strong>Recognition Statement</strong>: What the certificate is for</li>
                <li><strong>Date</strong>: Date of achievement or issue date</li>
                <li><strong>Signature</strong>: Authorized person's signature</li>
                <li><strong>Organization Name/Logo</strong>: Issuing authority</li>
                <li><strong>Seal/Badge</strong>: Official seal or stamp (optional)</li>
                <li><strong>Certificate Number</strong>: Unique ID for verification (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li>✓ <strong>Use High-Quality Paper</strong>: Minimum 200 GSM for printed certificates</li>
                  <li>✓ <strong>Professional Fonts</strong>: Serif fonts for formal, readable text</li>
                  <li>✓ <strong>Appropriate Colors</strong>: Gold, blue, or maroon for formal certificates</li>
                  <li>✓ <strong>Clear Hierarchy</strong>: Recipient name should be most prominent</li>
                  <li>✓ <strong>Border Design</strong>: Frame the certificate without overwhelming content</li>
                  <li>✓ <strong>White Space</strong>: Don't overcrowd the design</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Wording Examples</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Achievement Certificate</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700 italic">
                "This is to certify that [Name] has demonstrated exceptional [skill/quality] and is hereby 
                awarded this Certificate of Achievement in recognition of [specific accomplishment]."
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">Course Completion</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700 italic">
                "This certifies that [Name] has successfully completed the [Course Name] training program 
                consisting of [X hours] of instruction on [Date]."
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Use Cases for Certificates</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Corporate Training</strong>: Employee skill development programs</li>
                <li><strong>Educational Institutions</strong>: Academic achievements and honors</li>
                <li><strong>Events & Conferences</strong>: Speaker and participant recognition</li>
                <li><strong>Sports Competitions</strong>: Winners and participants awards</li>
                <li><strong>Volunteer Programs</strong>: Service hour recognition</li>
                <li><strong>Online Courses</strong>: Digital course completion certificates</li>
              </ul>

              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Certificate Now</h3>
                <p className="mb-6">Free templates, easy customization, instant download</p>
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  Get Started Free →
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
