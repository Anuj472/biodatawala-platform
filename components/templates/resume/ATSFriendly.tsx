'use client'

interface TemplateProps {
  data: {
    name?: string
    email?: string
    phone?: string
    location?: string
    linkedin?: string
    website?: string
    summary?: string
    experience?: Array<{company: string, role: string, duration: string, description: string}>
    education?: Array<{school: string, degree: string, year: string}>
    skills?: string
  }
  colors?: {
    primary?: string
  }
}

export default function ATSFriendly({ data = {}, colors = {} }: TemplateProps) {
  const primaryColor = colors.primary || '#1e40af'

  const defaultExperience = data.experience || [
    { company: 'Company Name', role: 'Job Title', duration: '2020 - Present', description: 'Key achievements and responsibilities' }
  ]

  const defaultEducation = data.education || [
    { school: 'University Name', degree: 'Bachelor of Technology', year: '2020' }
  ]

  return (
    <div className="w-full h-full bg-white p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="text-center mb-6 pb-4 border-b-2" style={{ borderColor: primaryColor }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
          {data.name || 'YOUR NAME'}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <span>📧 {data.email || 'your.email@example.com'}</span>
          <span>📱 {data.phone || '+91 98765 43210'}</span>
          <span>📍 {data.location || 'City, Country'}</span>
        </div>
        {(data.linkedin || data.website) && (
          <div className="flex flex-wrap justify-center gap-4 text-sm mt-2">
            {data.linkedin && <span>🔗 {data.linkedin}</span>}
            {data.website && <span>🌐 {data.website}</span>}
          </div>
        )}
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {data.summary || 'Results-driven professional with X years of experience in [industry/field]. Proven track record of achieving measurable results and driving business growth.'}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor }}>
          WORK EXPERIENCE
        </h2>
        {defaultExperience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-lg">{exp.role}</h3>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <p className="text-gray-700 font-medium mb-1">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>{exp.description}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor }}>
          EDUCATION
        </h2>
        {defaultEducation.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">{edu.degree}</h3>
              <span className="text-sm text-gray-600">{edu.year}</span>
            </div>
            <p className="text-gray-700">{edu.school}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-bold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
          SKILLS
        </h2>
        <p className="text-gray-700">
          {data.skills || 'JavaScript, React, Node.js, Python, SQL, Git, AWS, Agile, Problem Solving'}
        </p>
      </div>
    </div>
  )
}
