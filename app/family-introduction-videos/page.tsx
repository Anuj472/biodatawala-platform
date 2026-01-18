import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'Family Introduction Video Maker | Wedding Video Templates - BioDatawala',
  description: 'Create beautiful family introduction videos for weddings. Show family details in an engaging video format. Perfect for wedding ceremonies and receptions.',
  keywords: 'family introduction video, wedding video template, family biodata video, wedding presentation, family slideshow',
};

export default function FamilyIntroductionVideos() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Family Introduction Videos
              </h1>
              <p className="text-xl mb-6">
                Create engaging family introduction videos for your wedding. Share family details, photos, and stories 
                in a beautiful video format. Perfect for receptions, ceremonies, and pre-wedding events.
              </p>
              <Button size="lg">Create Family Video Free</Button>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-12 rounded-2xl">
              <svg className="w-24 h-24 mx-auto mb-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Coming Soon!</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                We're working on amazing video templates for family introductions. Subscribe to get notified when we launch!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 w-full sm:w-auto"
                />
                <Button size="lg">Notify Me</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Preview */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-bold mb-3">Professional Templates</h3>
                <p className="text-gray-700">Pre-designed video templates with smooth transitions and beautiful animations for family introductions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🖼️</div>
                <h3 className="text-xl font-bold mb-3">Photo Slideshows</h3>
                <p className="text-gray-700">Add family photos with elegant transitions and background music for a memorable presentation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold mb-3">Music Integration</h3>
                <p className="text-gray-700">Choose from curated background music or upload your own favorite tracks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">Easy Customization</h3>
                <p className="text-gray-700">Simple drag-and-drop editor to customize text, photos, and video duration.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
