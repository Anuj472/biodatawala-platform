import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Maker Online Free | Professional Card Designer - BioDatawala',
  description: 'Create professional business cards online. 10+ templates - minimalist, creative, corporate. Add logo, QR code, social media. Download print-ready files.',
  keywords: 'business card maker, visiting card design, professional business card, corporate card designer, custom business cards online',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Create memorable business cards online. Choose from minimalist to creative designs. 
                Add your logo, QR code, social media. Download print-ready PDFs in minutes.
              </p>
              <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">Design Business Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Professional Business Card Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Stand out with professionally designed business cards. All templates are print-ready with standard dimensions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessCardTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Business Card Design</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter</h3>
              <p className="text-gray-700 mb-4">
                In our digital age, business cards remain one of the most effective networking tools. A well-designed card makes 
                a lasting impression, conveys professionalism, and provides an easy way for contacts to remember and reach you. 
                Studies show that 72% of people judge a company based on the quality of their business card.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Full Name</strong>: Your name prominently displayed</li>
                <li><strong>Job Title</strong>: Your role or designation</li>
                <li><strong>Company Name</strong>: Business or organization name</li>
                <li><strong>Logo</strong>: Company branding for recognition</li>
                <li><strong>Phone Number</strong>: Direct contact number</li>
                <li><strong>Email Address</strong>: Professional email</li>
                <li><strong>Website</strong>: Company or portfolio website</li>
                <li><strong>Physical Address</strong>: Office location (optional)</li>
                <li><strong>Social Media</strong>: LinkedIn, Instagram handles</li>
                <li><strong>QR Code</strong>: Link to digital contact or portfolio</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Styles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Minimalist Professional</h4>
              <p className="text-gray-700 mb-4">
                Clean, simple design with lots of white space. Focus on essential information only. Perfect for corporate 
                professionals, consultants, and formal industries. Uses neutral colors like black, white, navy.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Creative & Colorful</h4>
              <p className="text-gray-700 mb-4">
                Bold colors, unique layouts, and creative typography. Ideal for designers, artists, marketers, and creative 
                professionals. Shows personality and stands out from traditional cards.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Modern Tech</h4>
              <p className="text-gray-700 mb-4">
                Sleek, tech-forward design with gradients, geometric patterns, and modern fonts. Perfect for startups, 
                IT professionals, and digital businesses. Often includes QR codes and social media icons.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Luxury Premium</h4>
              <p className="text-gray-700 mb-4">
                Sophisticated design with gold foil, embossing, or textured backgrounds. Used by luxury brands, real estate 
                agents, lawyers, and high-end service providers. Conveys quality and exclusivity.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Standard Size</strong>: Use 3.5" x 2" (89mm x 51mm) for easy storage</li>
                <li><strong>Readable Fonts</strong>: Minimum 8pt font size, clear typography</li>
                <li><strong>Quality Images</strong>: High-resolution logos (300 DPI minimum)</li>
                <li><strong>Contrast</strong>: Ensure text is readable against background</li>
                <li><strong>Bleed Area</strong>: Design extends 1/8" beyond trim for printing</li>
                <li><strong>Both Sides</strong>: Utilize back side for additional info or design</li>
                <li><strong>Color Mode</strong>: Use CMYK for printing, not RGB</li>
                <li><strong>Proofread</strong>: Triple check all contact information</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Special Features to Consider</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>QR Codes</strong>: Link to digital business card or portfolio</li>
                <li><strong>Photo</strong>: Professional headshot for personal branding</li>
                <li><strong>Tagline</strong>: Brief description of services or expertise</li>
                <li><strong>Vertical Layout</strong>: Stand out from standard horizontal cards</li>
                <li><strong>Textured Finish</strong>: Matte, glossy, or linen finish</li>
                <li><strong>Rounded Corners</strong>: Modern look and feel</li>
                <li><strong>Spot UV</strong>: Highlight logo or text with glossy coating</li>
                <li><strong>Foil Stamping</strong>: Gold or silver accents for premium feel</li>
              </ul>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">🎯 Networking Tips</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Always carry 10-15 cards wherever you go</li>
                  <li>Keep cards in pristine condition (use card holder)</li>
                  <li>Give and receive cards with both hands</li>
                  <li>Take a moment to look at received cards</li>
                  <li>Write notes on back after meetings</li>
                  <li>Follow up within 24-48 hours</li>
                  <li>Update cards when info changes</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital Business Cards</h3>
              <p className="text-gray-700 mb-4">
                Modern alternative to printed cards. Shareable via email, text, QR code, or NFC. Eco-friendly, always 
                up-to-date, trackable, and can include videos or links. Perfect complement to traditional cards, not 
                a complete replacement.
              </p>

              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Business Card</h3>
                <p className="mb-6">Make a lasting impression with premium designs</p>
                <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                  Start Designing →
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
