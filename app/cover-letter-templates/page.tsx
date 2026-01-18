import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { coverLetterTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Cover Letter Templates Free | Professional Cover Letter Maker - BioDatawala',
  description: 'Create winning cover letters with 10+ professional templates. ATS-friendly formats for job applications. Free to customize, instant download.',
  keywords: 'cover letter template, job application letter, professional cover letter, cover letter format, how to write cover letter',
};

export default function CoverLetterTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cover Letter Templates
              </h1>
              <p className="text-xl mb-6">
                Write compelling cover letters that get you interviews. Professional templates for every industry. 
                ATS-optimized formats that hiring managers love. Stand out from the competition.
              </p>
              <Button size="lg">Create Cover Letter Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Cover Letter Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coverLetterTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Writing Cover Letters</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Cover Letters Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite automation in hiring, cover letters remain crucial for job applications. They provide context 
                to your resume, showcase your personality, and demonstrate genuine interest in the role. A well-crafted 
                cover letter can be the difference between landing an interview and being overlooked.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Structure</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Header (Contact Information)</h4>
              <p className="text-gray-700 mb-4">
                Include your full name, address, phone number, email, and date. If applying via email, your contact 
                info should match your resume header for consistency.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Salutation (Greeting)</h4>
              <p className="text-gray-700 mb-4">
                Address the hiring manager by name whenever possible. "Dear [Name]" is professional. Avoid generic 
                "To Whom It May Concern." Research LinkedIn or the company website to find the right person.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Opening Paragraph (Hook)</h4>
              <p className="text-gray-700 mb-4">
                State the position you're applying for and where you found it. Include a compelling hook - why you're 
                excited about this opportunity. Mention any mutual connections or referrals here.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Body Paragraphs (2-3 paragraphs)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Paragraph 1:</strong> Highlight your relevant experience and achievements. Use specific examples 
                with quantifiable results. Connect your skills to the job requirements.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Paragraph 2:</strong> Demonstrate knowledge about the company. Explain why you're interested 
                in this specific role and organization. Show cultural fit.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Paragraph 3 (Optional):</strong> Address any concerns like employment gaps or career changes. 
                Highlight additional relevant skills or experiences.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Closing Paragraph</h4>
              <p className="text-gray-700 mb-4">
                Reiterate your interest and enthusiasm. Include a call-to-action expressing your desire for an interview. 
                Thank them for their time and consideration.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">6. Signature</h4>
              <p className="text-gray-700 mb-4">
                End with "Sincerely" or "Best regards" followed by your full name. For printed letters, leave space 
                for a handwritten signature.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Tips by Career Stage</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-blue-800">For Freshers/Entry-Level</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Emphasize education, internships, and projects</li>
                  <li>✓ Highlight soft skills and willingness to learn</li>
                  <li>✓ Mention relevant coursework or certifications</li>
                  <li>✓ Show enthusiasm and energy</li>
                  <li>✓ Keep it concise - 250-300 words</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-green-800">For Experienced Professionals</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Focus on achievements and measurable impact</li>
                  <li>✓ Highlight leadership and strategic thinking</li>
                  <li>✓ Demonstrate industry expertise</li>
                  <li>✓ Show how you can solve their problems</li>
                  <li>✓ Can be slightly longer - 300-400 words</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-purple-800">For Career Changers</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ Address the career change directly</li>
                  <li>✓ Highlight transferable skills</li>
                  <li>✓ Explain your motivation for the switch</li>
                  <li>✓ Show relevant training or preparation</li>
                  <li>✓ Emphasize adaptability and learning ability</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Cover Letter Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Too Long</strong>: Keep it to one page (250-400 words)</li>
                <li><strong>Generic Content</strong>: Customize for each application</li>
                <li><strong>Repeating Resume</strong>: Add new information and context</li>
                <li><strong>Typos and Errors</strong>: Proofread multiple times</li>
                <li><strong>Negative Language</strong>: Focus on positive achievements</li>
                <li><strong>Overly Formal</strong>: Be professional but personable</li>
                <li><strong>Focusing on Yourself</strong>: Emphasize what you can offer them</li>
                <li><strong>Weak Opening</strong>: Start with impact, not clichés</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Examples by Industry</h3>
              
              <div className="space-y-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Technology/IT:</p>
                  <p className="text-gray-700 text-sm italic">
                    "As a software engineer with 5+ years developing scalable web applications, I was excited to see 
                    your opening for Senior Full Stack Developer. My experience with React, Node.js, and AWS aligns 
                    perfectly with your tech stack, and I've successfully led teams in delivering projects 20% ahead 
                    of schedule..."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Marketing:</p>
                  <p className="text-gray-700 text-sm italic">
                    "Your recent campaign for [Product] caught my attention with its innovative use of social media. 
                    As a digital marketing specialist who increased brand engagement by 150% in my current role, I'm 
                    eager to bring my expertise in content strategy and analytics to your team..."
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Finance:</p>
                  <p className="text-gray-700 text-sm italic">
                    "With a CFA certification and 7 years of experience in portfolio management, I've consistently 
                    delivered returns exceeding market benchmarks by 3-5%. Your firm's focus on sustainable investing 
                    aligns with my investment philosophy and personal values..."
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">ATS-Friendly Cover Letter Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use standard fonts (Arial, Calibri, Times New Roman)</li>
                <li>Include keywords from the job description</li>
                <li>Save as .docx or .pdf format</li>
                <li>Avoid tables, images, or complex formatting</li>
                <li>Use simple bullet points if needed</li>
                <li>Don't use headers/footers for important info</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Email vs Formal Letter Format</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-800">Email Cover Letter</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Subject line with position name</li>
                    <li>✓ Shorter, more concise (200-250 words)</li>
                    <li>✓ Contact info in email signature</li>
                    <li>✓ Attach resume as separate file</li>
                    <li>✓ Mobile-friendly formatting</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Formal Letter</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Full header with addresses</li>
                    <li>✓ Can be slightly longer (300-400 words)</li>
                    <li>✓ Printed with handwritten signature</li>
                    <li>✓ Traditional business letter format</li>
                    <li>✓ High-quality paper for physical submission</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Cover Letter?</h3>
                <p className="mb-6">Land your dream job with a professional cover letter</p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Writing Now →
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
