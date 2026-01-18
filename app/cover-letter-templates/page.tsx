import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { coverLetterTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Cover Letter Templates Free | Professional Cover Letter Maker - BioDatawala',
  description: 'Create professional cover letters with our free templates. Industry-specific examples for job applications. ATS-friendly formats with expert tips.',
  keywords: 'cover letter template, job application letter, professional cover letter, cover letter format, resume cover letter, job cover letter',
};

export default function CoverLetterTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cover Letter Templates
              </h1>
              <p className="text-xl mb-6">
                Write compelling cover letters that get noticed. Professional templates for every industry. 
                ATS-friendly formats with proven examples. Stand out from other candidates.
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
                Despite the digital age, cover letters remain crucial for job applications. They provide context 
                to your resume, showcase your personality, and demonstrate your communication skills. A well-written 
                cover letter can be the difference between getting an interview and being overlooked.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Structure</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Header (Contact Information)</h4>
              <p className="text-gray-700 mb-4">
                Start with your contact details: full name, phone number, email, LinkedIn profile, and city. 
                Follow with the date and employer's contact information including hiring manager's name, 
                company name, and address.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Salutation</h4>
              <p className="text-gray-700 mb-4">
                Address the hiring manager by name whenever possible. Use "Dear [Name]," format. If the name 
                is unavailable, use "Dear Hiring Manager," or "Dear [Department] Team,". Avoid generic "To Whom 
                It May Concern."
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Opening Paragraph</h4>
              <p className="text-gray-700 mb-4">
                Hook the reader immediately. State the position you're applying for, how you found it, and why 
                you're excited. Include a brief compelling reason why you're a great fit. First impressions matter.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Body Paragraphs (1-2 paragraphs)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Skills & Experience:</strong> Highlight your most relevant qualifications. Use specific 
                examples and achievements. Quantify results when possible ("increased sales by 30%"). Connect 
                your experience to the job requirements.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Company Fit:</strong> Show you've researched the company. Explain why you want to work 
                there specifically. Align your values with the company's mission. Demonstrate enthusiasm.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Closing Paragraph</h4>
              <p className="text-gray-700 mb-4">
                Express gratitude for their time and consideration. Reiterate your interest. Include a call to 
                action ("I look forward to discussing..."). Maintain confidence without arrogance.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">6. Sign-Off</h4>
              <p className="text-gray-700 mb-4">
                Use professional closings: "Sincerely," "Best regards," or "Kind regards," followed by your 
                full name. Leave space for signature if printing.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Examples by Situation</h3>
              
              <div className="space-y-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Entry-Level/Fresher Opening:</p>
                  <p className="text-gray-700 italic">
                    "As a recent graduate from [University] with a degree in [Field], I am excited to apply for 
                    the [Position] role at [Company]. During my internship at [Company], I developed strong skills 
                    in [skill], which I am eager to apply to your team."
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Career Change Opening:</p>
                  <p className="text-gray-700 italic">
                    "With 5+ years of experience in [Previous Field], I am excited to leverage my transferable 
                    skills in [New Field] as [Position] at [Company]. My background in [relevant skill] has 
                    prepared me to contribute effectively to your team."
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Experienced Professional Opening:</p>
                  <p className="text-gray-700 italic">
                    "As an accomplished [Title] with 8+ years of experience driving [achievement], I am thrilled 
                    to apply for the [Position] role at [Company]. My track record of [specific achievement] 
                    aligns perfectly with your needs."
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Cover Letter Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Generic Letters:</strong> Customize for each application, reference specific job details</li>
                <li><strong>Repeating Resume:</strong> Add new information, tell stories behind achievements</li>
                <li><strong>Too Long:</strong> Keep to one page maximum, 3-4 paragraphs</li>
                <li><strong>Focusing on Yourself:</strong> Emphasize what you offer the company, not what you want</li>
                <li><strong>Typos & Errors:</strong> Proofread multiple times, use spell check, ask someone to review</li>
                <li><strong>Weak Opening:</strong> Start strong, avoid clichés like "I am writing to apply..."</li>
                <li><strong>Missing Company Research:</strong> Show you understand their business and challenges</li>
                <li><strong>Unprofessional Email:</strong> Use professional email address, not funky123@email.com</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Industry-Specific Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tech/IT</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mention specific technologies/languages</li>
                    <li>• Include GitHub/portfolio links</li>
                    <li>• Highlight problem-solving skills</li>
                    <li>• Reference relevant projects</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Marketing</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Show creativity in writing</li>
                    <li>• Include metrics (ROI, growth %)</li>
                    <li>• Mention campaigns you've run</li>
                    <li>• Demonstrate brand awareness</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Finance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Emphasize analytical skills</li>
                    <li>• Mention certifications (CFA, CPA)</li>
                    <li>• Include quantitative achievements</li>
                    <li>• Show attention to detail</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Creative</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Show personality in writing</li>
                    <li>• Link to portfolio/work samples</li>
                    <li>• Mention creative process</li>
                    <li>• Highlight unique perspective</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">ATS-Friendly Cover Letter Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use standard fonts (Arial, Calibri, Times New Roman) in 10-12pt size</li>
                <li>Include keywords from the job description naturally</li>
                <li>Save as .docx or .pdf (check job posting requirements)</li>
                <li>Avoid images, graphics, or complex formatting</li>
                <li>Use standard section headings</li>
                <li>Keep formatting simple and clean</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cover Letter Length & Format</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Length:</strong> 250-400 words, maximum one page</li>
                <li><strong>Margins:</strong> 1 inch on all sides</li>
                <li><strong>Font Size:</strong> 10-12 point</li>
                <li><strong>Line Spacing:</strong> 1.0 or 1.15</li>
                <li><strong>Alignment:</strong> Left-aligned, not justified</li>
                <li><strong>Paragraphs:</strong> 3-4 paragraphs with space between</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">When to Submit Cover Letters</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Always Include:</strong> If the job posting asks for one</li>
                  <li><strong>Highly Recommended:</strong> For career changes or employment gaps</li>
                  <li><strong>Good Idea:</strong> For competitive positions or dream jobs</li>
                  <li><strong>Optional:</strong> If posting says "cover letter optional"</li>
                  <li><strong>Skip:</strong> Only if explicitly stated "no cover letter"</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Write Your Cover Letter?</h3>
                <p className="mb-6">Start with a professional template today</p>
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  Create Cover Letter Now →
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
