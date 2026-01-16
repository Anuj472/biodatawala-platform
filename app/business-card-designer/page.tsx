import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { businessCardTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Business Card Maker Online | Professional Visiting Card Designer - BioDatawala',
  description: 'Create professional business cards online. Modern, minimalist, creative designs. Free templates, instant download, print-ready files.',
  keywords: 'business card maker, visiting card design, professional business card, custom business card online, QR code business card',
};

export default function BusinessCardDesigner() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Business Card Designer
              </h1>
              <p className="text-xl mb-6">
                Make a lasting first impression with professionally designed business cards. 
                Modern templates, customizable designs, and instant print-ready downloads.
              </p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">Design Your Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Business Card Templates</h2>
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
              <h2 className="text-3xl font-bold mb-6">The Complete Business Card Design Guide</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Business Cards Still Matter in 2026</h3>
              <p className="text-gray-700 mb-4">
                Despite digital networking, business cards remain essential for professional interactions. They provide instant 
                credibility, are tangible reminders of meetings, work without internet or battery, and facilitate quick information 
                exchange. A well-designed card creates a lasting impression and demonstrates professionalism.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information on Business Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Full Name</strong>: Your complete professional name</li>
                <li><strong>Job Title/Designation</strong>: Your role or profession</li>
                <li><strong>Company Name</strong>: Organization you represent</li>
                <li><strong>Phone Number</strong>: Direct contact number (mobile preferred)</li>
                <li><strong>Email Address</strong>: Professional email</li>
                <li><strong>Website</strong>: Company or personal website URL</li>
                <li><strong>Physical Address</strong>: Office location (optional)</li>
                <li><strong>Social Media</strong>: LinkedIn, Twitter handles (selective)</li>
                <li><strong>Logo</strong>: Company or personal brand logo</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Business Card Design Styles</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Minimalist & Modern</h4>
              <p className="text-gray-700 mb-4">
                Clean lines, ample white space, simple typography. Perfect for tech professionals, designers, consultants. 
                Uses 1-2 colors maximum, focuses on typography and layout. Conveys sophistication and contemporary style.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Creative & Colorful</h4>
              <p className="text-gray-700 mb-4">
                Bold colors, unique layouts, graphic elements. Ideal for creative industries like marketing, design, entertainment. 
                Showcases personality and creativity. Uses vibrant color schemes and custom illustrations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Corporate & Traditional</h4>
              <p className="text-gray-700 mb-4">
                Professional, formal, conservative design. Suitable for law firms, financial services, corporate executives. 
                Uses classic fonts, subdued colors (navy, black, burgundy), and structured layouts.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Photo Business Cards</h4>
              <p className="text-gray-700 mb-4">
                Include professional headshot. Great for real estate agents, consultants, coaches, and service professionals. 
                Helps recipients remember you. Photo should be high-quality and professional.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Business Card Sizes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>India Standard</strong>: 90mm × 50mm (most common in India)</li>
                <li><strong>US/Canada Standard</strong>: 3.5" × 2" (88.9mm × 50.8mm)</li>
                <li><strong>European Standard</strong>: 85mm × 55mm</li>
                <li><strong>Square Cards</strong>: 2.5" × 2.5" (unique, memorable)</li>
                <li><strong>Mini Cards</strong>: 2.75" × 1.1" (compact, modern)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Keep It Simple</strong>: Less is more - avoid clutter</li>
                <li><strong>Readable Fonts</strong>: Minimum 8pt font size, max 3 fonts</li>
                <li><strong>High Contrast</strong>: Ensure text is easily readable</li>
                <li><strong>Bleed Area</strong>: Design extends 3mm beyond edge</li>
                <li><strong>Safe Zone</strong>: Keep important info 3mm from edges</li>
                <li><strong>Color Mode</strong>: Use CMYK for printing (not RGB)</li>
                <li><strong>Resolution</strong>: 300 DPI minimum for quality printing</li>
                <li><strong>Both Sides</strong>: Utilize back for additional info or design</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Modern Business Card Features</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Digital Integration Options:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>QR Code</strong>: Link to digital portfolio, LinkedIn, or vCard</li>
                  <li><strong>NFC Chip</strong>: Tap-to-share contact information</li>
                  <li><strong>AR Integration</strong>: Augmented reality experience</li>
                  <li><strong>Social Media Icons</strong>: Direct links to profiles</li>
                  <li><strong>Portfolio Link</strong>: QR code to work samples</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Paper & Finishing Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold mb-3">Paper Types</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li><strong>Matte</strong>: Non-glossy, easy to write on</li>
                    <li><strong>Glossy</strong>: Shiny finish, vibrant colors</li>
                    <li><strong>Uncoated</strong>: Natural feel, eco-friendly</li>
                    <li><strong>Textured</strong>: Linen, felt, cotton textures</li>
                    <li><strong>Plastic/PVC</strong>: Durable, waterproof</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Special Finishes</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li><strong>Foil Stamping</strong>: Gold, silver, or colored foil</li>
                    <li><strong>Embossing</strong>: Raised design elements</li>
                    <li><strong>Spot UV</strong>: Glossy coating on specific areas</li>
                    <li><strong>Die-Cut</strong>: Custom shapes and cutouts</li>
                    <li><strong>Edge Painting</strong>: Colored card edges</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Color Psychology for Business Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Blue</strong>: Trust, professionalism, stability (most popular)</li>
                <li><strong>Black</strong>: Sophistication, luxury, authority</li>
                <li><strong>Red</strong>: Energy, passion, urgency</li>
                <li><strong>Green</strong>: Growth, health, eco-friendly</li>
                <li><strong>Orange</strong>: Creativity, friendliness, confidence</li>
                <li><strong>Purple</strong>: Luxury, creativity, wisdom</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Too much information cramped together</li>
                <li>Using too many fonts or colors</li>
                <li>Poor quality images or logo</li>
                <li>Illegible font sizes or low contrast</li>
                <li>Forgetting contact information</li>
                <li>Not proofreading for errors</li>
                <li>Using low-resolution graphics</li>
                <li>Cheap paper quality undermining design</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Tips</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Order samples before bulk printing</li>
                <li>Print in quantities of 250-500 for cost efficiency</li>
                <li>Choose reputable printing services</li>
                <li>Verify colors match your design (CMYK vs RGB)</li>
                <li>Check bleed and safe zones in final file</li>
                <li>Consider premium paper for better impression</li>
                <li>Allow 5-7 business days for quality printing</li>
              </ol>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Design Your Professional Business Card</h3>
                <p className="mb-6">Stand out from the crowd with a memorable card</p>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
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
