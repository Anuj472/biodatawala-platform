'use client'

interface TemplateProps {
  data: {
    name?: string
    photo?: string
    age?: string
    height?: string
    education?: string
    occupation?: string
    location?: string
    phone?: string
    email?: string
    about?: string
    interests?: string
  }
  colors?: {
    primary?: string
  }
}

export default function ModernMinimalist({ data = {}, colors = {} }: TemplateProps) {
  const primaryColor = colors.primary || '#1e40af'

  return (
    <div className="w-full h-full bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="h-32" style={{ backgroundColor: primaryColor }}>
        <div className="flex items-center h-full px-12 text-white">
          <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
            {data.photo ? (
              <img src={data.photo} alt={data.name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-4xl">👤</div>
            )}
          </div>
          <div className="ml-6">
            <h1 className="text-4xl font-bold">{data.name || 'Your Name'}</h1>
            <p className="text-xl mt-1 opacity-90">{data.age || '25'} Years | {data.location || 'Mumbai, India'}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-12 py-8">
        {/* Profile */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: primaryColor, borderColor: primaryColor }}>
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {data.about || 'A brief introduction about yourself, your personality, values, and what makes you unique.'}
          </p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Education</h3>
            <p className="text-gray-700">{data.education || 'Bachelor\'s Degree'}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Profession</h3>
            <p className="text-gray-700">{data.occupation || 'Software Engineer'}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-2">📏</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Height</h3>
            <p className="text-gray-700">{data.height || '5\'7"'}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Location</h3>
            <p className="text-gray-700">{data.location || 'Mumbai, India'}</p>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: primaryColor, borderColor: primaryColor }}>
            Interests & Hobbies
          </h2>
          <p className="text-lg text-gray-700">
            {data.interests || 'Reading, Traveling, Music, Photography, Cooking'}
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>Get in Touch</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <span className="text-lg">{data.phone || '+91 98765 43210'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <span className="text-lg">{data.email || 'yourname@email.com'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
