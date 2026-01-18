import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Designer Online Free | Professional Card Maker - BioDatawala',
  description: 'Design professional business cards online. 10+ modern templates with QR codes. Free to customize, instant download as PDF for printing.',
  keywords: 'business card design, professional business card, visiting card maker, card designer online, custom business cards, QR code business card',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Create professional business cards that make a lasting impression. Modern templates with QR codes, 
                social media icons, and premium designs. Perfect for entrepreneurs and professionals.
              </p>
              <Button size="lg">Design Business Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Business Card Templates</h2>
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
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite digital networking, business cards remain essential for professional networking. They provide 
                an instant, tangible way to share contact information and make a memorable first impression. A well-designed 
                business card conveys professionalism and attention to detail.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information on Business Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Full Name</strong>: Your complete professional name</li>
                <li><strong>Job Title</strong>: Clear, concise position description</li>
                <li><strong>Company Name</strong>: Business or organization name</li>
                <li><strong>Logo</strong>: Company logo for brand recognition</li>
                <li><strong>Phone Number</strong>: Primary contact number</li>
                <li><strong>Email Address</strong>: Professional email</li>
                <li><strong>Website</strong>: Company website URL</li>
                <li><strong>Physical Address</strong>: Office location (optional)</li>
                <li><strong>Social Media</strong>: LinkedIn, Instagram handles</li>
                <li><strong>QR Code</strong>: Link to digital portfolio or website</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Design Principles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Keep It Simple</h4>
              <p className="text-gray-700 mb-4">
                Avoid cluttering your card with too much information. White space is your friend - it makes the card 
                easier to read and more professional.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Readable Typography</h4>
              <p className="text-gray-700 mb-4">
                Use fonts that are easy to read at small sizes. Avoid fancy scripts for contact information. 
                Recommended fonts: Helvetica, Arial, Futura, or professional sans-serif fonts.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Brand Consistency</h4>
              <p className="text-gray-700 mb-4">
                Match your business card colors, fonts, and style to your company's branding guidelines. Consistency 
                builds brand recognition.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. High-Quality Materials</h4>
              <p className="text-gray-700 mb-4">
                Print on quality card stock (minimum 300 GSM). Consider premium finishes like matte, glossy, or 
                textured paper for added impact.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Modern Business Card Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✓ QR Codes</h4>
                  <p className="text-sm text-gray-700">Link to digital portfolio or LinkedIn profile</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✓ Vertical Orientation</h4>
                  <p className="text-sm text-gray-700">Stand out from traditional horizontal cards</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✓ Minimalist Design</h4>
                  <p className="text-sm text-gray-700">Clean, simple layouts with plenty of white space</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✓ Two-Sided Cards</h4>
                  <p className="text-sm text-gray-700">Utilize both sides for more information</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Business Card Size</h3>
              <p className="text-gray-700 mb-4">
                The standard business card size varies by region:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>India & US</strong>: 3.5" × 2" (89mm × 51mm)</li>
                <li><strong>Europe</strong>: 85mm × 55mm</li>
                <li><strong>Japan</strong>: 91mm × 55mm</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Psychology in Business Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Blue</strong>: Trust, professionalism, reliability (banking, corporate)</li>
                <li><strong>Black</strong>: Luxury, sophistication, elegance (premium brands)</li>
                <li><strong>Green</strong>: Growth, nature, health (environmental, wellness)</li>
                <li><strong>Red</strong>: Energy, passion, urgency (food, entertainment)</li>
                <li><strong>Purple</strong>: Creativity, wisdom, royalty (creative industries)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Using too many fonts (stick to 2-3 maximum)</li>
                <li>Poor image quality or pixelated logos</li>
                <li>Wrong contact information</li>
                <li>Overcrowding with too much text</li>
                <li>Using unprofessional email addresses</li>
                <li>Ignoring the back side of the card</li>
                <li>Not proofreading before printing</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Professional Business Card</h3>
                <p className="mb-6">Make a lasting impression with a stunning design</p>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Start Designing Now →
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
