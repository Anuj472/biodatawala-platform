'use client'

interface MarriageBiodataTemplateProps {
  data: Record<string, any>
  templateId: string
}

export default function MarriageBiodataTemplate({ data, templateId }: MarriageBiodataTemplateProps) {
  const primaryColor = data.primaryColor || '#1e40af'
  const fontFamily = data.fontFamily || 'Inter'

  // Different designs based on template ID
  const renderTemplate = () => {
    if (templateId === 'mb-001') {
      // Traditional Hindu Design
      return (
        <div className="h-full p-12 bg-gradient-to-br from-orange-50 to-yellow-50" style={{ fontFamily }}>
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🕉️</div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
              ॐ Marriage Biodata ॐ
            </h1>
            <div className="w-32 h-1 bg-orange-400 mx-auto rounded"></div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-orange-200">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👤
              </div>
              <h2 className="text-3xl font-bold" style={{ color: primaryColor }}>
                {data.fullName || 'Full Name'}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: primaryColor }}>Personal Details</h3>
                <p className="mb-2"><strong>Date of Birth:</strong> {data.dateOfBirth || 'DD/MM/YYYY'}</p>
                <p className="mb-2"><strong>Birth Time:</strong> {data.birthTime || 'HH:MM AM/PM'}</p>
                <p className="mb-2"><strong>Birth Place:</strong> {data.birthPlace || 'City, State'}</p>
                <p className="mb-2"><strong>Height:</strong> {data.height || '5\'8"'}</p>
                <p className="mb-2"><strong>Complexion:</strong> {data.complexion || 'Fair'}</p>
                <p className="mb-2"><strong>Blood Group:</strong> {data.bloodGroup || 'B+'}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: primaryColor }}>Family Details</h3>
                <p className="mb-2"><strong>Father:</strong> {data.fatherName || "Father's Name"}</p>
                <p className="mb-2"><strong>Occupation:</strong> {data.fatherOccupation || 'Occupation'}</p>
                <p className="mb-2"><strong>Mother:</strong> {data.motherName || "Mother's Name"}</p>
                <p className="mb-2"><strong>Occupation:</strong> {data.motherOccupation || 'Occupation'}</p>
                <p className="mb-2"><strong>Siblings:</strong> {data.siblings || '1 Brother, 1 Sister'}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: primaryColor }}>Education & Career</h3>
                <p className="mb-2"><strong>Education:</strong> {data.education || 'B.Tech'}</p>
                <p className="mb-2"><strong>Occupation:</strong> {data.occupation || 'Software Engineer'}</p>
                <p className="mb-2"><strong>Company:</strong> {data.company || 'Company Name'}</p>
                <p className="mb-2"><strong>Income:</strong> {data.income || '10-15 LPA'}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: primaryColor }}>Contact</h3>
                <p className="mb-2"><strong>Phone:</strong> {data.phone || '+91 98765 43210'}</p>
                <p className="mb-2"><strong>Email:</strong> {data.email || 'email@example.com'}</p>
                <p className="mb-2"><strong>Address:</strong> {data.address || 'City, State, PIN'}</p>
              </div>
            </div>

            {data.hobbies && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Hobbies & Interests</h3>
                <p className="text-sm">{data.hobbies}</p>
              </div>
            )}

            {data.expectations && (
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Partner Expectations</h3>
                <p className="text-sm">{data.expectations}</p>
              </div>
            )}
          </div>
        </div>
      )
    }

    if (templateId === 'mb-002') {
      // Modern Minimalist Design
      return (
        <div className="h-full p-12 bg-white" style={{ fontFamily }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2" style={{ borderColor: primaryColor }}>
              <div>
                <h1 className="text-5xl font-bold mb-1" style={{ color: primaryColor }}>
                  {data.fullName || 'Full Name'}
                </h1>
                <p className="text-gray-600 text-lg">Marriage Biodata</p>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
                👤
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>• Personal Information</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div className="flex"><span className="w-32 text-gray-600">Date of Birth:</span><span className="font-medium">{data.dateOfBirth || 'DD/MM/YYYY'}</span></div>
                  <div className="flex"><span className="w-32 text-gray-600">Height:</span><span className="font-medium">{data.height || '5\'8"'}</span></div>
                  <div className="flex"><span className="w-32 text-gray-600">Birth Time:</span><span className="font-medium">{data.birthTime || 'HH:MM'}</span></div>
                  <div className="flex"><span className="w-32 text-gray-600">Complexion:</span><span className="font-medium">{data.complexion || 'Fair'}</span></div>
                  <div className="flex"><span className="w-32 text-gray-600">Birth Place:</span><span className="font-medium">{data.birthPlace || 'City'}</span></div>
                  <div className="flex"><span className="w-32 text-gray-600">Blood Group:</span><span className="font-medium">{data.bloodGroup || 'B+'}</span></div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>• Education & Career</h2>
                <div className="space-y-2 text-sm">
                  <p><strong>Education:</strong> {data.education || 'B.Tech Computer Science'}</p>
                  <p><strong>Occupation:</strong> {data.occupation || 'Software Engineer'}</p>
                  <p><strong>Company:</strong> {data.company || 'Tech Company'}</p>
                  <p><strong>Annual Income:</strong> {data.income || '10-15 LPA'}</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>• Family Background</h2>
                <div className="space-y-2 text-sm">
                  <p><strong>Father:</strong> {data.fatherName || "Father's Name"} ({data.fatherOccupation || 'Occupation'})</p>
                  <p><strong>Mother:</strong> {data.motherName || "Mother's Name"} ({data.motherOccupation || 'Occupation'})</p>
                  <p><strong>Siblings:</strong> {data.siblings || '1 Brother, 1 Sister'}</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>• Contact Details</h2>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> {data.phone || '+91 98765 43210'}</p>
                  <p><strong>Email:</strong> {data.email || 'email@example.com'}</p>
                  <p><strong>Address:</strong> {data.address || 'Full Address'}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )
    }

    // Default template
    return (
      <div className="h-full p-12 bg-gradient-to-br from-blue-50 to-purple-50" style={{ fontFamily }}>
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4" style={{ color: primaryColor }}>
            {data.fullName || 'Your Name Here'}
          </h1>
          <p className="text-lg text-gray-600">Marriage Biodata - {templateId}</p>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <p className="text-gray-600 text-center">Fill in the sidebar to see your biodata come to life!</p>
        </div>
      </div>
    )
  }

  return renderTemplate()
}
