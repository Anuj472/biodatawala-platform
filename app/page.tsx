import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Create Professional Biodata, Resumes & Documents in Minutes
          </h1>
          <p className="text-xl mb-8">
            India's #1 Free Online Document Maker | 140+ Premium Templates | No Design Skills Required
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/marriage-biodata-maker"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Create Biodata Free
            </Link>
            <Link
              href="/templates"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Browse All Templates
            </Link>
          </div>
          <div className="mt-6 text-sm">
            <p>100,000+ Downloads | 4.8★ Rating | Trusted by 50,000+ Users</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {service.templateCount} Templates
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Template</h3>
              <p className="text-gray-600">Browse 140+ professional designs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Customize</h3>
              <p className="text-gray-600">Add your details, photos, and personalize colors</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Download</h3>
              <p className="text-gray-600">Get high-quality PDF/JPG instantly</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    id: 1,
    name: 'Marriage Biodata Maker',
    description: 'Create beautiful marriage biodata with traditional and modern formats',
    icon: '💑',
    templateCount: '10+',
  },
  {
    id: 2,
    name: 'Wedding Invitation Cards',
    description: 'Design stunning wedding invitation cards for your special day',
    icon: '💒',
    templateCount: '10+',
  },
  {
    id: 3,
    name: 'Pre-Wedding Templates',
    description: 'Save the date, engagement, and ceremony invitation templates',
    icon: '💍',
    templateCount: '10+',
  },
  {
    id: 4,
    name: 'Biodata Posters',
    description: 'Social media ready biodata posters for Instagram, Facebook, WhatsApp',
    icon: '📱',
    templateCount: '10+',
  },
  {
    id: 5,
    name: 'Resume/CV Maker',
    description: 'Professional ATS-friendly resume templates for all industries',
    icon: '📄',
    templateCount: '10+',
  },
  {
    id: 6,
    name: 'Cover Letter Templates',
    description: 'Compelling cover letters that get you noticed',
    icon: '✉️',
    templateCount: '10+',
  },
  {
    id: 7,
    name: 'Portfolio Websites',
    description: 'Showcase your work with professional portfolio templates',
    icon: '💼',
    templateCount: '10+',
  },
  {
    id: 8,
    name: 'LinkedIn Banner Designs',
    description: 'Stand out on LinkedIn with professional banner designs',
    icon: '🌐',
    templateCount: '10+',
  },
  {
    id: 9,
    name: 'ID Card Maker',
    description: 'Employee, student, and event ID cards',
    icon: '🎫',
    templateCount: '10+',
  },
  {
    id: 10,
    name: 'Certificate Generator',
    description: 'Professional certificates for achievements and events',
    icon: '🏆',
    templateCount: '10+',
  },
  {
    id: 11,
    name: 'Business Card Designer',
    description: 'Make a lasting impression with custom business cards',
    icon: '💳',
    templateCount: '10+',
  },
  {
    id: 12,
    name: 'Letterhead Templates',
    description: 'Professional letterheads for business correspondence',
    icon: '📝',
    templateCount: '10+',
  },
]
