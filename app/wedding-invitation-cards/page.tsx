import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online Free | Digital Wedding Cards - BioDatawala',
  description: 'Create stunning wedding invitation cards online for free. 10+ beautiful templates for Indian weddings. Download as PDF or share digitally.',
  keywords: 'wedding invitation card maker, digital wedding card, shaadi card online, wedding card design, Indian wedding invitation',
};

export default function WeddingInvitationCards() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Wedding Invitation Card Maker
              </h1>
              <p className="text-xl mb-6">
                Design beautiful wedding invitation cards that reflect your love story. From traditional to modern, 
                find the perfect design for your special day.
              </p>
              <Button size="lg">Create Invitation Free</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Card Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from elegant, traditional, and modern designs. Customize colors, text, and add your photos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {weddingInvitationTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Wedding Invitation Cards</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Digital Wedding Invitations?</h3>
              <p className="text-gray-700 mb-4">
                Digital wedding invitations are eco-friendly, cost-effective, and can be sent instantly to guests worldwide. 
                They offer flexibility in design, easy RSVP tracking, and can be shared via WhatsApp, email, or social media. 
                Plus, you can update details easily if plans change.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Designs</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Royal Palace Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Luxurious designs with gold foil effects, ornate borders, and regal motifs. Perfect for grand celebrations 
                and destination weddings. Features intricate patterns inspired by palace architecture.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Floral Garden Invitations</h4>
              <p className="text-gray-700 mb-4">
                Romantic watercolor flowers, pastel palettes, and botanical elements. Ideal for garden weddings, 
                spring ceremonies, and couples who love nature. Soft, elegant, and timeless.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Modern Minimalist Cards</h4>
              <p className="text-gray-700 mb-4">
                Contemporary geometric shapes, bold typography, and clean layouts. Perfect for modern urban weddings. 
                Features minimal color schemes with maximum impact.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Traditional Indian Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Vibrant colors, mandala patterns, cultural motifs (elephants, peacocks, lotus). Includes traditional 
                elements like Ganesh blessings, Sanskrit shlokas, and regional designs for different communities.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple's Names</strong>: Bride and groom names prominently displayed</li>
                <li><strong>Date and Time</strong>: Complete wedding schedule (multiple events if applicable)</li>
                <li><strong>Venue Details</strong>: Full address with Google Maps link</li>
                <li><strong>Parent's Names</strong>: Traditional inclusion of family names</li>
                <li><strong>Dress Code</strong>: Help guests prepare appropriately</li>
                <li><strong>RSVP Details</strong>: Contact number or email for confirmations</li>
                <li><strong>Special Instructions</strong>: Parking, accommodation, gift preferences</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Invitation Wording Examples</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Traditional Indian Format:</h4>
                <p className="text-gray-700 italic">
                  "With the blessings of our families, we joyfully invite you to celebrate the wedding of<br/>
                  [Bride's Name]<br/>
                  daughter of Mr. & Mrs. [Parents' Names]<br/>
                  with<br/>
                  [Groom's Name]<br/>
                  son of Mr. & Mrs. [Parents' Names]<br/>
                  on [Date] at [Venue]"
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Modern Casual Format:</h4>
                <p className="text-gray-700 italic">
                  "[Bride] & [Groom]<br/>
                  are getting married!<br/>
                  Please join us to celebrate our love<br/>
                  [Date] | [Time] | [Venue]<br/>
                  Reception to follow"
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Pre-Wedding Event Invitations</h3>
              <p className="text-gray-700 mb-4">
                Don't forget to create invitations for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Engagement Ceremony</strong>: Ring exchange celebration</li>
                <li><strong>Mehendi/Henna Night</strong>: Traditional henna application party</li>
                <li><strong>Sangeet</strong>: Music and dance night</li>
                <li><strong>Haldi Ceremony</strong>: Turmeric ritual</li>
                <li><strong>Bachelor/Bachelorette Party</strong>: Pre-wedding celebrations</li>
                <li><strong>Reception</strong>: Post-wedding party</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tips for Perfect Wedding Invitations</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Send invitations 6-8 weeks before the wedding</li>
                <li>Save-the-dates can go out 3-6 months in advance</li>
                <li>Proofread multiple times - names, dates, venues</li>
                <li>Include a map or directions for the venue</li>
                <li>Consider language preferences of guests</li>
                <li>Test digital invitations on different devices</li>
                <li>Keep design consistent with wedding theme</li>
                <li>Include accommodation suggestions for out-of-town guests</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Invitations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Digital Invitations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Instant delivery</li>
                    <li>✅ Cost-effective</li>
                    <li>✅ Eco-friendly</li>
                    <li>✅ Easy updates</li>
                    <li>✅ RSVP tracking</li>
                    <li>✅ Multimedia options</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Printed Invitations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Tangible keepsake</li>
                    <li>✅ Traditional elegance</li>
                    <li>✅ No tech required</li>
                    <li>✅ Premium feel</li>
                    <li>✅ Cultural preference</li>
                    <li>✅ Display option</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Creating Your Wedding Invitation</h3>
                <p className="mb-6">Beautiful designs, easy customization, instant download</p>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Create Now →
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
