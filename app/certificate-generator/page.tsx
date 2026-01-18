import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { certificateTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Certificate Maker Online Free | Generate Professional Certificates - BioDatawala',
  description: 'Create professional certificates online - achievement, participation, course completion, appreciation. 10+ templates. Add signatures, logos, seals.',
  keywords: 'certificate maker, online certificate generator, achievement certificate, course completion certificate, appreciation certificate',
};

export default function CertificateGenerator() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Certificate Generator
              </h1>
              <p className="text-xl mb-6">
                Create beautiful certificates online for achievements, courses, events, and appreciation. 
                Add signatures, logos, seals. Download high-quality PDFs instantly.
              </p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">Generate Certificate Free</Button>
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
                Recognize outstanding performance, milestones, or accomplishments. Used in corporate settings, schools, 
                and sports competitions. Features ornate borders, seals, and formal language.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Course Completion Certificates</h4>
              <p className="text-gray-700 mb-4">
                Awarded upon finishing training programs, workshops, or online courses. Includes course name, duration, 
                topics covered, and institution details. Essential for professional development records.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Participation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Given to all attendees of events, conferences, seminars, or workshops. Acknowledges presence and 
                engagement. Simple design with event branding and date.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Appreciation Certificates</h4>
              <p className="text-gray-700 mb-4">
                Express gratitude for contributions, volunteer work, or support. Used by NGOs, community organizations, 
                and companies. Warm, friendly design with heartfelt messaging.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Components</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Title</strong>: "Certificate of Achievement/Completion/Appreciation"</li>
                <li><strong>Recipient Name</strong>: Prominently displayed in elegant font</li>
                <li><strong>Award Statement</strong>: What is being recognized</li>
                <li><strong>Date</strong>: When the certificate is issued</li>
                <li><strong>Organization Details</strong>: Name, logo, branding</li>
                <li><strong>Signatures</strong>: Authorized signatories with titles</li>
                <li><strong>Seal/Stamp</strong>: Official emblem or seal</li>
                <li><strong>Certificate Number</strong>: For verification and record-keeping</li>
                <li><strong>Border Design</strong>: Elegant frames and decorative elements</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Professional Fonts</strong>: Use elegant serif fonts for formal feel</li>
                <li><strong>Color Scheme</strong>: Gold, blue, green for authority and prestige</li>
                <li><strong>White Space</strong>: Don't overcrowd - keep it clean and readable</li>
                <li><strong>High Quality Paper</strong>: Use thick, premium paper for printing</li>
                <li><strong>Consistent Branding</strong>: Match organization colors and style</li>
                <li><strong>Hierarchy</strong>: Most important info (name) should be largest</li>
                <li><strong>Balance</strong>: Symmetrical design creates professional look</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Use Cases</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Corporate Training</strong>: Employee skill development programs</li>
                <li><strong>Educational Institutions</strong>: Academic achievements and competitions</li>
                <li><strong>Online Courses</strong>: E-learning platform completions</li>
                <li><strong>Workshops & Seminars</strong>: Professional development events</li>
                <li><strong>Sports Events</strong>: Winners and participants</li>
                <li><strong>Volunteer Programs</strong>: Community service recognition</li>
                <li><strong>Internships</strong>: Successful internship completion</li>
                <li><strong>Competitions</strong>: Hackathons, quizzes, debates</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">💡 Pro Tips for Digital Certificates</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Add QR code for online verification</li>
                  <li>Include unique certificate ID</li>
                  <li>Provide shareable LinkedIn link</li>
                  <li>Offer both PDF and image formats</li>
                  <li>Maintain a digital registry</li>
                  <li>Enable social media sharing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Professional Certificates in Minutes</h3>
                <p className="mb-6">10+ templates, full customization, instant download</p>
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
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
