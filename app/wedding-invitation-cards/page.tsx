import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online | Digital & Printable Designs - BioDatawala',
  description: 'Create stunning wedding invitation cards online. Choose from royal, modern, floral designs. Free templates, instant download as PDF/JPG.',
  keywords: 'wedding invitation card maker, digital wedding card, shaadi card design, online invitation creator, printable wedding cards',
};

export default function WeddingInvitationCards() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Wedding Invitation Card Maker
              </h1>
              <p className="text-xl mb-6">
                Create beautiful wedding invitations that wow your guests. From traditional to modern designs, 
                customize everything and download instantly.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">Create Invitation Free</Button>
                <Button variant="outline" size="lg" className="bg-white bg-opacity-20 border-white hover:bg-opacity-30">
                  View Templates
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
              From royal palace themes to modern minimalist designs - find the perfect invitation for your special day
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
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitations</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Traditional Indian Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Traditional wedding invitations feature ornate designs, Ganesh motifs, religious symbols, and rich colors like 
                maroon, gold, and red. Perfect for formal Hindu, Muslim, and Sikh weddings. Include ceremony details, 
                venue information, and family names prominently.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Modern & Minimalist Invitations</h4>
              <p className="text-gray-700 mb-4">
                Clean lines, pastel colors, and contemporary typography define modern wedding invitations. Ideal for urban 
                couples who prefer understated elegance. Features geometric patterns, watercolor effects, and simple layouts.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Royal & Luxury Designs</h4>
              <p className="text-gray-700 mb-4">
                Gold foil effects, intricate borders, palace-inspired graphics create luxurious wedding invitations. 
                Perfect for grand celebrations. Include elaborate details, premium finishes, and sophisticated color palettes.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Digital Wedding Invitations</h4>
              <p className="text-gray-700 mb-4">
                Eco-friendly and cost-effective, digital invitations can be shared via WhatsApp, email, or social media. 
                Include video elements, animations, and interactive RSVP features. Perfect for destination weddings.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements of Wedding Invitations</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple's Names</strong>: Bride and groom names prominently displayed</li>
                <li><strong>Date & Time</strong>: Wedding date, time of ceremonies</li>
                <li><strong>Venue Details</strong>: Complete address with landmarks</li>
                <li><strong>Family Names</strong>: Parents' names for traditional invites</li>
                <li><strong>Ceremony Details</strong>: Mehendi, Sangeet, Wedding, Reception timings</li>
                <li><strong>RSVP Information</strong>: Contact details for confirmation</li>
                <li><strong>Dress Code</strong>: If applicable (optional)</li>
                <li><strong>Map/Directions</strong>: For easy location (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Invitation Wording Examples</h3>
              
              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Traditional Hindu Wedding</h4>
                <p className="text-gray-700 italic">
                  "With the blessings of Lord Ganesh and our families, we request the honor of your presence at the wedding 
                  ceremony of [Bride Name] & [Groom Name]..."
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Modern Wedding</h4>
                <p className="text-gray-700 italic">
                  "Two hearts, one love. [Bride] and [Groom] invite you to celebrate their wedding on [Date] at [Venue]..."
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Invitations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-600">Digital Advantages</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Instant delivery via WhatsApp/Email</li>
                    <li>Cost-effective (no printing costs)</li>
                    <li>Easy to track RSVPs</li>
                    <li>Can include videos/animations</li>
                    <li>Eco-friendly option</li>
                    <li>Last-minute updates possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-purple-600">Printed Advantages</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Traditional and formal</li>
                    <li>Physical keepsake</li>
                    <li>Elegant presentation</li>
                    <li>Suitable for all age groups</li>
                    <li>No internet required</li>
                    <li>Premium feel with textures</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Tips for Perfect Invitations</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Match Your Wedding Theme</strong>: Invitation should reflect overall wedding aesthetic</li>
                <li><strong>Choose Readable Fonts</strong>: Decorative fonts for names, clear fonts for details</li>
                <li><strong>Color Coordination</strong>: Use 2-3 complementary colors maximum</li>
                <li><strong>Quality Images</strong>: Use high-resolution couple photos if including</li>
                <li><strong>White Space</strong>: Don't overcrowd with information</li>
                <li><strong>Proofread Multiple Times</strong>: Check dates, spellings, and venue details</li>
                <li><strong>Test Print</strong>: Print one sample before bulk printing</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Timeline for Sending Invitations</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Save the Date</strong>: 6-8 months before wedding</li>
                <li><strong>Main Invitations</strong>: 2-3 months before wedding</li>
                <li><strong>Digital Reminders</strong>: 2 weeks before wedding</li>
                <li><strong>Final Confirmations</strong>: 1 week before wedding</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Creating Your Perfect Invitation</h3>
                <p className="mb-6">Choose from 10+ beautiful templates designed for Indian weddings</p>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Browse Templates →
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
