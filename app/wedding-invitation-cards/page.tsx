import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online Free | Digital Wedding Cards - BioDatawala',
  description: 'Create stunning wedding invitation cards online. 10+ beautiful templates for Indian weddings. Free to customize, instant download as PDF/JPG.',
  keywords: 'wedding invitation card, digital wedding card, shaadi card maker, online invitation creator, wedding card design, Indian wedding invitation',
};

export default function WeddingInvitationCards() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Wedding Invitation Card Maker
              </h1>
              <p className="text-xl mb-6">
                Design stunning wedding invitation cards for your special day. From traditional to modern designs, 
                create beautiful invitations in minutes. Free templates, easy customization, instant download.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Create Invitation Free
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pink-600">
                  Browse Templates
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Invitation Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from our curated collection of wedding invitation designs perfect for Indian weddings
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {weddingInvitationTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Wedding Invitation Cards</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Digital Wedding Invitations?</h3>
              <p className="text-gray-700 mb-4">
                Digital wedding invitations are becoming increasingly popular for modern Indian weddings. They offer:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Cost-Effective</strong>: Save thousands on printing and delivery costs</li>
                <li><strong>Eco-Friendly</strong>: Reduce paper waste and environmental impact</li>
                <li><strong>Instant Delivery</strong>: Share via WhatsApp, Email, or social media instantly</li>
                <li><strong>Easy Updates</strong>: Make changes to date, venue, or details anytime</li>
                <li><strong>Track Responses</strong>: Monitor who viewed and responded to your invitation</li>
                <li><strong>Unlimited Copies</strong>: Send to as many guests as needed without extra cost</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Designs</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Royal Palace Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Luxurious designs with gold foil effects, ornate borders, and regal motifs. Perfect for grand destination 
                weddings or palace venues. Features intricate patterns, traditional symbols, and premium color palettes.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Floral Garden Invitations</h4>
              <p className="text-gray-700 mb-4">
                Romantic watercolor flowers, pastel color palettes, and nature-inspired designs. Ideal for garden weddings, 
                outdoor venues, or spring/summer ceremonies. Features botanical illustrations and soft, elegant typography.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Modern Geometric Cards</h4>
              <p className="text-gray-700 mb-4">
                Contemporary designs with bold geometric shapes, minimalist layouts, and modern color schemes. Perfect for 
                urban couples who prefer clean, sophisticated aesthetics. Features abstract patterns and contemporary fonts.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Traditional Mandala Designs</h4>
              <p className="text-gray-700 mb-4">
                Intricate mandala patterns, cultural motifs, and vibrant colors representing Indian heritage. Suitable for 
                traditional ceremonies with rich cultural elements. Features rangoli-inspired designs and auspicious symbols.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple's Names</strong>: Bride and groom's full names</li>
                <li><strong>Parents' Names</strong>: Optional but traditional in Indian weddings</li>
                <li><strong>Wedding Date & Time</strong>: Clearly mention ceremony timing</li>
                <li><strong>Venue Details</strong>: Full address with landmarks</li>
                <li><strong>RSVP Information</strong>: Contact details for confirmation</li>
                <li><strong>Dress Code</strong>: If applicable (optional)</li>
                <li><strong>Event Schedule</strong>: For multi-day celebrations</li>
                <li><strong>Map Link</strong>: Google Maps location for easy navigation</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Invitation Etiquette</h3>
              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">Timing Guidelines</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Save the Date</strong>: Send 6-8 months before wedding</li>
                  <li>• <strong>Formal Invitations</strong>: Send 6-8 weeks before wedding</li>
                  <li>• <strong>Digital Invitations</strong>: Send 4-6 weeks before wedding</li>
                  <li>• <strong>RSVP Deadline</strong>: Set 2-3 weeks before wedding date</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Popular Wedding Card Trends 2026</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Video Invitations</strong>: Animated cards with music and photos</li>
                <li><strong>Minimalist Designs</strong>: Clean, simple, elegant layouts</li>
                <li><strong>Personalized QR Codes</strong>: Link to wedding website or RSVP form</li>
                <li><strong>Sustainable Materials</strong>: Eco-friendly paper and printing</li>
                <li><strong>Illustrated Portraits</strong>: Cartoon or artistic couple illustrations</li>
                <li><strong>Regional Language Mix</strong>: Bilingual invitations (English + Hindi/Regional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Personalize Your Wedding Card</h3>
              <p className="text-gray-700 mb-4">
                With BioDatawala's easy-to-use editor, you can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Change colors to match your wedding theme</li>
                <li>Upload couple photos or engagement pictures</li>
                <li>Modify text styles and fonts</li>
                <li>Add custom messages or quotes</li>
                <li>Include wedding hashtags</li>
                <li>Adjust layout and spacing</li>
                <li>Add venue map or directions</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Wedding Invitation?</h3>
                <p className="mb-6">Beautiful designs, easy customization, instant download</p>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Start Creating Free →
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
