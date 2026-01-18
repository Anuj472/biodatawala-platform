import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { biodataPosterTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Biodata Poster Maker | Large Format Marriage Biodata Design - BioDatawala',
  description: 'Create eye-catching biodata posters for display at weddings and events. 10+ large format templates. Perfect for wedding halls and photo displays.',
  keywords: 'biodata poster, large biodata, wedding poster, display biodata, marriage poster design, shaadi poster',
};

export default function BiodataPosters() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Biodata Poster Maker
              </h1>
              <p className="text-xl mb-6">
                Design stunning large-format biodata posters for weddings and events. Perfect for display at 
                wedding venues, photo booths, and reception areas. Make a grand visual impression.
              </p>
              <Button size="lg">Create Biodata Poster Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Stunning Biodata Poster Templates</h2>
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
                Biodata posters are large-format display versions of traditional marriage biodatas, designed to be 
                showcased at wedding venues, receptions, or engagement parties. Unlike standard biodata documents, 
                these are visually striking, photo-heavy designs meant to inform and entertain guests while they 
                wait or mingle.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Where to Display Biodata Posters</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Wedding Venue Entrance</strong>: Welcome guests with couple information</li>
                <li><strong>Reception Area</strong>: Near guest registration or gift tables</li>
                <li><strong>Photo Booth</strong>: Fun backdrop with couple details</li>
                <li><strong>Cocktail Hour</strong>: Conversation starter for guests</li>
                <li><strong>Mehendi/Sangeet Venues</strong>: Informal events with relaxed settings</li>
                <li><strong>Wedding Hall Walls</strong>: Decorate empty walls beautifully</li>
                <li><strong>Banquet Hall</strong>: Near seating chart or dance floor</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Standard Poster Sizes</h3>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-purple-800">Common Sizes for Biodata Posters</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>A2 Size</strong>: 420mm × 594mm (16.5" × 23.4") - Tabletop display</li>
                  <li><strong>A1 Size</strong>: 594mm × 841mm (23.4" × 33.1") - Popular choice</li>
                  <li><strong>A0 Size</strong>: 841mm × 1189mm (33.1" × 46.8") - Large walls</li>
                  <li><strong>24" × 36"</strong>: Standard poster size for stands</li>
                  <li><strong>30" × 40"</strong>: Grand display for large venues</li>
                  <li><strong>Custom</strong>: Based on your venue requirements</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Essential Elements for Biodata Posters</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Large Photos</h4>
              <p className="text-gray-700 mb-4">
                Use high-resolution couple photos as the focal point. Professional engagement or pre-wedding shoot 
                photos work best. Ensure images are at least 300 DPI for print quality.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Key Information</h4>
              <p className="text-gray-700 mb-4">
                Include essential biodata details in an easy-to-read format:
                <br />• Full names
                <br />• Age and date of birth
                <br />• Education qualifications
                <br />• Profession/occupation
                <br />• Family background
                <br />• Hobbies and interests
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Visual Hierarchy</h4>
              <p className="text-gray-700 mb-4">
                Design with clear visual hierarchy - most important info (names, photos) should be largest and 
                most prominent. Supporting details can be smaller.
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Decorative Elements</h4>
              <p className="text-gray-700 mb-4">
                Add floral patterns, mandala designs, or cultural motifs that match your wedding theme. Don't 
                overcrowd - maintain balance.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Design Styles for Biodata Posters</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-800">Traditional Indian</h4>
                  <p className="text-sm text-gray-700">
                    Rich colors (maroon, gold, red), ornate borders, Ganesh motifs, peacock designs, 
                    traditional fonts. Perfect for classic Hindu weddings.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-800">Modern Minimal</h4>
                  <p className="text-sm text-gray-700">
                    Clean layouts, pastel colors, geometric shapes, modern typography, plenty of white space. 
                    Ideal for contemporary couples.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-green-800">Floral & Romantic</h4>
                  <p className="text-sm text-gray-700">
                    Watercolor flowers, botanical elements, soft pink/peach tones, elegant fonts. Great for 
                    garden or outdoor weddings.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-amber-800">Royal & Luxurious</h4>
                  <p className="text-sm text-gray-700">
                    Gold foil effects, palace-inspired patterns, deep jewel tones, ornate frames. Perfect for 
                    grand celebrations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Photo Requirements</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Resolution</strong>: Minimum 300 DPI at actual print size</li>
                <li><strong>Format</strong>: JPEG, PNG, or TIFF for best quality</li>
                <li><strong>Orientation</strong>: Both portrait and landscape can work</li>
                <li><strong>Lighting</strong>: Well-lit, professional photography preferred</li>
                <li><strong>Background</strong>: Clean or blurred backgrounds work best</li>
                <li><strong>Number</strong>: 1-3 photos per poster (don't overcrowd)</li>
                <li><strong>Style</strong>: Match photo style with overall design aesthetic</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Typography Guidelines</h3>
              <div className="bg-fuchsia-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Names</strong>: Largest text (80-120pt), decorative or elegant fonts</li>
                  <li><strong>Headings</strong>: Medium size (50-70pt), readable fonts</li>
                  <li><strong>Body Text</strong>: 30-40pt minimum for readability from distance</li>
                  <li><strong>Font Pairing</strong>: Maximum 2-3 fonts for consistency</li>
                  <li><strong>Contrast</strong>: Ensure text stands out from background</li>
                  <li><strong>Alignment</strong>: Center or left-aligned for clean look</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Printing Tips</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Choose Quality Paper</strong>: Glossy, matte, or satin finish</li>
                <li><strong>Color Mode</strong>: Use CMYK for printing (not RGB)</li>
                <li><strong>Bleed Area</strong>: Add 0.25" bleed on all sides</li>
                <li><strong>Test Print</strong>: Print small version first to check colors</li>
                <li><strong>Professional Printer</strong>: Use large-format printer for best results</li>
                <li><strong>Mounting</strong>: Consider foam board or frame mounting</li>
                <li><strong>Protection</strong>: Laminate for durability if outdoor display</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Display Methods</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Easel Stand</strong>: Portable and adjustable display</li>
                <li><strong>Frame</strong>: Elegant framed mount on wall or stand</li>
                <li><strong>Foam Board</strong>: Rigid backing, can stand independently</li>
                <li><strong>Banner Stand</strong>: Roll-up retractable display</li>
                <li><strong>String Hanging</strong>: Suspended from ceiling or backdrop</li>
                <li><strong>Magnetic Board</strong>: For easy repositioning</li>
                <li><strong>Acrylic Display</strong>: Modern premium look</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Cost Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Budget-Friendly</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>₹ A2 size (300-600)</li>
                    <li>₹ Standard paper (200-400)</li>
                    <li>₹ Digital print (500-800)</li>
                    <li>₹ Self-designed template (Free)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-800">Premium</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>₹ A0 size (2000-4000)</li>
                    <li>₹ Premium paper/canvas (1500-3000)</li>
                    <li>₹ Frame/mount (1000-3000)</li>
                    <li>₹ Professional design (2000-5000)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Using low-resolution images that appear pixelated</li>
                <li>Overcrowding with too much information</li>
                <li>Poor color contrast making text hard to read</li>
                <li>Fonts too small to read from a distance</li>
                <li>Inconsistent design with wedding theme</li>
                <li>Forgetting to include important biodata details</li>
                <li>Not testing poster visibility from typical viewing distance</li>
              </ul>

              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Biodata Poster</h3>
                <p className="mb-6">Design a stunning display for your special day</p>
                <Button size="lg" className="bg-white text-fuchsia-600 hover:bg-gray-100">
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
