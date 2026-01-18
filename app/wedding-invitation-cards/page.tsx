import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online Free | Digital & Printable Cards - BioDatawala',
  description: 'Create stunning wedding invitation cards online. 10+ professional templates for Indian weddings. Free to customize, instant download as PDF/JPG.',
  keywords: 'wedding invitation card, digital wedding card, shaadi card maker, online invitation creator, wedding card design, Indian wedding invitation',
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
                Design beautiful wedding invitation cards for your special day. Choose from traditional to modern designs. 
                Perfect for Indian weddings - Hindu, Muslim, Christian ceremonies.
              </p>
              <Button size="lg">Create Wedding Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Card Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From royal palace designs to modern minimalist cards - find the perfect invitation for your wedding
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
                Digital wedding invitation cards have become increasingly popular in modern weddings. They're eco-friendly, 
                cost-effective, and can be shared instantly via WhatsApp, email, or social media. With BioDatawala's 
                wedding card maker, you can create stunning digital invitations in minutes without any design skills.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Traditional Indian Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Our traditional templates feature ornate borders, Ganesh motifs, peacock designs, and rich colors like 
                maroon, gold, and red. Perfect for traditional Hindu weddings, these cards include space for multiple 
                ceremony details like Mehendi, Sangeet, and Haldi.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Royal Palace Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Luxurious designs inspired by royal Rajasthani palaces. These feature gold foil effects, elephant motifs, 
                intricate patterns, and premium aesthetics for a grand wedding celebration.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Modern Minimalist Cards</h4>
              <p className="text-gray-700 mb-4">
                Clean, contemporary designs with geometric shapes, pastel colors, and modern typography. Ideal for 
                destination weddings and couples preferring a minimalist aesthetic.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Floral Garden Invitations</h4>
              <p className="text-gray-700 mb-4">
                Romantic watercolor flowers, botanical elements, and soft pastel palettes. Perfect for outdoor weddings, 
                garden ceremonies, and spring celebrations.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple's Names</strong>: Bride and groom's full names</li>
                <li><strong>Date & Time</strong>: Wedding ceremony date and timing</li>
                <li><strong>Venue Details</strong>: Complete address with landmarks</li>
                <li><strong>Family Names</strong>: Parents and family hosting the wedding</li>
                <li><strong>RSVP Information</strong>: Contact details for confirmation</li>
                <li><strong>Dress Code</strong>: Optional, if specific attire required</li>
                <li><strong>Multiple Events</strong>: Details for Mehendi, Sangeet, reception</li>
                <li><strong>Accommodation</strong>: Hotel information for out-of-town guests</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Card Wording Tips</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="font-bold mb-3">Traditional Hindu Wedding Wording:</p>
                <p className="text-gray-700 italic mb-4">
                  "With the blessings of our families, we [Bride's Name] daughter of [Parents' Names] and 
                  [Groom's Name] son of [Parents' Names] request the honor of your presence at our wedding ceremony..."
                </p>
                
                <p className="font-bold mb-3 mt-6">Modern Wedding Wording:</p>
                <p className="text-gray-700 italic">
                  "Together with our families, [Bride's Name] & [Groom's Name] joyfully invite you to celebrate 
                  our wedding..."
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Invitations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Digital Advantages</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Instant delivery via WhatsApp</li>
                    <li>✓ Eco-friendly, no paper waste</li>
                    <li>✓ Cost-effective, save printing costs</li>
                    <li>✓ Easy to update details</li>
                    <li>✓ Can include video/animation</li>
                    <li>✓ Track who viewed invitation</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Printed Advantages</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Traditional and formal</li>
                    <li>✓ Physical keepsake</li>
                    <li>✓ Appreciated by elders</li>
                    <li>✓ Premium look and feel</li>
                    <li>✓ No technology required</li>
                    <li>✓ Cultural significance</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Timeline for Sending Invitations</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>6-8 Months Before</strong>: Send save the date cards</li>
                <li><strong>8-10 Weeks Before</strong>: Mail printed invitations</li>
                <li><strong>3-4 Weeks Before</strong>: Send digital reminders</li>
                <li><strong>1 Week Before</strong>: Final confirmation calls</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Card Etiquette</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Address envelopes properly with correct titles</li>
                <li>Include plus-one information clearly</li>
                <li>Mention if children are invited</li>
                <li>Provide clear directions and parking info</li>
                <li>Set RSVP deadline 2-3 weeks before wedding</li>
                <li>Include registry information separately (if applicable)</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Wedding Invitation?</h3>
                <p className="mb-6">Start designing your dream wedding card today</p>
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
