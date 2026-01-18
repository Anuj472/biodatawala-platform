import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online Free | Digital & Printable - BioDatawala',
  description: 'Create stunning wedding invitation cards online for free. 10+ beautiful templates for Hindu, Muslim, Christian weddings. Download as PDF or share digitally.',
  keywords: 'wedding invitation card maker, digital wedding card, shaadi card maker, online invitation creator, wedding card design, free wedding templates',
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
                Design stunning wedding invitation cards that make your special day memorable. 
                Choose from traditional to modern designs, customize instantly, and share digitally or print.
              </p>
              <Button size="lg">Create Wedding Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Invitation Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From royal palace designs to minimalist modern cards - find the perfect invitation for your wedding
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
                Wedding invitations are the first glimpse your guests get of your special day. They set the tone, theme, and expectations 
                for your celebration. Whether you're planning a traditional ceremony or a contemporary celebration, the right invitation 
                design speaks volumes about your style and the nature of your event.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Royal Palace Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Luxurious designs featuring gold foil effects, ornate borders, and regal motifs. Perfect for grand traditional weddings 
                with elaborate ceremonies. These cards exude opulence and are ideal for palace weddings or heritage venue celebrations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Floral Garden Invitations</h4>
              <p className="text-gray-700 mb-4">
                Romantic watercolor flowers, pastel color palettes, and botanical themes. Ideal for outdoor weddings, garden ceremonies, 
                and spring/summer celebrations. These cards bring a soft, romantic feel to your invitations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Modern Geometric Designs</h4>
              <p className="text-gray-700 mb-4">
                Contemporary shapes, bold colors, and minimalist aesthetics. Perfect for modern couples who prefer clean lines and 
                sophisticated designs. Great for urban weddings and contemporary venues.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Traditional Mandala Cards</h4>
              <p className="text-gray-700 mb-4">
                Intricate Indian patterns, cultural motifs, and vibrant colors. Excellent for Hindu weddings and traditional ceremonies. 
                Features elements like diyas, elephants, peacocks, and sacred symbols.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Digital Animated Invitations</h4>
              <p className="text-gray-700 mb-4">
                Video templates with motion graphics perfect for social media sharing. Includes music, animations, and interactive elements. 
                Eco-friendly option that saves on printing costs and is easily shareable via WhatsApp and email.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Names</strong>: Bride and groom's full names (and parents' names if traditional)</li>
                <li><strong>Date & Time</strong>: Wedding ceremony date, day, and exact timing</li>
                <li><strong>Venue</strong>: Complete address with landmarks</li>
                <li><strong>RSVP Details</strong>: Contact number or email for confirmations</li>
                <li><strong>Dress Code</strong>: If any specific attire is expected</li>
                <li><strong>Events</strong>: Mehendi, Sangeet, Reception timings if multi-day</li>
                <li><strong>Special Instructions</strong>: Parking, gifts, dietary preferences</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Invitations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">📱 Digital Invitations</h4>
                  <ul className="text-sm space-y-2">
                    <li>✅ Instant delivery via WhatsApp/Email</li>
                    <li>✅ Cost-effective (no printing costs)</li>
                    <li>✅ Eco-friendly option</li>
                    <li>✅ Easy to track RSVPs</li>
                    <li>✅ Can include videos/animations</li>
                    <li>✅ Last-minute changes possible</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">📜 Printed Invitations</h4>
                  <ul className="text-sm space-y-2">
                    <li>✅ Traditional and formal</li>
                    <li>✅ Physical keepsake</li>
                    <li>✅ Tangible luxury feel</li>
                    <li>✅ No tech barriers for elderly guests</li>
                    <li>✅ Premium paper options</li>
                    <li>✅ Perfect for formal events</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Invitation Wording Tips</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Traditional Hindu Wedding</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 italic text-gray-700">
                "With the blessings of our parents<br/>
                Mr. & Mrs. [Parent Names]<br/>
                request the honor of your presence at the wedding of<br/>
                [Bride Name] & [Groom Name]<br/>
                on [Date] at [Venue]"
              </div>

              <h4 className="text-xl font-bold mt-6 mb-3">Modern Casual Wedding</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 italic text-gray-700">
                "[Bride Name] and [Groom Name]<br/>
                invite you to celebrate their marriage<br/>
                Join us for love, laughter, and happily ever after<br/>
                [Date] | [Time] | [Venue]"
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Timeline for Wedding Invitations</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>6-8 months before</strong>: Send save-the-date cards</li>
                <li><strong>3-4 months before</strong>: Finalize guest list</li>
                <li><strong>2-3 months before</strong>: Order/create invitations</li>
                <li><strong>6-8 weeks before</strong>: Mail/send invitations</li>
                <li><strong>3-4 weeks before</strong>: RSVP deadline</li>
                <li><strong>1-2 weeks before</strong>: Follow up with non-responders</li>
              </ol>

              <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Wedding Invitation?</h3>
                <p className="mb-6">Start designing your dream wedding card today</p>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Create Your Invitation →
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
