import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { jobTrackerTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Job Application Tracker Template Free | Job Search Organizer - BioDatawala',
  description: 'Track job applications efficiently with 10+ spreadsheet templates. Organize interviews, follow-ups, and deadlines. Free to download and customize.',
  keywords: 'job application tracker, job search spreadsheet, application organizer, job hunt tracker, interview tracker',
};

export default function JobApplicationTracker() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Job Application Tracker
              </h1>
              <p className="text-xl mb-6">
                Stay organized during your job search with our free tracking templates. Manage applications, 
                interviews, follow-ups, and offers all in one place. Never miss a deadline or interview again.
              </p>
              <Button size="lg">Download Tracker Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Job Tracker Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {jobTrackerTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Job Application Tracking</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why You Need a Job Application Tracker</h3>
              <p className="text-gray-700 mb-4">
                Job searching can be overwhelming, especially when applying to multiple positions simultaneously. 
                A job application tracker helps you stay organized, follow up at the right time, prepare for 
                interviews, and analyze which strategies are working. Studies show organized job seekers receive 
                40% more interview callbacks.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Columns for Your Tracker</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Company Name</strong>: Organization you're applying to</li>
                <li><strong>Job Title</strong>: Exact position name</li>
                <li><strong>Application Date</strong>: When you submitted</li>
                <li><strong>Application Status</strong>: Applied, Screening, Interview, Offer, Rejected</li>
                <li><strong>Job Source</strong>: Where you found it (LinkedIn, Indeed, referral)</li>
                <li><strong>Job Posting URL</strong>: Link to original job post</li>
                <li><strong>Contact Person</strong>: Recruiter or hiring manager name</li>
                <li><strong>Contact Email/Phone</strong>: How to reach them</li>
                <li><strong>Salary Range</strong>: Expected compensation</li>
                <li><strong>Location</strong>: Job location or remote status</li>
                <li><strong>Next Action</strong>: Follow-up date or next step</li>
                <li><strong>Notes</strong>: Key details, requirements, interview questions</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Application Status Categories</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold mb-1">📝 Applied</p>
                  <p className="text-sm text-gray-700">Application submitted, awaiting response</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-bold mb-1">📧 Screening</p>
                  <p className="text-sm text-gray-700">Resume reviewed, phone screen scheduled</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="font-bold mb-1">💼 Interview Scheduled</p>
                  <p className="text-sm text-gray-700">Interview date confirmed, preparing</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="font-bold mb-1">⏳ Awaiting Decision</p>
                  <p className="text-sm text-gray-700">Interviews complete, waiting for offer</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="font-bold mb-1">✅ Offer Received</p>
                  <p className="text-sm text-gray-700">Job offer in hand, considering/negotiating</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="font-bold mb-1">❌ Rejected</p>
                  <p className="text-sm text-gray-700">Not selected, move to next opportunity</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Follow-Up Timeline Strategy</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Week 1-2</strong>: Wait patiently, no follow-up needed</li>
                <li><strong>Week 2</strong>: Send polite follow-up email if job posting mentioned timeline</li>
                <li><strong>Week 3</strong>: Second follow-up if no response, express continued interest</li>
                <li><strong>After Phone Screen</strong>: Thank you email within 24 hours</li>
                <li><strong>After Interview</strong>: Thank you email same day or within 24 hours</li>
                <li><strong>Post-Interview</strong>: Follow up after timeline they provided</li>
                <li><strong>After 1 Month</strong>: If no response, consider moving on</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Interview Preparation Tracking</h3>
              <p className="text-gray-700 mb-4">
                Create additional columns or a separate sheet for interview prep:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Interview Type</strong>: Phone, video, in-person, panel</li>
                <li><strong>Interview Date & Time</strong>: Exact scheduling</li>
                <li><strong>Interviewer Names</strong>: Who you'll meet</li>
                <li><strong>Interview Format</strong>: Technical, behavioral, case study</li>
                <li><strong>Questions Asked</strong>: Record for future reference</li>
                <li><strong>Your Answers</strong>: What went well, what to improve</li>
                <li><strong>Questions You Asked</strong>: Your engagement level</li>
                <li><strong>Overall Impression</strong>: How you felt about the opportunity</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Job Search Metrics to Track</h3>
              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-emerald-800">Key Performance Indicators</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>📊 <strong>Application-to-Response Rate</strong>: % of applications that get responses</li>
                  <li>📊 <strong>Response-to-Interview Rate</strong>: % of responses that lead to interviews</li>
                  <li>📊 <strong>Interview-to-Offer Rate</strong>: % of interviews resulting in offers</li>
                  <li>📊 <strong>Average Response Time</strong>: Days until hearing back</li>
                  <li>📊 <strong>Most Effective Job Sources</strong>: Which platforms work best</li>
                  <li>📊 <strong>Weekly Application Goal</strong>: Target number of applications</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tracker Template Types</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Excel/Google Sheets</h4>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Detailed tracking, custom formulas, data analysis.
                <br /><strong>Features:</strong> Filters, sorting, conditional formatting, pivot tables.
                <br /><strong>Use when:</strong> You want full control and customization.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Notion Template</h4>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Visual organization, task management integration.
                <br /><strong>Features:</strong> Kanban boards, database views, templates.
                <br /><strong>Use when:</strong> You prefer a more visual, flexible system.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Trello Board</h4>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Kanban-style workflow visualization.
                <br /><strong>Features:</strong> Cards, lists, labels, due dates.
                <br /><strong>Use when:</strong> You like drag-and-drop simplicity.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Airtable Base</h4>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Hybrid spreadsheet-database functionality.
                <br /><strong>Features:</strong> Multiple views, attachments, automations.
                <br /><strong>Use when:</strong> You need advanced features with ease of use.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Sample Tracker Workflow</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Find Job</strong>: Spot interesting opening on job board</li>
                <li><strong>Add to Tracker</strong>: Create new row with company, title, URL</li>
                <li><strong>Customize Application</strong>: Tailor resume and cover letter</li>
                <li><strong>Apply</strong>: Submit application, update "Applied" status and date</li>
                <li><strong>Set Reminder</strong>: Schedule follow-up for 2 weeks out</li>
                <li><strong>Track Response</strong>: Update status when you hear back</li>
                <li><strong>Prepare for Interview</strong>: Add interview details and prep notes</li>
                <li><strong>Send Thank You</strong>: Note when you sent follow-up</li>
                <li><strong>Update Outcome</strong>: Mark as offer, rejection, or ongoing</li>
                <li><strong>Analyze</strong>: Review metrics weekly to optimize strategy</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Coding System</h3>
              <p className="text-gray-700 mb-4">
                Use color coding for quick visual reference:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Green</strong>: Positive progress (interview scheduled, offer received)</li>
                <li><strong>Yellow</strong>: Awaiting response or action needed</li>
                <li><strong>Red</strong>: Rejected or deadline approaching</li>
                <li><strong>Blue</strong>: High priority or dream job</li>
                <li><strong>Gray</strong>: Archived or no longer interested</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Best Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Update tracker immediately after any action</li>
                <li>Review and update weekly, not just when applying</li>
                <li>Keep all related documents in linked folders</li>
                <li>Take notes after every interview while fresh</li>
                <li>Set calendar reminders for follow-ups</li>
                <li>Back up your tracker regularly</li>
                <li>Share with career coach or mentor if helpful</li>
                <li>Celebrate small wins along the way</li>
              </ul>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Tracking Your Job Applications</h3>
                <p className="mb-6">Stay organized and land your dream job faster</p>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Download Tracker Now →
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
