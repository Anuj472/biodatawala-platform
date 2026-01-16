import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online Free | Indian Wedding Cards - BioDatawala',
  description: 'Create stunning wedding invitation cards online for free. Digital and printable designs. Royal, floral, traditional Indian wedding card templates. Download as PDF instantly.',
  keywords: 'wedding invitation card maker, shaadi card online, digital wedding card, Indian wedding invitation, free wedding card design, marriage invitation template',
};

export default function WeddingInvitationCards() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Wedding Invitation Card Maker
              </h1>
              <p className="text-xl mb-6">
                Create beautiful wedding invitation cards for your special day. Choose from royal, floral, traditional, and modern designs. Free and premium options available.
              </p>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">Create Wedding Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Card Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From traditional to contemporary, find the perfect invitation card that reflects your wedding theme
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {weddingInvitationTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Wedding Invitation Cards</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Wedding Invitations Matter</h3>
              <p className="text-gray-700 mb-4">
                Wedding invitation cards are the first glimpse your guests get of your special day. They set the tone, theme, and formality level of your wedding celebration. A well-designed invitation creates excitement and gives guests important details about your big day.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Royal Palace Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Luxurious designs with gold foil effects, ornate borders, and regal motifs. Perfect for grand destination weddings and palace celebrations. Features intricate patterns inspired by Indian royalty.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Floral Garden Invitations</h4>
              <p className="text-gray-700 mb-4">
                Romantic watercolor flowers, pastel color palettes, and delicate botanical elements. Ideal for garden weddings, spring ceremonies, and couples who love nature-inspired themes.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Modern Geometric Cards</h4>
              <p className="text-gray-700 mb-4">
                Contemporary shapes, bold colors, and minimalist designs. Perfect for urban weddings, modern couples, and those seeking a sleek, sophisticated look.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Traditional Mandala Design</h4>
              <p className="text-gray-700 mb-4">
                Intricate mandala patterns, cultural motifs, and vibrant Indian colors. Celebrates traditional Hindu weddings with authentic designs that honor cultural heritage.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printable Wedding Cards</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-3">Digital Wedding Invitations</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Eco-friendly and cost-effective</li>
                  <li>Easy to share via WhatsApp, email, social media</li>
                  <li>Can include animation and video</li>
                  <li>Instant delivery to guests worldwide</li>
                  <li>Easy to make last-minute changes</li>
                </ul>
                
                <h4 className="text-lg font-bold mb-3">Printable Wedding Cards</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Traditional and tangible keepsake</li>
                  <li>Premium feel with quality paper</li>
                  <li>Suitable for formal occasions</li>
                  <li>Can include embellishments (embossing, foil)</li>
                  <li>Preferred by older generation guests</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple's Names</strong>: Bride and groom's full names</li>
                <li><strong>Parents' Names</strong>: Traditionally included in Indian weddings</li>
                <li><strong>Wedding Date and Time</strong>: Clearly mention ceremony timing</li>
                <li><strong>Venue Details</strong>: Complete address with landmarks</li>
                <li><strong>RSVP Information</strong>: Contact number and deadline</li>
                <li><strong>Dress Code</strong>: If specific theme or colors</li>
                <li><strong>Multiple Events</strong>: Mehendi, Sangeet, Reception timings</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Card Wording Examples</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-bold mb-2">Traditional Format:</p>
                <p className="text-gray-700 italic mb-4">
                  "With the blessings of our families, we [Bride's Name] & [Groom's Name] request the honor of your presence at our wedding ceremony..."
                </p>
                
                <p className="font-bold mb-2">Modern Format:</p>
                <p className="text-gray-700 italic mb-4">
                  "Together with our families, [Bride] and [Groom] invite you to celebrate our love and the beginning of our forever..."
                </p>
                
                <p className="font-bold mb-2">Casual Format:</p>
                <p className="text-gray-700 italic">
                  "Join us for food, fun, and forever! [Names] are getting married and we want you there!"
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Tips for Perfect Wedding Cards</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Choose colors that match your wedding theme</li>
                <li>Select readable fonts - decorative for names, simple for details</li>
                <li>Include a beautiful couple photo (optional)</li>
                <li>Maintain proper hierarchy of information</li>
                <li>Leave adequate white space</li>
                <li>Proofread multiple times before finalizing</li>
                <li>Test print quality before bulk printing</li>
                <li>Order 10-15% extra cards for last-minute additions</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">When to Send Wedding Invitations</h3>
              <p className="text-gray-700 mb-4">
                <strong>Destination Weddings</strong>: 3-4 months in advance<br/>
                <strong>Local Weddings</strong>: 6-8 weeks before the wedding<br/>
                <strong>Save the Date Cards</strong>: 6-8 months prior<br/>
                <strong>RSVP Deadline</strong>: 2-3 weeks before the wedding
              </p>

              <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Creating Your Wedding Invitation</h3>
                <p className="mb-6">Beautiful designs, easy customization, instant download</p>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Create Wedding Card Now →
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
