'use client'

interface FieldsProps {
  data: Record<string, any>
  onChange: (field: string, value: any) => void
}

export default function MarriageBiodataFields({ data, onChange }: FieldsProps) {
  return (
    <div className="space-y-4">
      {/* Personal Information */}
      <div className="pb-4 border-b">
        <h3 className="font-bold text-lg mb-3 text-gray-900">👤 Personal Information</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              value={data.name || ''}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="Enter full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="text"
                value={data.age || ''}
                onChange={(e) => onChange('age', e.target.value)}
                placeholder="25"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
              <input
                type="text"
                value={data.height || ''}
                onChange={(e) => onChange('height', e.target.value)}
                placeholder="5'6&quot;"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
              <input
                type="text"
                value={data.religion || ''}
                onChange={(e) => onChange('religion', e.target.value)}
                placeholder="Hindu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Caste</label>
              <input
                type="text"
                value={data.caste || ''}
                onChange={(e) => onChange('caste', e.target.value)}
                placeholder="Brahmin"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={data.location || ''}
              onChange={(e) => onChange('location', e.target.value)}
              placeholder="City, State"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Education & Career */}
      <div className="pb-4 border-b">
        <h3 className="font-bold text-lg mb-3 text-gray-900">🎓 Education & Career</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
            <input
              type="text"
              value={data.education || ''}
              onChange={(e) => onChange('education', e.target.value)}
              placeholder="B.Tech in Computer Science"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
            <input
              type="text"
              value={data.occupation || ''}
              onChange={(e) => onChange('occupation', e.target.value)}
              placeholder="Software Engineer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income</label>
            <input
              type="text"
              value={data.income || ''}
              onChange={(e) => onChange('income', e.target.value)}
              placeholder="₹ 8-10 Lakhs"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="pb-4 border-b">
        <h3 className="font-bold text-lg mb-3 text-gray-900">👨‍👩‍👧 Family Details</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Father&apos;s Name</label>
            <input
              type="text"
              value={data.fatherName || ''}
              onChange={(e) => onChange('fatherName', e.target.value)}
              placeholder="Father's name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mother&apos;s Name</label>
            <input
              type="text"
              value={data.motherName || ''}
              onChange={(e) => onChange('motherName', e.target.value)}
              placeholder="Mother's name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Siblings</label>
            <input
              type="text"
              value={data.siblings || ''}
              onChange={(e) => onChange('siblings', e.target.value)}
              placeholder="1 Brother, 1 Sister"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="pb-4 border-b">
        <h3 className="font-bold text-lg mb-3 text-gray-900">📞 Contact Information</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              value={data.phone || ''}
              onChange={(e) => onChange('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={data.email || ''}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              value={data.address || ''}
              onChange={(e) => onChange('address', e.target.value)}
              placeholder="Full address"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Partner Expectations */}
      <div>
        <h3 className="font-bold text-lg mb-3 text-gray-900">💑 Partner Expectations</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expectations</label>
          <textarea
            value={data.expectations || ''}
            onChange={(e) => onChange('expectations', e.target.value)}
            placeholder="Describe your partner expectations..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      {/* About Me (for modern templates) */}
      <div>
        <h3 className="font-bold text-lg mb-3 text-gray-900">✍️ About Me</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            value={data.about || ''}
            onChange={(e) => onChange('about', e.target.value)}
            placeholder="Write about yourself..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Interests */}
      <div>
        <h3 className="font-bold text-lg mb-3 text-gray-900">✨ Interests & Hobbies</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hobbies</label>
          <input
            type="text"
            value={data.interests || ''}
            onChange={(e) => onChange('interests', e.target.value)}
            placeholder="Reading, Traveling, Music"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}
