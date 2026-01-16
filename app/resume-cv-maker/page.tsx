import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { resumeTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Free Resume Builder Online | ATS-Friendly CV Maker India - BioDatawala',
  description: 'Create professional ATS-friendly resumes online for free. 10+ resume templates for freshers and experienced. Download as PDF. Get hired faster.',
  keywords: 'resume builder India, fresher resume format, ATS resume template, professional CV maker, free resume creator, job resume template',
};

export default function ResumeCVMaker() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Resume & CV Maker
            </h1>
            <p className="text-xl mb-6">
              Create ATS-friendly resumes that get you hired. Perfect for freshers and experienced professionals. 
              Free templates, instant download, no design skills needed.
            </p>
            <Button size="lg">Build Your Resume Free</Button>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Professional Resume Templates</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from ATS-optimized templates designed by HR experts. All templates are free to customize and download.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resumeTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Resume Builder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ATS-Friendly</h3>
              <p className="text-gray-600">All templates pass Applicant Tracking Systems used by top companies</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-gray-600">Create professional resume in under 10 minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Download</h3>
              <p className="text-gray-600">Download as PDF or Word format instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Complete Resume Writing Guide for 2026</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Resume vs CV: What's the Difference?</h3>
            <p className="text-gray-700 mb-4">
              A <strong>resume</strong> is a concise 1-2 page document highlighting your relevant work experience, skills, and education 
              for a specific job. A <strong>CV (Curriculum Vitae)</strong> is a comprehensive document listing your entire academic and 
              professional history, typically used for academic, research, or international positions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Resume Format for Freshers</h3>
            <p className="text-gray-700 mb-4">
              As a fresher with limited work experience, focus on:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Education</strong>: Place this section prominently with CGPA, relevant coursework</li>
              <li><strong>Skills</strong>: Technical skills, soft skills, certifications, languages</li>
              <li><strong>Projects</strong>: Academic projects, personal projects, internships</li>
              <li><strong>Achievements</strong>: Awards, competitions, extracurricular activities</li>
              <li><strong>Internships</strong>: Even short internships add value</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">ATS-Friendly Resume Tips</h3>
            <p className="text-gray-700 mb-4">
              Applicant Tracking Systems (ATS) scan resumes before they reach recruiters. To pass ATS:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use standard section headings (Work Experience, Education, Skills)</li>
              <li>Avoid tables, images, graphics, and unusual fonts</li>
              <li>Include relevant keywords from job description</li>
              <li>Use standard bullet points, not custom icons</li>
              <li>Save as PDF unless job posting specifies Word format</li>
              <li>Don't use headers/footers for important information</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-4">Industry-Specific Resume Formats</h3>
            
            <h4 className="text-xl font-bold mt-6 mb-3">IT & Software Engineering</h4>
            <p className="text-gray-700 mb-4">
              Highlight programming languages, frameworks, tools, GitHub profile, and technical projects. Use action verbs like 
              "developed," "implemented," "optimized."
            </p>

            <h4 className="text-xl font-bold mt-6 mb-3">Marketing & Sales</h4>
            <p className="text-gray-700 mb-4">
              Emphasize achievements with metrics (increased sales by 30%, generated 500+ leads). Include campaign successes, 
              client acquisition, and digital marketing skills.
            </p>

            <h4 className="text-xl font-bold mt-6 mb-3">Finance & Accounting</h4>
            <p className="text-gray-700 mb-4">
              Focus on certifications (CPA, CFA, CA), financial modeling skills, software proficiency (Excel, SAP, Tally), 
              and quantifiable results in cost savings or revenue growth.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h4 className="text-lg font-bold mb-3">💡 Pro Tip: Action Verbs for Resume</h4>
              <p className="text-gray-700">
                Start bullet points with strong action verbs: Achieved, Developed, Managed, Led, Increased, Reduced, Implemented, 
                Created, Analyzed, Streamlined, Coordinated, Optimized.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Common Resume Mistakes to Avoid</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Spelling and grammatical errors</li>
              <li>Using unprofessional email addresses</li>
              <li>Including irrelevant personal information</li>
              <li>Making it too long (stick to 1-2 pages)</li>
              <li>Using generic objective statements</li>
              <li>Not tailoring resume to job description</li>
              <li>Poor formatting and readability</li>
              <li>Exaggerating or lying about experience</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Professional Resume?</h3>
              <p className="mb-6">Join thousands who landed their dream jobs</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Create Resume Now →
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
