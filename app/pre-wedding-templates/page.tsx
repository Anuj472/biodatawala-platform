import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { preWeddingTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Pre-Wedding Template Maker | Save the Date & Announcement Cards - BioDatawala',
  description: 'Create beautiful pre-wedding templates, save the date cards, and engagement announcements. 10+ romantic templates. Free to customize.',
  keywords: 'pre wedding invitation, save the date, engagement announcement, pre wedding shoot template, wedding announcement card',
};

export default function PreWeddingTemplates() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pre-Wedding Templates
              </h1>
              <p className="text-xl mb-6">
                Announce your special day with beautiful save the date cards and pre-wedding announcements. 
                Perfect for engagement parties, pre-wedding shoots, and wedding countdowns. Share the excitement!
              </p>
              <Button size="lg">Create Pre-Wedding Card Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Beautiful Pre-Wedding Templates</h2>
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
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Pre-Wedding Templates</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Types of Pre-Wedding Cards</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Save the Date Cards</h4>
              <p className="text-gray-700 mb-4">
                Send 6-8 months before the wedding to help guests plan ahead. Include wedding date, couple names, 
                and location (city). Keep details minimal - formal invitation comes later.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Engagement Announcement Cards</h4>
              <p className="text-gray-700 mb-4">
                Share your engagement news with family and friends. Include couple photo, engagement date, and 
                brief message. Perfect for social media or physical cards.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Pre-Wedding Shoot Invitations</h4>
              <p className="text-gray-700 mb-4">
                Invite close ones to your pre-wedding photoshoot or video shoot. Include shoot date, location, 
                theme, and dress code if applicable.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Roka/Engagement Ceremony Invitations</h4>
              <p className="text-gray-700 mb-4">
                Formal invitations for engagement ceremonies. Include venue details, timing, family names, and 
                RSVP information. More detailed than save the date cards.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">What to Include</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Couple Names</strong>: Bride and groom's names prominently displayed</li>
                <li><strong>Event Date</strong>: Wedding date or engagement ceremony date</li>
                <li><strong>Location</strong>: City or venue (depending on card type)</li>
                <li><strong>Photos</strong>: Couple photo or engagement shoot pictures</li>
                <li><strong>Tagline</strong>: Romantic quote or personal message</li>
                <li><strong>Website Link</strong>: Wedding website URL (optional)</li>
                <li><strong>Hashtag</strong>: Wedding hashtag for social media</li>
                <li><strong>Contact Info</strong>: For queries (optional)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Styles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-pink-800">Romantic & Elegant</h4>
                  <p className="text-sm text-gray-700">
                    Soft colors, floral elements, calligraphy fonts, watercolor backgrounds. Perfect for 
                    traditional and dreamy aesthetics.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-800">Modern & Minimalist</h4>
                  <p className="text-sm text-gray-700">
                    Clean lines, geometric shapes, bold typography, simple color palette. Ideal for 
                    contemporary couples.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-purple-800">Fun & Playful</h4>
                  <p className="text-sm text-gray-700">
                    Bright colors, illustrations, quirky fonts, cartoon elements. Great for casual and 
                    fun-loving couples.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-amber-800">Vintage & Classic</h4>
                  <p className="text-sm text-gray-700">
                    Sepia tones, ornate borders, classic fonts, aged paper look. Perfect for timeless and 
                    nostalgic themes.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Save the Date Wording Examples</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold mb-2">Traditional:</p>
                  <p className="text-gray-700 italic text-sm">
                    "Save the Date<br />
                    [Bride Name] & [Groom Name]<br />
                    are getting married!<br />
                    [Date]<br />
                    [City, State]<br />
                    Formal invitation to follow"
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold mb-2">Casual & Fun:</p>
                  <p className="text-gray-700 italic text-sm">
                    "Mark your calendars!<br />
                    [Name] + [Name] are tying the knot<br />
                    [Month Day, Year]<br />
                    Get ready to celebrate with us in [City]!"
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold mb-2">Romantic:</p>
                  <p className="text-gray-700 italic text-sm">
                    "Two hearts, one love<br />
                    [Bride] & [Groom]<br />
                    Save the Date<br />
                    [Date]<br />
                    Our forever begins in [Location]"
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Timeline for Pre-Wedding Communications</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>12+ Months Before</strong>: Engagement announcement</li>
                <li><strong>8-12 Months Before</strong>: Save the date cards</li>
                <li><strong>6-8 Months Before</strong>: Pre-wedding ceremony invitations</li>
                <li><strong>3-4 Months Before</strong>: Pre-wedding shoot announcements</li>
                <li><strong>8-10 Weeks Before</strong>: Formal wedding invitations</li>
                <li><strong>2-4 Weeks Before</strong>: Final reminders and updates</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Digital vs Physical Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Digital Cards</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Instant sharing via WhatsApp/email</li>
                    <li>✓ Cost-effective and eco-friendly</li>
                    <li>✓ Easy to update if plans change</li>
                    <li>✓ Can include clickable links</li>
                    <li>✓ Animated or video options</li>
                    <li>✓ Track who viewed</li>
                  </ul>
                </div>
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-rose-800">Physical Cards</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Tangible keepsake</li>
                    <li>✓ Traditional and formal</li>
                    <li>✓ Appreciated by elders</li>
                    <li>✓ Magnetic versions for fridges</li>
                    <li>✓ Premium paper options</li>
                    <li>✓ More personal touch</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Photo Selection Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use high-resolution images (minimum 300 DPI for print)</li>
                <li>Choose photos where both faces are clearly visible</li>
                <li>Ensure good lighting and focus</li>
                <li>Select images that match your wedding theme</li>
                <li>Consider candid shots over posed ones</li>
                <li>Test how photo looks with text overlay</li>
                <li>Get professional photos if possible</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Popular Pre-Wedding Themes</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Destination Wedding</strong>: Beach, mountain, or exotic location themes</li>
                <li><strong>Seasonal</strong>: Spring flowers, autumn leaves, winter wonderland, summer sunshine</li>
                <li><strong>Cultural</strong>: Traditional Indian, Western, fusion styles</li>
                <li><strong>Hobby-Based</strong>: Music, travel, sports, books (shared interests)</li>
                <li><strong>Nature</strong>: Garden, forest, rustic, outdoor themes</li>
                <li><strong>Glamorous</strong>: Gold accents, sparkles, luxury aesthetic</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Sending save the dates too early or too late</li>
                <li>Including too much information (keep it brief)</li>
                <li>Using low-quality or blurry photos</li>
                <li>Forgetting to proofread dates and names</li>
                <li>Not matching design with wedding theme</li>
                <li>Overwhelming design with too many elements</li>
                <li>Not testing digital versions before sending</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Pre-Wedding Card</h3>
                <p className="mb-6">Share your joy with beautiful announcements</p>
                <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
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
