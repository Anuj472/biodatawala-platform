import { Metadata } from 'next';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { weddingInvitationTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Wedding Invitation Card Maker Online Free | Digital & Printable - BioDatawala',
  description: 'Create stunning wedding invitation cards online. 10+ beautiful templates - traditional, modern, royal. Download as PDF/JPG. Free to customize.',
  keywords: 'wedding invitation card, shaadi card maker, digital wedding card, online invitation creator, wedding card design, free invitation maker',
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
                Create beautiful wedding invitation cards online. Choose from traditional, modern, and royal designs. 
                Perfect for Indian weddings - Hindu, Muslim, Christian ceremonies.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">Create Invitation Free</Button>
                <Button variant="outline" size="lg" className="bg-white bg-opacity-20 border-white hover:bg-opacity-30">
                  Browse Designs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Beautiful Wedding Card Templates</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From royal palace themes to modern minimalist designs. All templates are customizable and available in both digital and print formats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {weddingInvitationTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Wedding Card Maker?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Add Your Photos</h3>
                <p className="text-gray-600">Upload couple photos and customize placement</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Full Customization</h3>
                <p className="text-gray-600">Change colors, fonts, and text instantly</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital & Print</h3>
                <p className="text-gray-600">Download for WhatsApp sharing or printing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Wedding Invitation Cards in 2026</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Wedding Invitation Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Traditional Indian Wedding Cards</h4>
              <p className="text-gray-700 mb-4">
                Traditional cards feature ornate borders, religious symbols (Ganesh, Om, Cross, Crescent), rich colors like maroon, 
                gold, and red. Perfect for classic Hindu, Muslim, and Christian weddings. These cards include detailed information 
                about multiple ceremonies including Mehendi, Sangeet, Haldi, and the main ceremony.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Modern Minimalist Cards</h4>
              <p className="text-gray-700 mb-4">
                Clean layouts with pastel colors, contemporary typography, and lots of white space. Ideal for modern couples who 
                prefer elegant simplicity. These cards focus on essential information with a sophisticated aesthetic.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Royal Palace Theme</h4>
              <p className="text-gray-700 mb-4">
                Luxurious designs with gold foil effects, ornate patterns inspired by Rajasthani palaces, peacock motifs, and 
                premium feel. Perfect for grand destination weddings or luxury celebrations.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Digital Animated Invitations</h4>
              <p className="text-gray-700 mb-4">
                Video invitations with motion graphics, animations, and background music. Perfect for sharing via WhatsApp, 
                Instagram, and email. Eco-friendly and cost-effective alternative to printed cards.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Bride & Groom Names</strong>: Full names with parents' names</li>
                <li><strong>Wedding Date & Time</strong>: Exact date, time, and muhurat if applicable</li>
                <li><strong>Venue Details</strong>: Complete address with landmarks</li>
                <li><strong>RSVP Information</strong>: Contact number or email</li>
                <li><strong>Dress Code</strong>: Optional but helpful for guests</li>
                <li><strong>Map/Directions</strong>: For easy navigation</li>
                <li><strong>Multiple Ceremonies</strong>: List all events with timings</li>
                <li><strong>Accommodation Info</strong>: For destination weddings</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wedding Card Design Trends 2026</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Sustainable Design</strong>: Eco-friendly themes with natural colors</li>
                <li><strong>Personalized Illustrations</strong>: Custom couple caricatures</li>
                <li><strong>Watercolor Florals</strong>: Soft, romantic flower patterns</li>
                <li><strong>Geometric Patterns</strong>: Modern mandala and symmetric designs</li>
                <li><strong>Vintage Postcards</strong>: Nostalgic destination wedding themes</li>
                <li><strong>Minimalist Typography</strong>: Focus on beautiful fonts</li>
                <li><strong>Cultural Fusion</strong>: Blend of traditional and modern elements</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Traditional Wedding Cards</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Digital Wedding Cards Benefits:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Instant delivery via WhatsApp, email, social media</li>
                  <li>Eco-friendly and cost-effective</li>
                  <li>Easy to update if details change</li>
                  <li>Animated and interactive options</li>
                  <li>Easy RSVP tracking</li>
                  <li>Can include video messages</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Traditional Printed Cards Benefits:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Tangible keepsake for guests</li>
                  <li>Formal and traditional appeal</li>
                  <li>Premium feel with embossing/foil</li>
                  <li>Suitable for elderly relatives</li>
                  <li>Cultural and religious significance</li>
                  <li>No digital divide issues</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tips for Perfect Wedding Invitations</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Send invitations 4-6 weeks before the wedding</li>
                <li>Order 10-15% extra cards for last-minute additions</li>
                <li>Proofread multiple times before finalizing</li>
                <li>Match invitation design with wedding theme</li>
                <li>Include accommodation and travel information</li>
                <li>Add QR code for digital RSVP</li>
                <li>Consider bilingual text for diverse guests</li>
                <li>Test print quality before bulk ordering</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Wedding Invitation?</h3>
                <p className="mb-6">Beautiful designs, easy customization, instant download</p>
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
