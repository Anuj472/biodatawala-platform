import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { coverLetterTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Cover Letter Templates & Examples | Professional Job Application Letters - BioDatawala',
  description: 'Professional cover letter templates for job applications. Industry-specific examples with ATS-friendly formatting. Free to customize and download.',
  keywords: 'cover letter template, job application letter, professional cover letter, cover letter examples, motivation letter',
};

export default function CoverLetterTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cover Letter Templates
              </h1>
              <p className="text-xl mb-6">
                Create compelling cover letters that get noticed. Professional templates for all industries and career levels. 
                ATS-friendly formatting and expert writing guidance.
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
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Cover Letters Still Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite the rise of LinkedIn and digital portfolios, cover letters remain a crucial part of job applications. 
                A well-crafted cover letter personalizes your application, demonstrates your writing skills, and shows genuine 
                interest in the position. Studies show that 83% of hiring managers read cover letters, and they can be the 
                deciding factor between two equally qualified candidates.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Structure</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Header</h4>
              <p className="text-gray-700 mb-4">
                Include your contact information, date, and employer's contact details. Format it professionally:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm">
                <p className="text-gray-700">
                  Your Name<br />
                  Your Address<br />
                  Your Phone | Your Email<br />
                  LinkedIn Profile (optional)<br />
                  <br />
                  Date<br />
                  <br />
                  Hiring Manager's Name<br />
                  Company Name<br />
                  Company Address
                </p>
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Salutation</h4>
              <p className="text-gray-700 mb-4">
                <strong>Best:</strong> "Dear [Hiring Manager's Name]," (Research the name on LinkedIn)<br />
                <strong>Good:</strong> "Dear Hiring Manager," or "Dear [Department] Team,"<br />
                <strong>Avoid:</strong> "To Whom It May Concern" (too generic)
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Opening Paragraph (The Hook)</h4>
              <p className="text-gray-700 mb-4">
                Start strong with why you're excited about this specific role and company. Mention how you found the position. 
                Include a compelling statement about your qualifications. This paragraph should grab attention immediately.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-bold mb-2">Example Opening:</p>
                <p className="text-gray-700 text-sm italic">
                  "As a software engineer with 5 years of experience in developing scalable web applications, I was thrilled 
                  to discover the Senior Developer position at [Company]. Your recent launch of [Product] demonstrates the 
                  innovative approach that aligns perfectly with my passion for creating user-centric solutions."
                </p>
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Body Paragraphs (1-2 paragraphs)</h4>
              <p className="text-gray-700 mb-4">
                This is where you connect your qualifications to the job requirements. Use the job description as a guide:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Paragraph 1</strong>: Highlight relevant experience and achievements with specific examples</li>
                <li><strong>Paragraph 2</strong>: Explain why you're interested in this company specifically</li>
                <li>Use metrics and numbers when possible ("increased sales by 40%")</li>
                <li>Show, don't just tell (provide concrete examples)</li>
                <li>Address key requirements from the job posting</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Closing Paragraph</h4>
              <p className="text-gray-700 mb-4">
                Express enthusiasm, reiterate your interest, and include a call to action. Thank the reader for their time 
                and consideration. Mention that you've attached your resume and look forward to discussing the opportunity.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">6. Sign-Off</h4>
              <p className="text-gray-700 mb-4">
                Use a professional closing:<br />
                "Sincerely," "Best regards," or "Kind regards,"<br />
                [Your Name]
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Types</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Application Cover Letter</h4>
              <p className="text-gray-700 mb-4">
                Used when applying for a specific job posting. Directly address the job requirements and how you meet them.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Prospecting Cover Letter</h4>
              <p className="text-gray-700 mb-4">
                Used when inquiring about possible job openings at a company, even if they haven't advertised positions. 
                Demonstrate knowledge of the company and explain why you'd be a valuable addition.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Networking Cover Letter</h4>
              <p className="text-gray-700 mb-4">
                Used when someone has referred you or when you're reaching out to a connection. Mention the mutual contact 
                early in the letter.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Career Change Cover Letter</h4>
              <p className="text-gray-700 mb-4">
                Used when transitioning to a new industry or role. Focus on transferable skills and explain your motivation 
                for the career change.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Industry-Specific Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tech Industry</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mention specific technologies/languages</li>
                    <li>• Link to GitHub or portfolio</li>
                    <li>• Discuss projects and impact</li>
                    <li>• Show problem-solving abilities</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Finance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Emphasize analytical skills</li>
                    <li>• Mention certifications (CFA, etc.)</li>
                    <li>• Use financial terminology</li>
                    <li>• Show attention to detail</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Marketing</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Highlight campaign results</li>
                    <li>• Show creativity and strategy</li>
                    <li>• Mention tools (Google Analytics)</li>
                    <li>• Demonstrate brand awareness</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Healthcare</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Emphasize patient care</li>
                    <li>• Mention licenses/certifications</li>
                    <li>• Show compassion and ethics</li>
                    <li>• Discuss clinical experience</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Generic letters</strong>: Customize for each application</li>
                <li><strong>Repeating your resume</strong>: Add new information and context</li>
                <li><strong>Too long</strong>: Keep it to one page (3-4 paragraphs)</li>
                <li><strong>Typos and errors</strong>: Proofread multiple times</li>
                <li><strong>Focusing on yourself</strong>: Emphasize what you can do for them</li>
                <li><strong>Negative language</strong>: Stay positive about past experiences</li>
                <li><strong>Overly formal or casual</strong>: Match the company culture</li>
                <li><strong>Not addressing requirements</strong>: Respond to the job description</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">ATS Optimization Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use standard fonts (Arial, Calibri, Times New Roman)</li>
                <li>Include keywords from the job description</li>
                <li>Avoid tables, headers, and footers</li>
                <li>Save as .docx or PDF (check job posting)</li>
                <li>Use standard section headings</li>
                <li>Don't use images or graphics</li>
                <li>Stick to bullet points and simple formatting</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Quick Cover Letter Checklist</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li>☑ Customized for the specific job and company</li>
                  <li>☑ Addressed to a specific person (if possible)</li>
                  <li>☑ Opening paragraph grabs attention</li>
                  <li>☑ Specific examples with measurable results</li>
                  <li>☑ Shows knowledge of the company</li>
                  <li>☑ Explains why you're a perfect fit</li>
                  <li>☑ Professional tone matching company culture</li>
                  <li>☑ No typos or grammatical errors</li>
                  <li>☑ One page maximum</li>
                  <li>☑ Clear call to action in closing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Cover Letter</h3>
                <p className="mb-6">Stand out from the competition with a compelling letter</p>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
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
