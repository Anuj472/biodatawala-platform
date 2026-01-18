import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'Job Application Tracker | Organize Your Job Search - BioDatawala',
  description: 'Track your job applications efficiently. Monitor interview stages, follow-ups, and responses. Stay organized during your job search.',
  keywords: 'job application tracker, job search organizer, interview tracker, application management, job hunt tracker',
};

export default function JobApplicationTracker() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Job Application Tracker
              </h1>
              <p className="text-xl mb-6">
                Stay organized during your job search. Track applications, interviews, follow-ups, and responses all in one 
                place. Never miss an opportunity or forget to follow up.
              </p>
              <Button size="lg">Start Tracking Free</Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Tracking Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold mb-3">Application Management</h3>
                <p className="text-gray-600">Track company name, position, application date, and status for every job you apply to.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-3">Interview Scheduler</h3>
                <p className="text-gray-600">Never miss an interview. Track dates, times, formats (phone/video/in-person), and preparation notes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-xl font-bold mb-3">Follow-up Reminders</h3>
                <p className="text-gray-600">Set reminders to follow up on applications and send thank-you emails after interviews.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Progress Analytics</h3>
                <p className="text-gray-600">Visualize your job search progress with stats: applications sent, interviews scheduled, offers received.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">Notes & Documents</h3>
                <p className="text-gray-600">Store job descriptions, interviewer names, salary information, and personal notes for each application.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Custom Statuses</h3>
                <p className="text-gray-600">Create custom stages: Applied, Screening, Interview, Offer, Rejected, Withdrawn, Accepted.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Master Your Job Search with Tracking</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Track Your Job Applications?</h3>
              <p className="text-gray-700 mb-4">
                Job searching can be overwhelming, especially when applying to multiple positions simultaneously. Without 
                proper tracking, it's easy to forget which companies you've applied to, when to follow up, or what you 
                discussed in each interview. A job application tracker transforms chaos into clarity, increasing your 
                chances of success by keeping you organized and proactive.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Track</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Basic Application Details</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Company Name</strong>: Organization you applied to</li>
                <li><strong>Position Title</strong>: Exact job title from posting</li>
                <li><strong>Application Date</strong>: When you submitted</li>
                <li><strong>Application Method</strong>: Company website, LinkedIn, Indeed, etc.</li>
                <li><strong>Job Posting URL</strong>: Link to original posting</li>
                <li><strong>Status</strong>: Current stage in process</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Contact Information</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Hiring manager name and email</li>
                <li>Recruiter contact details</li>
                <li>HR department phone number</li>
                <li>Internal referral name (if applicable)</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Interview Details</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Interview date and time</li>
                <li>Interview format (phone, video, in-person)</li>
                <li>Interview panel names and titles</li>
                <li>Interview round (1st, 2nd, final, etc.)</li>
                <li>Questions asked</li>
                <li>Your responses and performance notes</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Additional Notes</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Salary range or expectations</li>
                <li>Benefits and perks mentioned</li>
                <li>Company culture observations</li>
                <li>Next steps discussed</li>
                <li>Thank-you email sent date</li>
                <li>Follow-up actions needed</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Application Status Categories</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-3 rounded">
                  <strong className="text-blue-800">Wishlist:</strong>
                  <span className="text-gray-700 text-sm ml-2">Companies you want to apply to</span>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <strong className="text-yellow-800">Applied:</strong>
                  <span className="text-gray-700 text-sm ml-2">Application submitted, awaiting response</span>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong className="text-purple-800">Screening:</strong>
                  <span className="text-gray-700 text-sm ml-2">Phone screen or initial assessment scheduled</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <strong className="text-indigo-800">Interview:</strong>
                  <span className="text-gray-700 text-sm ml-2">In interview process (specify round)</span>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <strong className="text-green-800">Offer:</strong>
                  <span className="text-gray-700 text-sm ml-2">Job offer received, under consideration</span>
                </div>
                <div className="bg-teal-50 p-3 rounded">
                  <strong className="text-teal-800">Accepted:</strong>
                  <span className="text-gray-700 text-sm ml-2">Offer accepted, start date confirmed</span>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <strong className="text-red-800">Rejected:</strong>
                  <span className="text-gray-700 text-sm ml-2">Application/interview unsuccessful</span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <strong className="text-gray-800">Withdrawn:</strong>
                  <span className="text-gray-700 text-sm ml-2">You withdrew application</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Job Search Metrics to Monitor</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Applications Sent</strong>: Total number of applications</li>
                <li><strong>Response Rate</strong>: % of applications that got responses</li>
                <li><strong>Interview Rate</strong>: % of applications leading to interviews</li>
                <li><strong>Offer Rate</strong>: % of interviews resulting in offers</li>
                <li><strong>Average Response Time</strong>: Days between application and response</li>
                <li><strong>Time to Hire</strong>: Days from application to offer</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Follow-up Timeline</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Week 1:</strong> Application submitted - no action needed</li>
                  <li><strong>Week 2:</strong> Send polite follow-up email if no response</li>
                  <li><strong>After Phone Screen:</strong> Thank-you email within 24 hours</li>
                  <li><strong>After Interview:</strong> Thank-you email same day or next morning</li>
                  <li><strong>After Final Interview:</strong> Follow up after 1 week if no update</li>
                  <li><strong>After Offer:</strong> Respond within 24-48 hours (or request timeline)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Best Practices for Job Search Tracking</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Update Immediately</h4>
              <p className="text-gray-700 mb-4">
                Log applications as soon as you submit them. Update status immediately after hearing back or attending 
                interviews. Memory fades quickly, so real-time tracking ensures accuracy.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Review Weekly</h4>
              <p className="text-gray-700 mb-4">
                Set aside time each week to review your tracker. Identify applications needing follow-ups, prepare for 
                upcoming interviews, and analyze your success metrics.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Be Detailed</h4>
              <p className="text-gray-700 mb-4">
                The more information you capture, the better prepared you'll be. Note specific questions asked, topics 
                discussed, and impressions formed during interviews.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Set Goals</h4>
              <p className="text-gray-700 mb-4">
                Establish weekly application goals (e.g., "Apply to 10 positions per week"). Track your progress against 
                these goals to maintain momentum.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tips for Staying Organized</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Create a dedicated email folder for job search correspondence</li>
                <li>Save customized resumes and cover letters for each application</li>
                <li>Screenshot job postings (they might be removed)</li>
                <li>Keep a master list of references ready to share</li>
                <li>Store company research notes for interview preparation</li>
                <li>Track salary negotiation conversations</li>
                <li>Document verbal offers and promises</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Not tracking applications immediately (and forgetting later)</li>
                <li>Applying to same company multiple times by accident</li>
                <li>Missing follow-up deadlines</li>
                <li>Losing track of which resume version was sent</li>
                <li>Forgetting interviewer names before interviews</li>
                <li>Not documenting verbal agreements or promises</li>
                <li>Failing to analyze what's working and what's not</li>
              </ul>

              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Tracking Your Applications Today</h3>
                <p className="mb-6">Get organized and land your dream job faster</p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Start Tracking Free →
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
