import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Designer Online Free | Professional Visiting Card Maker - BioDatawala',
  description: 'Design professional business cards online for free. Modern, minimalist, corporate templates. Add logo, QR code. Download print-ready PDF instantly.',
  keywords: 'business card designer, visiting card maker online, professional business card, free business card design, corporate card template, QR code business card',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Create stunning business cards that make lasting impressions. Modern, minimalist, and corporate designs. Add logo, QR code, social media. Print-ready quality.
              </p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">Design Business Card Free</Button>
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
              <h2 className="text-3xl font-bold mb-6">Complete Business Card Design Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter</h3>
              <p className="text-gray-700 mb-4">
                In our digital age, physical business cards remain powerful networking tools. They create memorable first impressions, establish credibility, facilitate instant contact exchange, and work without internet or apps. A well-designed business card reflects your brand professionalism and attention to detail.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Business Card Elements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Full Name</strong>: Prominently displayed, easy to read</li>
                <li><strong>Job Title/Designation</strong>: Professional role</li>
                <li><strong>Company Name</strong>: Organization/business name</li>
                <li><strong>Logo</strong>: Company or personal brand logo</li>
                <li><strong>Phone Number</strong>: Primary contact number</li>
                <li><strong>Email Address</strong>: Professional email</li>
                <li><strong>Website</strong>: Company or portfolio URL</li>
                <li><strong>Physical Address</strong>: Office location (optional)</li>
                <li><strong>Social Media</strong>: LinkedIn, Twitter handles (optional)</li>
                <li><strong>QR Code</strong>: Digital contact or portfolio link</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Design Styles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Minimalist Professional</h4>
              <p className="text-gray-700 mb-4">
                Clean layout with plenty of white space, simple typography, subtle colors. Perfect for consultants, lawyers, financial advisors, and corporate professionals who want to convey sophistication and reliability.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Creative Colorful</h4>
              <p className="text-gray-700 mb-4">
                Vibrant colors, unique layouts, creative typography, bold designs. Ideal for designers, artists, marketing agencies, and creative professionals who want to showcase their artistic flair.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Corporate Traditional</h4>
              <p className="text-gray-700 mb-4">
                Formal design with company colors, conventional layout, professional fonts. Suitable for established corporations, banks, insurance companies, and traditional businesses.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Modern Tech-Forward</h4>
              <p className="text-gray-700 mb-4">
                QR codes, NFC chips, minimal text, digital-first approach. Perfect for tech startups, IT professionals, app developers, and innovation-focused businesses.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">📏 Standard Business Card Dimensions</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>US Standard</strong>: 3.5" × 2" (88.9mm × 50.8mm)</li>
                  <li><strong>European</strong>: 85mm × 55mm</li>
                  <li><strong>Japanese</strong>: 91mm × 55mm</li>
                  <li><strong>Square</strong>: 2.5" × 2.5" (63.5mm × 63.5mm)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Typography Best Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Name</strong>: 14-18pt, bold, serif or sans-serif</li>
                <li><strong>Title</strong>: 10-12pt, regular weight</li>
                <li><strong>Contact Info</strong>: 8-10pt, clean sans-serif</li>
                <li><strong>Maximum Fonts</strong>: Use 2-3 fonts maximum</li>
                <li><strong>Readability</strong>: Minimum 8pt font size</li>
                <li><strong>Contrast</strong>: Ensure text is clearly readable</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Psychology for Business Cards</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700"><strong className="text-blue-600">Blue</strong>: Trust, professionalism, corporate, technology</p>
                <p className="text-gray-700"><strong className="text-gray-900">Black</strong>: Elegance, luxury, sophistication, premium</p>
                <p className="text-gray-700"><strong className="text-green-600">Green</strong>: Growth, eco-friendly, health, finance</p>
                <p className="text-gray-700"><strong className="text-red-600">Red</strong>: Energy, passion, urgency, food industry</p>
                <p className="text-gray-700"><strong className="text-purple-600">Purple</strong>: Creativity, wisdom, spirituality, luxury</p>
                <p className="text-gray-700"><strong className="text-orange-600">Orange</strong>: Enthusiasm, creativity, friendliness</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Front vs Back Design</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">Front Side</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                    <li>Logo and company name</li>
                    <li>Your name (prominent)</li>
                    <li>Job title</li>
                    <li>Primary phone and email</li>
                    <li>Keep it clean and focused</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">Back Side</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                    <li>Additional contact details</li>
                    <li>Social media handles</li>
                    <li>QR code with vCard</li>
                    <li>Tagline or services</li>
                    <li>Or leave blank for notes</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Paper and Printing Options</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Standard</strong>: 14pt or 16pt cardstock (economical)</li>
                <li><strong>Premium</strong>: 18pt or 20pt thick cardstock</li>
                <li><strong>Luxury</strong>: Cotton paper, silk laminate, suede finish</li>
                <li><strong>Special Finishes</strong>: Matte, glossy, spot UV, embossed</li>
                <li><strong>Unique Materials</strong>: Metal, wood, plastic, transparent</li>
                <li><strong>Die-Cut Shapes</strong>: Rounded corners, custom shapes</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">QR Code Best Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Link to digital business card (vCard)</li>
                <li>Portfolio or website URL</li>
                <li>LinkedIn profile</li>
                <li>Size: at least 0.8" × 0.8" (2cm × 2cm)</li>
                <li>Include call-to-action: "Scan for contact info"</li>
                <li>Test QR code before printing</li>
                <li>Ensure sufficient contrast for scanning</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>✗ Too much information (cluttered design)</li>
                <li>✗ Fonts too small to read</li>
                <li>✗ Low-quality logo or images</li>
                <li>✗ Poor color contrast</li>
                <li>✗ Spelling errors or outdated information</li>
                <li>✗ No white space (cramped layout)</li>
                <li>✗ Unprofessional email addresses</li>
                <li>✗ Forgetting bleed area in design</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital Business Cards</h3>
              <p className="text-gray-700 mb-4">
                Modern alternative to physical cards: share via email, text, AirDrop, NFC tap. Benefits include always up-to-date contact info, eco-friendly, multimedia content (videos, links), analytics tracking, and no printing costs. Create both physical and digital versions for maximum reach.
              </p>

              <div className="bg-gradient-to-r from-slate-700 to-gray-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Design Your Professional Business Card</h3>
                <p className="mb-6">Stand out from the crowd with a memorable business card</p>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
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
