import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { preWeddingTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Pre-Wedding Ceremony Templates | Mehendi, Sangeet, Haldi Designs - BioDatawala',
  description: 'Beautiful pre-wedding ceremony templates for Mehendi, Sangeet, Haldi, and engagement. Digital invitations with traditional and modern designs.',
  keywords: 'mehendi invitation, sangeet card, haldi ceremony, pre-wedding invitation, engagement card, roka ceremony',
};

export default function PreWeddingTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pre-Wedding Ceremony Templates
              </h1>
              <p className="text-xl mb-6">
                Create stunning invitations for Mehendi, Sangeet, Haldi, Engagement, and Roka ceremonies. 
                Traditional and modern designs for every pre-wedding celebration.
              </p>
              <Button size="lg">Create Invitation Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pre-Wedding Ceremony Designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {preWeddingTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Pre-Wedding Ceremonies</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Pre-Wedding Ceremonies</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Mehendi Ceremony</h4>
              <p className="text-gray-700 mb-4">
                The Mehendi ceremony is one of the most colorful and fun pre-wedding events. Held 1-2 days before the 
                wedding, it involves applying intricate henna designs on the bride's hands and feet. Family and friends 
                gather for music, dance, and celebration. Mehendi invitations typically feature henna motifs, leaf patterns, 
                and vibrant colors like orange, green, and yellow.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Essential Details to Include:</strong> Date and time, venue address, dress code (usually traditional 
                Indian attire in bright colors), and special instructions like "Ladies only" or "Bring your dancing shoes!"
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Sangeet Night</h4>
              <p className="text-gray-700 mb-4">
                Sangeet is a musical night where both families come together for singing, dancing, and performances. 
                It's one of the most entertaining pre-wedding functions. Modern Sangeet ceremonies often include 
                choreographed dance performances by friends and family, DJ music, and themed decorations. Sangeet 
                invitations should reflect the fun, musical nature of the event with musical notes, dance motifs, 
                or disco ball designs.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Haldi Ceremony</h4>
              <p className="text-gray-700 mb-4">
                The Haldi ceremony involves applying a paste of turmeric, sandalwood, and rose water on the bride and 
                groom for good luck and to enhance their complexion before the wedding. It's an intimate ceremony with 
                close family and friends. Haldi invitations typically use yellow as the primary color, with marigold 
                flowers, turmeric bowls, or traditional kalash designs.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Engagement/Ring Ceremony</h4>
              <p className="text-gray-700 mb-4">
                The engagement is a formal announcement of the couple's decision to marry. Rings are exchanged, and 
                blessings are sought from elders. Engagement invitations are usually more formal than other pre-wedding 
                events, featuring elegant designs with ring motifs, diamond patterns, or classic floral borders.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Roka Ceremony</h4>
              <p className="text-gray-700 mb-4">
                Roka is a pre-engagement ceremony where both families officially agree to the marriage. It's an intimate 
                gathering with close family members. Gifts and sweets are exchanged. Roka invitations are usually simple 
                and elegant, focusing on traditional motifs and family names.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Pre-Wedding Invitation Design Tips</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Color Schemes by Ceremony</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Mehendi</strong>: Green, orange, yellow, pink (vibrant and festive)</li>
                <li><strong>Sangeet</strong>: Purple, gold, red, multi-color (musical and energetic)</li>
                <li><strong>Haldi</strong>: Yellow, orange, white (bright and auspicious)</li>
                <li><strong>Engagement</strong>: Gold, silver, rose gold, navy (elegant and formal)</li>
                <li><strong>Roka</strong>: Red, maroon, gold (traditional and sacred)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Ceremony Type</strong>: Clearly mention Mehendi/Sangeet/Haldi/Engagement</li>
                <li><strong>Couple's Names</strong>: Bride and groom names prominently displayed</li>
                <li><strong>Date & Time</strong>: Specific date and timing of the ceremony</li>
                <li><strong>Venue Details</strong>: Complete address with landmarks</li>
                <li><strong>Dress Code</strong>: Traditional, festive, or themed attire</li>
                <li><strong>RSVP Information</strong>: Contact details for confirmation</li>
                <li><strong>Special Instructions</strong>: Parking info, gifts policy, etc.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Invitation Wording Examples</h3>
              
              <div className="space-y-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Mehendi Invitation:</p>
                  <p className="text-gray-700 italic">
                    "Join us for a colorful evening of Mehendi, Music & Masti as we celebrate [Bride's Name]'s special day. 
                    Date: [Date] | Time: [Time] | Venue: [Address]. Come dressed in your brightest traditional attire!"
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Sangeet Invitation:</p>
                  <p className="text-gray-700 italic">
                    "Let's dance the night away! You're invited to the Sangeet Ceremony of [Bride & Groom Names]. 
                    Get ready for performances, music, and unlimited fun. [Date] at [Time], [Venue]."
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Haldi Ceremony:</p>
                  <p className="text-gray-700 italic">
                    "We invite you to bless [Bride/Groom Name] at the Haldi ceremony. Join us for this auspicious ritual. 
                    [Date] | [Time] | [Venue]. Note: Please wear clothes you don't mind getting stained!"
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-bold mb-3">Engagement Invitation:</p>
                  <p className="text-gray-700 italic">
                    "With the blessings of our families, [Bride's Name] & [Groom's Name] request your gracious presence 
                    at their Ring Ceremony. [Date] | [Time] | [Venue]. Your blessings are all we need."
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Printed Invitations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Digital Advantages</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Instant sharing via WhatsApp groups</li>
                    <li>✓ Can include video clips or music</li>
                    <li>✓ Easy to update details if needed</li>
                    <li>✓ Cost-effective for large guest lists</li>
                    <li>✓ Eco-friendly option</li>
                    <li>✓ Can track who viewed invitation</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-pink-800">Printed Advantages</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Physical keepsake for memories</li>
                    <li>✓ More formal and traditional feel</li>
                    <li>✓ Appreciated by older relatives</li>
                    <li>✓ Can be more decorative</li>
                    <li>✓ No technology needed</li>
                    <li>✓ Personal touch</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Timeline for Pre-Wedding Events</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Roka</strong>: 3-6 months before wedding</li>
                <li><strong>Engagement</strong>: 2-4 months before wedding</li>
                <li><strong>Mehendi</strong>: 1-2 days before wedding</li>
                <li><strong>Sangeet</strong>: 1-2 days before wedding (often same day as Mehendi)</li>
                <li><strong>Haldi</strong>: Morning of the wedding day or 1 day before</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Planning Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Send invitations 2-3 weeks before each ceremony</li>
                <li>Coordinate themes across all pre-wedding events</li>
                <li>Book venues well in advance, especially for Sangeet</li>
                <li>Hire professional mehendi artists early</li>
                <li>Plan choreography for Sangeet performances</li>
                <li>Arrange for photographers at each event</li>
                <li>Consider weather if planning outdoor ceremonies</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Pre-Wedding Invitations</h3>
                <p className="mb-6">Beautiful designs for every ceremony</p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
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
