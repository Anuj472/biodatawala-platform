import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { biodataPosterTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Biodata Posters | Large Format Marriage Biodata Designs - BioDatawala',
  description: 'Create eye-catching biodata posters for display at venues. Large format designs perfect for wedding exhibitions, matchmaking events, and family gatherings.',
  keywords: 'biodata poster, large biodata, marriage poster, wedding display biodata, exhibition biodata',
};

export default function BiodataPosters() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Biodata Posters
              </h1>
              <p className="text-xl mb-6">
                Create stunning large-format biodata posters for weddings, exhibitions, and family events. Eye-catching 
                designs with large photos and detailed information. Perfect for venue displays.
              </p>
              <Button size="lg">Create Poster Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Large Format Biodata Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {biodataPosterTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Biodata Posters</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">What Are Biodata Posters?</h3>
              <p className="text-gray-700 mb-4">
                Biodata posters are large-format versions of traditional marriage biodatas, designed to be displayed at 
                wedding venues, matchmaking events, family gatherings, or engagement ceremonies. Unlike standard A4 biodatas 
                meant for hand-to-hand distribution, these posters are typically A2, A1, or even A0 size, featuring prominent 
                photos and easily readable information from a distance. They serve as visual introductions at events where 
                multiple families gather for matchmaking purposes.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">When to Use Biodata Posters</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Wedding Exhibitions & Fairs</h4>
              <p className="text-gray-700 mb-4">
                Marriage exhibitions and matrimonial fairs where families set up stalls to find suitable matches. Large 
                posters help your profile stand out among dozens of others. Include multiple photos and key details that 
                catch attention from afar.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Community Matchmaking Events</h4>
              <p className="text-gray-700 mb-4">
                Community centers, temples, or association events where families gather specifically for matchmaking. Posters 
                displayed on boards or stands allow multiple families to view biodatas simultaneously.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Wedding Venue Displays</h4>
              <p className="text-gray-700 mb-4">
                Some families display biodatas at wedding venues (with the couple's permission) as a traditional way of 
                finding matches through extended family networks.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Family Gatherings</h4>
              <p className="text-gray-700 mb-4">
                Large family events, reunions, or celebrations where relatives gather from different cities. Posters provide 
                a formal way to introduce someone looking for a match.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Poster Sizes</h3>
              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>A2 Size</strong>: 420mm × 594mm (16.5" × 23.4") - Most common for events</li>
                  <li><strong>A1 Size</strong>: 594mm × 841mm (23.4" × 33.1") - Large exhibitions</li>
                  <li><strong>A0 Size</strong>: 841mm × 1189mm (33.1" × 46.8") - Maximum visibility</li>
                  <li><strong>Custom</strong>: 24" × 36" or 30" × 40" - Popular in India</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Recommendation:</strong> A2 size for most events, A1 for large exhibitions with many participants.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Principles for Posters</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Visual Hierarchy</h4>
              <p className="text-gray-700 mb-4">
                <strong>Most Prominent:</strong> Large, clear photo (should occupy 40-50% of poster)<br />
                <strong>Very Visible:</strong> Name, age, profession, location<br />
                <strong>Readable:</strong> Education, family details, contact information
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Readable from Distance</h4>
              <p className="text-gray-700 mb-4">
                People should be able to read key information from 6-10 feet away:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Name</strong>: Minimum 72pt font</li>
                <li><strong>Age/Profession</strong>: 48-60pt font</li>
                <li><strong>Body Text</strong>: 24-36pt font</li>
                <li><strong>Contact Details</strong>: 20-24pt font</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">3. High-Quality Photos</h4>
              <p className="text-gray-700 mb-4">
                Use high-resolution images (minimum 300 DPI). Photos will be enlarged significantly, so quality matters. 
                Consider including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>One large primary photo (portrait style)</li>
                <li>2-3 smaller photos showing different looks/angles</li>
                <li>Professional attire and traditional wear</li>
                <li>Well-lit, clear facial features</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Color Scheme</h4>
              <p className="text-gray-700 mb-4">
                Use colors that stand out but remain tasteful. Avoid neon or overly bright colors. Traditional colors work 
                well: maroon, gold, royal blue, emerald green. Ensure good contrast between text and background.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Information to Include</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Primary Details (Large, Prominent)</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Full name</li>
                <li>Age and date of birth</li>
                <li>Height</li>
                <li>Profession/occupation</li>
                <li>Education qualification</li>
                <li>Current city/location</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Family Information</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Father's name and occupation</li>
                <li>Mother's name and occupation</li>
                <li>Number of siblings</li>
                <li>Family location/hometown</li>
                <li>Family business/background</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Additional Details</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Religion and caste (if relevant)</li>
                <li>Annual income (optional)</li>
                <li>Hobbies and interests</li>
                <li>Partner expectations</li>
                <li>Contact details (phone, email)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Layout Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Photo Left, Details Right</h4>
                  <p className="text-sm text-gray-700">
                    Large photo on left 50%, information in structured sections on right. Clean, professional layout.
                  </p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Photo Top, Details Bottom</h4>
                  <p className="text-sm text-gray-700">
                    Photo occupies top 60%, details in organized blocks below. Good for portrait-style photos.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Centered Photo with Side Panels</h4>
                  <p className="text-sm text-gray-700">
                    Large photo in center, information panels on both sides. Symmetrical and balanced design.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Collage Style</h4>
                  <p className="text-sm text-gray-700">
                    Multiple photos in artistic arrangement with details integrated. Modern and dynamic.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Specifications</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Resolution</strong>: Minimum 150 DPI for posters, 300 DPI preferred</li>
                  <li><strong>Color Mode</strong>: CMYK for print (not RGB)</li>
                  <li><strong>Paper Type</strong>: Photo paper, glossy finish, or matte board</li>
                  <li><strong>Weight</strong>: 200-300 GSM for durability</li>
                  <li><strong>Lamination</strong>: Recommended for outdoor or long events</li>
                  <li><strong>Mounting</strong>: Consider foam board for easy standing display</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Display Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Height</strong>: Display at eye level (5-6 feet from ground)</li>
                <li><strong>Lighting</strong>: Ensure good lighting on the poster</li>
                <li><strong>Stand</strong>: Use sturdy easel stand or hanging system</li>
                <li><strong>Location</strong>: Place in high-traffic areas</li>
                <li><strong>Angle</strong>: Slight tilt towards viewers works better</li>
                <li><strong>Protection</strong>: Laminate to prevent damage from handling</li>
                <li><strong>Backup</strong>: Bring printed biodatas for interested parties</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cultural Variations</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">North Indian Style</h4>
              <p className="text-gray-700 mb-4">
                Rich borders, traditional motifs, family background emphasized, formal presentation.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">South Indian Style</h4>
              <p className="text-gray-700 mb-4">
                Emphasis on education and profession, horoscope details, traditional colors like red and gold.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">Modern/Urban Style</h4>
              <p className="text-gray-700 mb-4">
                Clean layouts, lifestyle photos, emphasis on profession and hobbies, contemporary design.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Using low-resolution photos that appear pixelated when enlarged</li>
                <li>Too much text making it difficult to read from distance</li>
                <li>Poor color contrast reducing readability</li>
                <li>Cluttered layout with no clear hierarchy</li>
                <li>Outdated information or wrong contact details</li>
                <li>Unprofessional or casual photos</li>
                <li>Fonts too small to read from 6 feet away</li>
                <li>Forgetting to laminate for durability</li>
              </ul>

              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Biodata Poster</h3>
                <p className="mb-6">Make a lasting impression at events</p>
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                  Design Poster Now →
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
