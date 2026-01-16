import { Metadata } from 'next';
import Link from 'next/link';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { marriageBiodataTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Marriage Biodata Maker Online Free | Hindu, Muslim, Christian Formats - BioDatawala',
  description: 'Create beautiful marriage biodata online for free. Choose from traditional Hindu, Muslim, Christian formats. Download as PDF. 10+ professional templates available.',
  keywords: 'marriage biodata maker, Hindu biodata format, Muslim nikah biodata, Christian marriage resume, shaadi biodata template, free biodata creator',
};

export default function MarriageBiodataMaker() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marriage Biodata Maker
            </h1>
            <p className="text-xl mb-6">
              Create beautiful marriage biodata with traditional Hindu, Muslim, and Christian formats. 
              Free to use, professional templates, instant PDF download.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Create Biodata Free</Button>
              <Button variant="outline" size="lg" className="bg-white bg-opacity-20 border-white hover:bg-opacity-30">
                Browse Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Perfect Biodata Template</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marriageBiodataTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Complete Guide to Creating Marriage Biodata Online</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">What is Marriage Biodata?</h3>
            <p className="text-gray-700 mb-4">
              A marriage biodata is a professional document that provides comprehensive information about an individual seeking marriage. 
              It serves as a formal introduction in arranged marriage settings and includes personal details, family background, 
              educational qualifications, professional information, and partner preferences. Unlike a standard resume, a marriage 
              biodata focuses on aspects relevant to matrimonial alliances.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Use BioDatawala for Marriage Biodata?</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>10+ Professional Templates</strong>: Choose from traditional to modern designs</li>
              <li><strong>Multiple Formats</strong>: Hindu, Muslim, Christian, and regional variations</li>
              <li><strong>Easy Customization</strong>: Add photos, edit text, change colors instantly</li>
              <li><strong>Instant Download</strong>: Get high-quality PDF within minutes</li>
              <li><strong>Mobile Friendly</strong>: Create and edit on any device</li>
              <li><strong>100% Free Basic Templates</strong>: No credit card required</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Types of Marriage Biodata Formats</h3>
            
            <h4 className="text-xl font-bold mt-6 mb-3">1. Hindu Marriage Biodata</h4>
            <p className="text-gray-700 mb-4">
              Traditional Hindu biodata typically includes astrological details like birth time, nakshatra, rashi, and gotra. 
              Our Hindu biodata templates feature traditional designs with Ganesh symbols, ornate borders, and maroon-gold color schemes. 
              Essential sections include family details, educational background, occupation, and horoscope information.
            </p>

            <h4 className="text-xl font-bold mt-6 mb-3">2. Muslim Nikah Biodata</h4>
            <p className="text-gray-700 mb-4">
              Muslim biodata format emphasizes Islamic values and family background. Our templates include crescent motifs, 
              Arabic patterns, and elegant typography. Key sections cover personal information, family details, religious practices, 
              education, profession, and expectations from a life partner.
            </p>

            <h4 className="text-xl font-bold mt-6 mb-3">3. Christian Marriage Resume</h4>
            <p className="text-gray-700 mb-4">
              Christian marriage biodata follows a simple, elegant format with cross symbols and clean layouts. It includes 
              denomination details, church affiliation, family background, education, career, and partner preferences. 
              Our templates offer both traditional and contemporary designs suitable for all Christian communities.
            </p>

            <h4 className="text-xl font-bold mt-6 mb-3">4. Regional Variations</h4>
            <p className="text-gray-700 mb-4">
              <strong>South Indian Biodata</strong>: Features temple-inspired borders, traditional colors, and regional-specific details like subsect and star.
              <br /><br />
              <strong>Marwari Biodata</strong>: Ornate Rajasthani patterns, rich colors, detailed family business information, and community-specific requirements.
              <br /><br />
              <strong>Modern Minimalist</strong>: Clean layouts with pastel colors, contemporary fonts, and photo-focused designs for urban professionals.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Personal Details</strong>: Full name, date of birth, height, complexion</li>
              <li><strong>Family Background</strong>: Father's and mother's occupation, siblings details</li>
              <li><strong>Educational Qualification</strong>: Degrees, institutions, specializations</li>
              <li><strong>Professional Information</strong>: Current job, designation, company, income</li>
              <li><strong>Contact Information</strong>: Phone number, email, address</li>
              <li><strong>Partner Preferences</strong>: Age range, education, profession, location</li>
              <li><strong>Additional Details</strong>: Hobbies, interests, achievements</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Create Biodata in 3 Simple Steps</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">Step 1: Choose Your Template</p>
              <p className="text-gray-700 mb-4">Browse our collection of 10+ professional templates and select one that matches your style and community preferences.</p>
              
              <p className="font-bold mb-3">Step 2: Customize Your Biodata</p>
              <p className="text-gray-700 mb-4">Fill in your details, upload your photo, adjust colors and fonts to personalize your biodata.</p>
              
              <p className="font-bold mb-3">Step 3: Download as PDF</p>
              <p className="text-gray-700">Preview your biodata and download it as a high-quality PDF ready for printing or sharing digitally.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Tips for Perfect Marriage Biodata</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use a recent, professional photograph</li>
              <li>Be honest and accurate with all information</li>
              <li>Proofread carefully for spelling and grammar</li>
              <li>Keep it concise - ideally one page</li>
              <li>Highlight your strengths and achievements</li>
              <li>Use appropriate language and tone</li>
              <li>Include multiple contact methods</li>
              <li>Update regularly as circumstances change</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h3>
            
            <h4 className="text-lg font-bold mt-4 mb-2">Is BioDatawala free to use?</h4>
            <p className="text-gray-700 mb-4">
              Yes! We offer 10 free marriage biodata templates. Premium templates with advanced features are available for ₹299/month.
            </p>

            <h4 className="text-lg font-bold mt-4 mb-2">Can I edit my biodata after downloading?</h4>
            <p className="text-gray-700 mb-4">
              Absolutely! Your biodata is saved in your account, and you can edit and download it anytime.
            </p>

            <h4 className="text-lg font-bold mt-4 mb-2">What format is the download?</h4>
            <p className="text-gray-700 mb-4">
              You can download your biodata as PDF (for printing) or JPG (for online sharing).
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Marriage Biodata?</h3>
              <p className="mb-6">Join 50,000+ users who found their perfect match</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Creating Free →
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
