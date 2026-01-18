import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import { familyVideoTemplates } from '@/lib/template-data';

export const metadata: Metadata = {
  title: 'Family Introduction Video Templates | Marriage Proposal Videos - BioDatawala',
  description: 'Create engaging family introduction videos for marriage proposals. Professional templates with music, text overlays, and transitions. Share via WhatsApp.',
  keywords: 'family introduction video, marriage proposal video, biodata video, wedding introduction, video biodata maker',
};

export default function FamilyIntroductionVideos() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Family Introduction Videos
              </h1>
              <p className="text-xl mb-6">
                Create professional video biodatas that bring your profile to life. Add photos, family details, and personal 
                messages with music and effects. Share easily via WhatsApp and social media.
              </p>
              <Button size="lg">Create Video Free</Button>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Video Biodata Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {familyVideoTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Video Biodatas</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">What Are Video Biodatas?</h3>
              <p className="text-gray-700 mb-4">
                Video biodatas are modern, dynamic alternatives to traditional paper biodatas. They combine photos, text 
                information, background music, and visual effects into engaging 1-3 minute videos that can be easily shared 
                via WhatsApp, email, or social media. Video biodatas have become increasingly popular because they provide 
                a more personal, comprehensive view of the candidate and their family compared to static documents.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Video Biodatas?</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Advantages Over Traditional Biodatas</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>More Personal</strong>: Shows personality, family environment, and lifestyle</li>
                <li><strong>Engaging</strong>: Videos are more likely to be watched than PDFs read</li>
                <li><strong>Memorable</strong>: 95% retention rate vs 10% for text</li>
                <li><strong>Easy Sharing</strong>: WhatsApp, Instagram, Facebook forwarding</li>
                <li><strong>Comprehensive</strong>: Can show home, workplace, hobbies in action</li>
                <li><strong>Modern</strong>: Appeals to younger, tech-savvy generation</li>
                <li><strong>Family Involvement</strong>: Parents can speak about their child</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Video Biodata Structure</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">1. Opening (5-10 seconds)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Content:</strong> Beautiful title slide with candidate's name and photo<br />
                <strong>Music:</strong> Gentle, welcoming background music starts<br />
                <strong>Text:</strong> "Introduction of [Name]" or "Meet [Name]"<br />
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">2. Personal Introduction (20-30 seconds)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Photos:</strong> 3-4 photos showing candidate in different settings<br />
                <strong>Information:</strong> Name, age, height, education, profession, location<br />
                <strong>Option:</strong> Candidate's video introduction (15-20 seconds)<br />
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">3. Family Background (30-40 seconds)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Photos:</strong> Family photos, parents, siblings<br />
                <strong>Information:</strong> Father's occupation, mother's name, siblings details<br />
                <strong>Text:</strong> Family values, traditions, hometown<br />
                <strong>Option:</strong> Parents' message (10-15 seconds)<br />
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">4. Lifestyle & Hobbies (20-30 seconds)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Photos/Clips:</strong> Hobbies, interests, activities<br />
                <strong>Information:</strong> Favorite activities, achievements, talents<br />
                <strong>Music:</strong> Upbeat, energetic background<br />
              </p>

              <h4 className="text-xl font-bold mt-6 mb-3">5. Expectations & Contact (10-15 seconds)</h4>
              <p className="text-gray-700 mb-4">
                <strong>Text:</strong> Partner expectations or preferences<br />
                <strong>Contact:</strong> Phone number, email, or "For more details, contact:"<br />
                <strong>Closing:</strong> Thank you message<br />
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Recommended Video Specifications</h3>
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Duration</strong>: 60-120 seconds (2 minutes maximum)</li>
                  <li><strong>Resolution</strong>: 1920×1080 (Full HD) or 1280×720 (HD)</li>
                  <li><strong>Aspect Ratio</strong>: 16:9 (landscape) or 9:16 (vertical for WhatsApp)</li>
                  <li><strong>File Size</strong>: Under 25MB for easy WhatsApp sharing</li>
                  <li><strong>Format</strong>: MP4 (H.264 codec) - most compatible</li>
                  <li><strong>Frame Rate</strong>: 30 fps standard, 60 fps for smooth motion</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Photos & Visual Content</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Essential Photos to Include</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Portrait</strong>: Professional headshot with clear face</li>
                <li><strong>Full Body</strong>: Shows height and appearance</li>
                <li><strong>Traditional Attire</strong>: Cultural outfit (saree, kurta, etc.)</li>
                <li><strong>Casual/Modern</strong>: Everyday look</li>
                <li><strong>Family Photo</strong>: With parents and siblings</li>
                <li><strong>Hobby/Activity</strong>: Engaged in favorite activities</li>
                <li><strong>Achievement</strong>: Awards, graduation, professional milestones</li>
                <li><strong>Home Environment</strong>: Brief glimpse of home (optional)</li>
              </ul>

              <h4 className="text-xl font-bold mt-6 mb-3">Photo Quality Requirements</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>High resolution (minimum 1920×1080 pixels)</li>
                <li>Good lighting (natural light preferred)</li>
                <li>Clear, in-focus images</li>
                <li>Recent photos (within last year)</li>
                <li>Appropriate, respectful clothing</li>
                <li>Smiling, approachable expressions</li>
                <li>Clean, uncluttered backgrounds</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Music Selection</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Background Music Guidelines</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Traditional</strong>: Classical Indian instrumental for formal tone</li>
                <li><strong>Modern</strong>: Soft pop or contemporary instrumental</li>
                <li><strong>Romantic</strong>: Light romantic melodies without lyrics</li>
                <li><strong>Upbeat</strong>: Cheerful, positive tunes for lifestyle section</li>
                <li><strong>Volume</strong>: Background only - text should be readable, not distracting</li>
                <li><strong>Copyright</strong>: Use royalty-free music or original compositions</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Text & Information Display</h3>
              
              <h4 className="text-xl font-bold mt-6 mb-3">Typography Best Practices</h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Font Size</strong>: Large enough to read on mobile (minimum 36pt)</li>
                <li><strong>Font Style</strong>: Clean, readable fonts (avoid decorative fonts)</li>
                <li><strong>Contrast</strong>: White text on dark overlay or vice versa</li>
                <li><strong>Duration</strong>: Each text slide visible for 3-5 seconds minimum</li>
                <li><strong>Animations</strong>: Subtle fade-ins, not distracting transitions</li>
                <li><strong>Language</strong>: Primary language + English translation if needed</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Video vs Photo Clips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-800">Video Clips (Recommended)</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Self-introduction (20-30 seconds)</li>
                    <li>✓ Parents' message (15-20 seconds)</li>
                    <li>✓ Home tour (10-15 seconds)</li>
                    <li>✓ Hobby in action (10 seconds)</li>
                    <li>✓ More personal and engaging</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-800">Photo Slideshow (Alternative)</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ Easier to create</li>
                    <li>✓ No camera-shyness issues</li>
                    <li>✓ Better control over presentation</li>
                    <li>✓ Can use existing photos</li>
                    <li>✓ Still effective if done well</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Distribution Channels</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>WhatsApp</strong>: Most common - directly to interested families</li>
                <li><strong>Matrimonial Apps</strong>: Upload to profile on matrimonial websites</li>
                <li><strong>Email</strong>: Send as attachment or YouTube link</li>
                <li><strong>Social Media</strong>: Private groups or direct messages</li>
                <li><strong>YouTube</strong>: Unlisted video - share link only with prospects</li>
                <li><strong>Google Drive/Dropbox</strong>: Shareable link for high-quality version</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Privacy & Security Tips</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Don't include exact home address (mention only city/area)</li>
                <li>Use email for contact, not personal phone number initially</li>
                <li>Watermark video with your contact or reference number</li>
                <li>Upload to YouTube as "Unlisted" not "Public"</li>
                <li>Be cautious about sharing financial details</li>
                <li>Remove video once match is found</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Making videos too long (over 3 minutes)</li>
                <li>Using low-quality, blurry photos</li>
                <li>Too much text making it difficult to read</li>
                <li>Loud or distracting background music</li>
                <li>Sharing too personal/sensitive information</li>
                <li>Including inappropriate or party photos</li>
                <li>Forgetting to proofread text for errors</li>
                <li>Using copyrighted music (copyright issues)</li>
              </ul>

              <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Create Your Video Biodata</h3>
                <p className="mb-6">Bring your profile to life with engaging video content</p>
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Start Creating Video →
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
