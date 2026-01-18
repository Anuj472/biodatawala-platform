import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online | Free Digital & Printable Cards - BioDatawala',
  description: 'Create stunning wedding invitation cards online for free. Choose from traditional, modern, and royal designs. Download as PDF or share digitally.',
  keywords: 'wedding invitation card maker, digital wedding card, shaadi card design, online invitation creator, free wedding templates',
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
                Design beautiful wedding invitations in minutes. From traditional Indian to modern elegant styles. 
                Perfect for digital sharing or printing.
              </p>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Create Invitation Free
              </Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Card Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from royal palace, floral, modern, and traditional designs. All templates are customizable and free to use.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {weddingInvitationTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Wedding Invitation Cards</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Traditional Indian Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Traditional Indian wedding cards feature rich colors, ornate borders, and religious symbols. Popular designs include 
                Ganesh motifs, peacock patterns, and mandala art. Colors like maroon, gold, red, and royal blue are commonly used. 
                These cards often include detailed ceremony schedules and family introductions.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Royal Palace Theme</h4>
              <p className="text-gray-700 mb-4">
                Inspired by palatial architecture, these cards feature luxurious gold foil effects, intricate borders, and regal designs. 
                Perfect for grand weddings with a royal feel. Often includes elements like crowns, arches, and elegant calligraphy.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Floral Garden Designs</h4>
              <p className="text-gray-700 mb-4">
                Romantic floral designs with watercolor flowers, botanical illustrations, and pastel color palettes. Ideal for outdoor 
                garden weddings, spring celebrations, and couples who love nature-inspired aesthetics.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Modern Minimalist Cards</h4>
              <p className="text-gray-700 mb-4">
                Clean lines, geometric shapes, bold typography, and minimal embellishments. Perfect for contemporary couples who prefer 
                sophistication and simplicity. Often uses black, white, gold, or soft pastels.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Digital Animated Invitations</h4>
              <p className="text-gray-700 mb-4">
                Video-based invitations with motion graphics, music, and animations. Eco-friendly and cost-effective. Easy to share via 
                WhatsApp, email, or social media. Includes couple photos, ceremony details, and location maps.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements of Wedding Invitations</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple's Names</strong>: Bride and groom names prominently displayed</li>
                <li><strong>Parents' Names</strong>: Including hosting parents' information</li>
                <li><strong>Wedding Date & Time</strong>: Clear ceremony schedule</li>
                <li><strong>Venue Details</strong>: Location with address and landmarks</li>
                <li><strong>RSVP Information</strong>: Contact details for confirmations</li>
                <li><strong>Dress Code</strong>: Optional attire suggestions</li>
                <li><strong>Multiple Events</strong>: Mehendi, Sangeet, Haldi timings</li>
                <li><strong>Map/Directions</strong>: QR code or location link</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Traditional Wedding Cards</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Digital Wedding Invitations</h4>
                <p className="text-gray-700 mb-2"><strong>Pros:</strong></p>
                <ul className="list-disc pl-6 mb-3 text-gray-700 text-sm space-y-1">
                  <li>Instant delivery via WhatsApp, email, social media</li>
                  <li>Eco-friendly and sustainable</li>
                  <li>Cost-effective - no printing or postage fees</li>
                  <li>Easy to update details or resend</li>
                  <li>Can include videos, music, and animations</li>
                  <li>Track who has viewed the invitation</li>
                </ul>
                <p className="text-gray-700 mb-2"><strong>Cons:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                  <li>Less formal than physical cards</li>
                  <li>May not suit traditional ceremonies</li>
                  <li>Requires guests to have smartphones</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Printed Wedding Cards</h4>
                <p className="text-gray-700 mb-2"><strong>Pros:</strong></p>
                <ul className="list-disc pl-6 mb-3 text-gray-700 text-sm space-y-1">
                  <li>Tangible keepsake for guests</li>
                  <li>Traditional and formal</li>
                  <li>Premium feel with quality paper</li>
                  <li>Can include embellishments (foil, embossing)</li>
                  <li>Suitable for all age groups</li>
                </ul>
                <p className="text-gray-700 mb-2"><strong>Cons:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                  <li>Higher cost for design, printing, delivery</li>
                  <li>Takes time to print and distribute</li>
                  <li>Difficult to make changes once printed</li>
                  <li>Environmental impact</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Card Wording Examples</h3>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <p className="font-bold mb-2">Traditional Hindu Wedding:</p>
                <p className="text-gray-700 italic text-sm">
                  "With the blessings of our families, we cordially invite you to the wedding ceremony of<br/>
                  <strong>Priya</strong><br/>
                  Daughter of Mr. & Mrs. Sharma<br/>
                  with<br/>
                  <strong>Rahul</strong><br/>
                  Son of Mr. & Mrs. Verma<br/>
                  On Sunday, March 15, 2026 at 7:00 PM<br/>
                  Venue: Grand Palace Banquet Hall, Delhi"
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <p className="font-bold mb-2">Modern Contemporary Style:</p>
                <p className="text-gray-700 italic text-sm">
                  "Together with their families<br/>
                  <strong>Anjali & Rohan</strong><br/>
                  invite you to celebrate their wedding<br/>
                  Saturday, April 20, 2026<br/>
                  6:00 PM onwards<br/>
                  The Leela Palace, Bangalore"
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">How to Create Your Wedding Card</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                <li><strong>Choose Your Template</strong>: Browse our collection and select a design that matches your wedding theme</li>
                <li><strong>Customize Details</strong>: Add names, dates, venue information, and personal message</li>
                <li><strong>Upload Photos</strong>: Include engagement or couple photos (optional)</li>
                <li><strong>Select Colors</strong>: Match your wedding color palette</li>
                <li><strong>Preview</strong>: Review all details carefully</li>
                <li><strong>Download</strong>: Save as PDF for printing or JPG for digital sharing</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tips for Perfect Wedding Invitations</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Send invitations 6-8 weeks before the wedding</li>
                <li>Proofread all details multiple times</li>
                <li>Include RSVP deadline (usually 2 weeks before wedding)</li>
                <li>Provide clear directions or Google Maps link</li>
                <li>Mention dress code if applicable</li>
                <li>Include contact number for queries</li>
                <li>Order extra printed cards for last-minute guests</li>
                <li>Keep digital backup of the design</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Wedding Invitation?</h3>
                <p className="mb-6">Design beautiful cards in minutes - No design skills needed!</p>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
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
