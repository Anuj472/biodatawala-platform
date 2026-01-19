// Define editable fields for each template category

export interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'date' | 'select' | 'radio';
  placeholder?: string;
  options?: string[];
  required?: boolean;
  maxLength?: number;
}

export interface TemplateFieldGroup {
  title: string;
  fields: TemplateField[];
}

// Marriage Biodata Fields
export const marriageBiodataFields: TemplateFieldGroup[] = [
  {
    title: 'Personal Information',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter full name', required: true },
      { id: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
      { id: 'birthTime', label: 'Time of Birth', type: 'text', placeholder: 'e.g., 10:30 AM' },
      { id: 'birthPlace', label: 'Place of Birth', type: 'text', placeholder: 'City, State' },
      { id: 'height', label: 'Height', type: 'text', placeholder: "e.g., 5'8\"" },
      { id: 'complexion', label: 'Complexion', type: 'select', options: ['Fair', 'Wheatish', 'Dark', 'Very Fair'] },
      { id: 'bloodGroup', label: 'Blood Group', type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
    ]
  },
  {
    title: 'Family Details',
    fields: [
      { id: 'fatherName', label: "Father's Name", type: 'text', placeholder: 'Enter father\'s name' },
      { id: 'fatherOccupation', label: "Father's Occupation", type: 'text', placeholder: 'Occupation' },
      { id: 'motherName', label: "Mother's Name", type: 'text', placeholder: 'Enter mother\'s name' },
      { id: 'motherOccupation', label: "Mother's Occupation", type: 'text', placeholder: 'Occupation' },
      { id: 'siblings', label: 'Siblings', type: 'text', placeholder: 'e.g., 1 Brother, 1 Sister' },
    ]
  },
  {
    title: 'Education & Career',
    fields: [
      { id: 'education', label: 'Highest Education', type: 'text', placeholder: 'e.g., B.Tech Computer Science', required: true },
      { id: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Current job title', required: true },
      { id: 'company', label: 'Company/Organization', type: 'text', placeholder: 'Company name' },
      { id: 'income', label: 'Annual Income', type: 'text', placeholder: 'e.g., 10-15 LPA' },
    ]
  },
  {
    title: 'Contact Information',
    fields: [
      { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', required: true },
      { id: 'address', label: 'Address', type: 'textarea', placeholder: 'Full address', maxLength: 200 },
    ]
  },
  {
    title: 'Additional Information',
    fields: [
      { id: 'hobbies', label: 'Hobbies & Interests', type: 'textarea', placeholder: 'List your hobbies', maxLength: 200 },
      { id: 'expectations', label: 'Partner Expectations', type: 'textarea', placeholder: 'Describe your expectations', maxLength: 300 },
    ]
  }
];

// Resume/CV Fields
export const resumeFields: TemplateFieldGroup[] = [
  {
    title: 'Personal Information',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
      { id: 'jobTitle', label: 'Job Title/Role', type: 'text', placeholder: 'e.g., Senior Software Engineer', required: true },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com', required: true },
      { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { id: 'location', label: 'Location', type: 'text', placeholder: 'City, State' },
      { id: 'linkedin', label: 'LinkedIn', type: 'text', placeholder: 'linkedin.com/in/yourprofile' },
      { id: 'portfolio', label: 'Portfolio/Website', type: 'text', placeholder: 'www.yourportfolio.com' },
    ]
  },
  {
    title: 'Professional Summary',
    fields: [
      { id: 'summary', label: 'Professional Summary', type: 'textarea', placeholder: 'Brief overview of your experience and skills...', maxLength: 500, required: true },
    ]
  },
  {
    title: 'Work Experience',
    fields: [
      { id: 'experience1Title', label: 'Job Title 1', type: 'text', placeholder: 'e.g., Software Engineer' },
      { id: 'experience1Company', label: 'Company 1', type: 'text', placeholder: 'Company name' },
      { id: 'experience1Duration', label: 'Duration 1', type: 'text', placeholder: 'Jan 2020 - Present' },
      { id: 'experience1Description', label: 'Description 1', type: 'textarea', placeholder: 'Key responsibilities and achievements...', maxLength: 300 },
    ]
  },
  {
    title: 'Education',
    fields: [
      { id: 'degree', label: 'Degree', type: 'text', placeholder: 'e.g., B.Tech Computer Science', required: true },
      { id: 'university', label: 'University', type: 'text', placeholder: 'University name', required: true },
      { id: 'graduationYear', label: 'Year', type: 'text', placeholder: '2020' },
    ]
  },
  {
    title: 'Skills',
    fields: [
      { id: 'technicalSkills', label: 'Technical Skills', type: 'textarea', placeholder: 'React, Node.js, Python, etc.', maxLength: 300 },
      { id: 'softSkills', label: 'Soft Skills', type: 'textarea', placeholder: 'Leadership, Communication, etc.', maxLength: 200 },
    ]
  }
];

// Wedding Invitation Fields
export const weddingInvitationFields: TemplateFieldGroup[] = [
  {
    title: 'Couple Information',
    fields: [
      { id: 'brideName', label: "Bride's Name", type: 'text', placeholder: 'Bride full name', required: true },
      { id: 'groomName', label: "Groom's Name", type: 'text', placeholder: 'Groom full name', required: true },
    ]
  },
  {
    title: 'Event Details',
    fields: [
      { id: 'weddingDate', label: 'Wedding Date', type: 'date', required: true },
      { id: 'weddingTime', label: 'Wedding Time', type: 'text', placeholder: 'e.g., 10:00 AM' },
      { id: 'venue', label: 'Venue Name', type: 'text', placeholder: 'e.g., Grand Palace Hotel', required: true },
      { id: 'venueAddress', label: 'Venue Address', type: 'textarea', placeholder: 'Full venue address', maxLength: 200 },
    ]
  },
  {
    title: 'Additional Events',
    fields: [
      { id: 'mehndiFunctions', label: 'Mehndi/Haldi Date', type: 'text', placeholder: 'Date & Time' },
      { id: 'receptionDate', label: 'Reception Date', type: 'text', placeholder: 'Date & Time' },
    ]
  },
  {
    title: 'Family Details',
    fields: [
      { id: 'brideParents', label: "Bride's Parents", type: 'text', placeholder: 'Parents names' },
      { id: 'groomParents', label: "Groom's Parents", type: 'text', placeholder: 'Parents names' },
    ]
  },
  {
    title: 'Contact Information',
    fields: [
      { id: 'contactPhone', label: 'Contact Phone', type: 'tel', placeholder: '+91 98765 43210' },
      { id: 'rsvpDetails', label: 'RSVP Details', type: 'text', placeholder: 'RSVP by date' },
    ]
  },
  {
    title: 'Special Message',
    fields: [
      { id: 'invitationMessage', label: 'Invitation Message', type: 'textarea', placeholder: 'Your special invitation message...', maxLength: 300 },
    ]
  }
];

// Business Card Fields
export const businessCardFields: TemplateFieldGroup[] = [
  {
    title: 'Personal Information',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
      { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'e.g., CEO, Designer', required: true },
    ]
  },
  {
    title: 'Company Information',
    fields: [
      { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Company name', required: true },
      { id: 'tagline', label: 'Company Tagline', type: 'text', placeholder: 'Brief tagline' },
    ]
  },
  {
    title: 'Contact Details',
    fields: [
      { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'your@company.com', required: true },
      { id: 'website', label: 'Website', type: 'text', placeholder: 'www.company.com' },
      { id: 'address', label: 'Address', type: 'text', placeholder: 'City, State' },
    ]
  },
  {
    title: 'Social Media',
    fields: [
      { id: 'linkedin', label: 'LinkedIn', type: 'text', placeholder: 'linkedin.com/in/profile' },
      { id: 'twitter', label: 'Twitter', type: 'text', placeholder: '@yourhandle' },
      { id: 'instagram', label: 'Instagram', type: 'text', placeholder: '@yourhandle' },
    ]
  }
];

// Certificate Fields
export const certificateFields: TemplateFieldGroup[] = [
  {
    title: 'Recipient Information',
    fields: [
      { id: 'recipientName', label: 'Recipient Name', type: 'text', placeholder: 'Name of recipient', required: true },
    ]
  },
  {
    title: 'Certificate Details',
    fields: [
      { id: 'certificateTitle', label: 'Certificate Title', type: 'text', placeholder: 'e.g., Certificate of Achievement', required: true },
      { id: 'description', label: 'Description', type: 'textarea', placeholder: 'For what achievement...', maxLength: 300, required: true },
      { id: 'dateIssued', label: 'Date Issued', type: 'date', required: true },
      { id: 'certificateNumber', label: 'Certificate Number', type: 'text', placeholder: 'e.g., CERT-2024-001' },
    ]
  },
  {
    title: 'Issuer Information',
    fields: [
      { id: 'organizationName', label: 'Organization Name', type: 'text', placeholder: 'Issuing organization', required: true },
      { id: 'signatoryName', label: 'Signatory Name', type: 'text', placeholder: 'Name of person signing' },
      { id: 'signatoryTitle', label: 'Signatory Title', type: 'text', placeholder: 'e.g., Director, CEO' },
    ]
  }
];

// ID Card Fields
export const idCardFields: TemplateFieldGroup[] = [
  {
    title: 'Personal Information',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Full name', required: true },
      { id: 'designation', label: 'Designation', type: 'text', placeholder: 'Job title/Role', required: true },
      { id: 'employeeId', label: 'ID Number', type: 'text', placeholder: 'e.g., EMP001', required: true },
      { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
      { id: 'bloodGroup', label: 'Blood Group', type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
    ]
  },
  {
    title: 'Organization Details',
    fields: [
      { id: 'organizationName', label: 'Organization', type: 'text', placeholder: 'Organization name', required: true },
      { id: 'department', label: 'Department', type: 'text', placeholder: 'Department name' },
    ]
  },
  {
    title: 'Contact Information',
    fields: [
      { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'email@organization.com' },
      { id: 'address', label: 'Address', type: 'textarea', placeholder: 'Address', maxLength: 150 },
    ]
  },
  {
    title: 'Validity',
    fields: [
      { id: 'issueDate', label: 'Issue Date', type: 'date', required: true },
      { id: 'expiryDate', label: 'Expiry Date', type: 'date' },
    ]
  }
];

// Function to get fields by category
export function getFieldsByCategory(category: string): TemplateFieldGroup[] {
  const categoryMap: Record<string, TemplateFieldGroup[]> = {
    marriage: marriageBiodataFields,
    career: resumeFields,
    business: businessCardFields,
  };
  
  return categoryMap[category] || marriageBiodataFields;
}

// Function to get fields by template ID prefix
export function getFieldsByTemplateId(templateId: string): TemplateFieldGroup[] {
  if (templateId.startsWith('mb-') || templateId.startsWith('wed-')) {
    return templateId.startsWith('mb-') ? marriageBiodataFields : weddingInvitationFields;
  } else if (templateId.startsWith('res-')) {
    return resumeFields;
  } else if (templateId.startsWith('bc-')) {
    return businessCardFields;
  } else if (templateId.startsWith('cert-')) {
    return certificateFields;
  } else if (templateId.startsWith('id-')) {
    return idCardFields;
  }
  
  return marriageBiodataFields;
}
