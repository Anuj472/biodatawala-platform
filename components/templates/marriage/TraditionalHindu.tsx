'use client'

interface TemplateProps {
  data: {
    name?: string
    photo?: string
    age?: string
    height?: string
    religion?: string
    caste?: string
    education?: string
    occupation?: string
    income?: string
    phone?: string
    email?: string
    address?: string
    fatherName?: string
    motherName?: string
    siblings?: string
    expectations?: string
  }
  colors?: {
    primary?: string
    secondary?: string
  }
}

export default function TraditionalHindu({ data = {}, colors = {} }: TemplateProps) {
  const primaryColor = colors.primary || '#DC2626'
  const secondaryColor = colors.secondary || '#FEF3C7'

  return (
    <div className="w-full h-full bg-white p-8" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header with Om Symbol */}
      <div className="text-center mb-6 pb-4 border-b-4" style={{ borderColor: primaryColor }}>
        <div className="text-6xl mb-2" style={{ color: primaryColor }}>ॐ</div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
          || श्री गणेशाय नमः ||
        </h1>
        <p className="text-xl italic">Marriage Biodata</p>
      </div>

      {/* Photo Section */}
      <div className="flex gap-8 mb-6">
        <div className="w-48 h-56 border-4 flex items-center justify-center rounded-lg" style={{ borderColor: primaryColor }}>
          {data.photo ? (
            <img src={data.photo} alt={data.name} className="w-full h-full object-cover rounded" />
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-2">👤</div>
              <p className="text-sm text-gray-500">Photo</p>
            </div>
          )}
        </div>

        {/* Basic Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>
            {data.name || 'Full Name'}
          </h2>
          
          <div className="grid grid-cols-2 gap-3 text-lg">
            <div>
              <span className="font-semibold">Age:</span> {data.age || '25 Years'}
            </div>
            <div>
              <span className="font-semibold">Height:</span> {data.height || '5\'6"'}
            </div>
            <div>
              <span className="font-semibold">Religion:</span> {data.religion || 'Hindu'}
            </div>
            <div>
              <span className="font-semibold">Caste:</span> {data.caste || 'Brahmin'}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="h-2 mb-6 rounded" style={{ background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})` }}></div>

      {/* Education & Career */}
      <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: secondaryColor }}>
        <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>📚 Education & Career</h3>
        <div className="space-y-2 text-lg">
          <p><span className="font-semibold">Education:</span> {data.education || 'B.Tech in Computer Science'}</p>
          <p><span className="font-semibold">Occupation:</span> {data.occupation || 'Software Engineer'}</p>
          <p><span className="font-semibold">Annual Income:</span> {data.income || '₹ 8-10 Lakhs'}</p>
        </div>
      </div>

      {/* Family Details */}
      <div className="mb-6 p-4 rounded-lg border-2" style={{ borderColor: primaryColor }}>
        <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>👨‍👩‍👧‍👦 Family Details</h3>
        <div className="space-y-2 text-lg">
          <p><span className="font-semibold">Father:</span> {data.fatherName || 'Father\'s Name'}</p>
          <p><span className="font-semibold">Mother:</span> {data.motherName || 'Mother\'s Name'}</p>
          <p><span className="font-semibold">Siblings:</span> {data.siblings || '1 Brother, 1 Sister'}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: secondaryColor }}>
        <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>📞 Contact Details</h3>
        <div className="space-y-2 text-lg">
          <p><span className="font-semibold">Phone:</span> {data.phone || '+91 98765 43210'}</p>
          <p><span className="font-semibold">Email:</span> {data.email || 'contact@example.com'}</p>
          <p><span className="font-semibold">Address:</span> {data.address || 'City, State, India'}</p>
        </div>
      </div>

      {/* Partner Expectations */}
      <div className="p-4 rounded-lg border-2" style={{ borderColor: primaryColor }}>
        <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>💑 Partner Expectations</h3>
        <p className="text-lg">
          {data.expectations || 'Looking for a well-educated, caring and family-oriented partner from a respectable family.'}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 text-center border-t-2" style={{ borderColor: primaryColor }}>
        <p className="text-lg italic" style={{ color: primaryColor }}>|| शुभं भवतु ||</p>
      </div>
    </div>
  )
}
