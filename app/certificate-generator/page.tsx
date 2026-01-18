import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Generator Online Free | Create Professional Certificates - BioDatawala',
  description: 'Generate professional certificates online for achievements, courses, events. 10+ customizable templates. Free to create, instant PDF download.',
  keywords: 'certificate maker online, certificate generator, appreciation certificate, course completion certificate, award certificate template',
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
                Certificate Generator
              </h1>
              <p className="text-xl mb-6">
                Create professional certificates for achievements, courses, workshops, and events. Beautiful templates 
                with customizable designs. Perfect for organizations, schools, and trainers.
              </p>
              <Button size="lg">Generate Certificate Free</Button>
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Creating Certificates</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Certificates You Can Create</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Achievement Certificates</h4>
              <p className="text-gray-700 mb-4">
                Recognize outstanding performance, milestones, or accomplishments. Perfect for employee recognition, 
                student awards, or competition winners. Features formal borders, seals, and achievement-focused language.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Document successful completion of training programs, online courses, or educational workshops. Include 
                course details, duration, topics covered, and issuing authority credentials.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Thank attendees for participating in events, conferences, seminars, or webinars. Acknowledge their 
                presence and contribution to the event's success.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Appreciation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Express gratitude to volunteers, helpers, sponsors, or contributors. Perfect for non-profits, 
                community events, and thank-you recognitions.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Certificate Components</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Certificate Title</strong>: "Certificate of Achievement", "Certificate of Completion", etc.</li>
                <li><strong>Recipient Name</strong>: Clearly displayed in prominent font</li>
                <li><strong>Awarding Text</strong>: "This is to certify that...", "Awarded to..."</li>
                <li><strong>Achievement Details</strong>: What was accomplished or completed</li>
                <li><strong>Date of Issue</strong>: When the certificate was awarded</li>
                <li><strong>Authorizing Signature</strong>: Signature of issuing authority</li>
                <li><strong>Organization Name</strong>: Who is issuing the certificate</li>
                <li><strong>Logo/Seal</strong>: Official organizational branding</li>
                <li><strong>Certificate Number</strong>: Unique identifier for verification</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Design Best Practices</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Layout & Spacing</h4>
              <p className="text-gray-700 mb-4">
                Use generous margins and white space. The certificate should look balanced and not crowded. 
                Typically use portrait orientation (A4 or Letter size).
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Typography</h4>
              <p className="text-gray-700 mb-4">
                Use professional, readable fonts. Serif fonts (like Times New Roman or Georgia) work well for formal 
                certificates. Limit to 2-3 fonts maximum. Recipient name should be the largest text element.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Colors & Borders</h4>
              <p className="text-gray-700 mb-4">
                Traditional certificates use gold, blue, or burgundy borders. Modern certificates can use brand colors. 
                Ensure good contrast between background and text for readability.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Wording Examples</h3>
              <div className="space-y-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Achievement Certificate:</p>
                  <p className="text-gray-700 italic">
                    "This Certificate is Proudly Presented to [Name] in Recognition of Outstanding Achievement in 
                    [Field/Subject]. Awarded this [Date] at [Organization]."
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Course Completion:</p>
                  <p className="text-gray-700 italic">
                    "This is to Certify that [Name] has Successfully Completed the [Course Name] consisting of [Hours] 
                    hours of instruction. Dated [Date]."
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Appreciation Certificate:</p>
                  <p className="text-gray-700 italic">
                    "Presented to [Name] in Grateful Appreciation for [Contribution/Service]. Your dedication and 
                    commitment are deeply valued. [Date]."
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Making Certificates Official</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Signature</strong>: Include authorized person's signature (can be digital)</li>
                <li><strong>Seal/Stamp</strong>: Official organizational seal adds authenticity</li>
                <li><strong>Watermark</strong>: Subtle background logo prevents forgery</li>
                <li><strong>Serial Number</strong>: Unique certificate number for verification</li>
                <li><strong>QR Code</strong>: Link to verification page (optional, modern)</li>
                <li><strong>Security Features</strong>: Holographic elements or special paper (for printed)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Certificates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-800">Digital Certificates</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Instant delivery via email</li>
                    <li>✓ Easy to share on LinkedIn</li>
                    <li>✓ Eco-friendly and cost-effective</li>
                    <li>✓ Can include verification links</li>
                    <li>✓ Never lost or damaged</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-orange-800">Printed Certificates</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Traditional and formal</li>
                    <li>✓ Physical keepsake</li>
                    <li>✓ Can be framed and displayed</li>
                    <li>✓ Premium feel with quality paper</li>
                    <li>✓ Better for official documentation</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Certificate Size Standards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>A4 Size</strong>: 210mm × 297mm (most common internationally)</li>
                <li><strong>Letter Size</strong>: 8.5" × 11" (common in US)</li>
                <li><strong>A5 Size</strong>: 148mm × 210mm (compact certificates)</li>
                <li><strong>Custom</strong>: 11" × 8.5" landscape orientation</li>
              </ul>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Professional Certificates?</h3>
                <p className="mb-6">Start recognizing achievements today</p>
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  Generate Certificate Now →
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
