import { Template } from '@/types';

// All 140+ templates in a single array
export const TEMPLATES: Template[] = [
  // Marriage Biodata (10)
  { id: 'mb-001', name: 'Traditional Hindu', description: 'Classic design with traditional elements and Ganesh symbol', category: 'marriage', style: 'traditional', isPremium: false, tags: ['hindu', 'traditional', 'ganesh'] },
  { id: 'mb-002', name: 'Modern Minimalist', description: 'Clean contemporary layout with minimalist design', category: 'marriage', style: 'modern', isPremium: false, tags: ['modern', 'minimalist', 'clean'] },
  { id: 'mb-003', name: 'Elegant Floral', description: 'Delicate flower borders and botanical elements', category: 'marriage', style: 'elegant', isPremium: false, tags: ['floral', 'elegant', 'botanical'] },
  { id: 'mb-004', name: 'Royal Gold', description: 'Luxurious golden theme with premium finish', category: 'marriage', style: 'luxury', isPremium: true, tags: ['luxury', 'gold', 'premium'] },
  { id: 'mb-005', name: 'Simple Professional', description: 'No-frills professional format for quick creation', category: 'marriage', style: 'professional', isPremium: false, tags: ['simple', 'professional', 'quick'] },
  { id: 'mb-006', name: 'South Indian Style', description: 'Traditional South Indian design elements', category: 'marriage', style: 'traditional', isPremium: false, tags: ['south-indian', 'traditional', 'cultural'] },
  { id: 'mb-007', name: 'Punjabi Theme', description: 'Vibrant Punjabi wedding motifs and colors', category: 'marriage', style: 'traditional', isPremium: true, tags: ['punjabi', 'vibrant', 'cultural'] },
  { id: 'mb-008', name: 'Bengali Traditional', description: 'Classic Bengali biodata style with traditional elements', category: 'marriage', style: 'traditional', isPremium: false, tags: ['bengali', 'traditional', 'cultural'] },
  { id: 'mb-009', name: 'Muslim Nikah', description: 'Islamic design elements for nikah ceremonies', category: 'marriage', style: 'traditional', isPremium: false, tags: ['muslim', 'islamic', 'nikah'] },
  { id: 'mb-010', name: 'Christian Wedding', description: 'Cross and dove motifs for Christian weddings', category: 'marriage', style: 'traditional', isPremium: false, tags: ['christian', 'traditional', 'religious'] },

  // Resume/CV (10)
  { id: 'res-001', name: 'ATS-Friendly Resume', description: 'Optimized for applicant tracking systems', category: 'career', style: 'professional', isPremium: false, tags: ['ats', 'professional', 'modern'] },
  { id: 'res-002', name: 'Creative Designer', description: 'Portfolio-style layout for creative professionals', category: 'career', style: 'creative', isPremium: false, tags: ['creative', 'portfolio', 'designer'] },
  { id: 'res-003', name: 'Tech Developer', description: 'Code-focused design for software developers', category: 'career', style: 'modern', isPremium: false, tags: ['tech', 'developer', 'coding'] },
  { id: 'res-004', name: 'Executive CV', description: 'Senior leadership format for executives', category: 'career', style: 'professional', isPremium: true, tags: ['executive', 'leadership', 'senior'] },
  { id: 'res-005', name: 'Modern Minimalist', description: 'Clean typography-focused design', category: 'career', style: 'modern', isPremium: false, tags: ['minimalist', 'clean', 'modern'] },
  { id: 'res-006', name: 'Two Column Layout', description: 'Space-efficient two-column format', category: 'career', style: 'professional', isPremium: false, tags: ['two-column', 'efficient', 'organized'] },
  { id: 'res-007', name: 'Infographic Resume', description: 'Visual skills display with charts', category: 'career', style: 'creative', isPremium: true, tags: ['infographic', 'visual', 'creative'] },
  { id: 'res-008', name: 'Academic CV', description: 'Research and publications focused', category: 'career', style: 'professional', isPremium: false, tags: ['academic', 'research', 'scholarly'] },
  { id: 'res-009', name: 'Fresher Template', description: 'Entry-level and college graduate focused', category: 'career', style: 'modern', isPremium: false, tags: ['fresher', 'entry-level', 'graduate'] },
  { id: 'res-010', name: 'International CV', description: 'Global standard format for international jobs', category: 'career', style: 'professional', isPremium: false, tags: ['international', 'global', 'standard'] },

  // Wedding Invitations (10)
  { id: 'wed-001', name: 'Royal Palace', description: 'Grand palace gates design with royal elements', category: 'marriage', style: 'luxury', isPremium: false, tags: ['royal', 'palace', 'grand'] },
  { id: 'wed-002', name: 'Floral Garden', description: 'Botanical watercolor style with flowers', category: 'marriage', style: 'elegant', isPremium: false, tags: ['floral', 'garden', 'watercolor'] },
  { id: 'wed-003', name: 'Modern Geometric', description: 'Contemporary geometric patterns and shapes', category: 'marriage', style: 'modern', isPremium: false, tags: ['geometric', 'modern', 'contemporary'] },
  { id: 'wed-004', name: 'Traditional Gold', description: 'Classic golden borders and ornaments', category: 'marriage', style: 'traditional', isPremium: true, tags: ['gold', 'traditional', 'classic'] },
  { id: 'wed-005', name: 'Beach Wedding', description: 'Coastal destination theme with beach elements', category: 'marriage', style: 'modern', isPremium: false, tags: ['beach', 'coastal', 'destination'] },
  { id: 'wed-006', name: 'Rustic Barn', description: 'Country vintage style for barn weddings', category: 'marriage', style: 'rustic', isPremium: true, tags: ['rustic', 'barn', 'vintage'] },
  { id: 'wed-007', name: 'Minimalist Chic', description: 'Simple elegant design with modern touch', category: 'marriage', style: 'modern', isPremium: false, tags: ['minimalist', 'chic', 'elegant'] },
  { id: 'wed-008', name: 'Indian Traditional', description: 'Rangoli and mehndi motifs for Indian weddings', category: 'marriage', style: 'traditional', isPremium: false, tags: ['indian', 'rangoli', 'mehndi'] },
  { id: 'wed-009', name: 'Whimsical Fairy Tale', description: 'Storybook romance theme for dream weddings', category: 'marriage', style: 'creative', isPremium: true, tags: ['fairy-tale', 'whimsical', 'romantic'] },
  { id: 'wed-010', name: 'Art Deco Gatsby', description: '1920s glamour style inspired by Great Gatsby', category: 'marriage', style: 'vintage', isPremium: true, tags: ['art-deco', 'gatsby', 'vintage'] },

  // Business Cards (10)
  { id: 'bc-001', name: 'Minimalist Professional', description: 'Clean corporate design for professionals', category: 'business', style: 'professional', isPremium: false, tags: ['minimalist', 'corporate', 'clean'] },
  { id: 'bc-002', name: 'Creative Designer', description: 'Bold artistic layout for creatives', category: 'business', style: 'creative', isPremium: false, tags: ['creative', 'artistic', 'bold'] },
  { id: 'bc-003', name: 'Tech Startup', description: 'Modern tech aesthetic for startups', category: 'business', style: 'modern', isPremium: false, tags: ['tech', 'startup', 'modern'] },
  { id: 'bc-004', name: 'Elegant Black', description: 'Elegant monochrome design', category: 'business', style: 'elegant', isPremium: false, tags: ['black', 'monochrome', 'elegant'] },
  { id: 'bc-005', name: 'Luxury Gold Foil', description: 'Premium metallic gold finish', category: 'business', style: 'luxury', isPremium: true, tags: ['luxury', 'gold', 'premium'] },
  { id: 'bc-006', name: 'Photographer Card', description: 'Portfolio showcase style for photographers', category: 'business', style: 'creative', isPremium: true, tags: ['photographer', 'portfolio', 'visual'] },
  { id: 'bc-007', name: 'Restaurant/Cafe', description: 'Food business theme for eateries', category: 'business', style: 'creative', isPremium: false, tags: ['restaurant', 'food', 'cafe'] },
  { id: 'bc-008', name: 'Real Estate Agent', description: 'Property professional design', category: 'business', style: 'professional', isPremium: false, tags: ['real-estate', 'property', 'professional'] },
  { id: 'bc-009', name: 'Consultant Card', description: 'Professional services consulting', category: 'business', style: 'professional', isPremium: false, tags: ['consultant', 'professional', 'services'] },
  { id: 'bc-010', name: 'Vertical Modern', description: 'Unique portrait format design', category: 'business', style: 'modern', isPremium: false, tags: ['vertical', 'unique', 'modern'] },

  // Certificates (10)
  { id: 'cert-001', name: 'Achievement Award', description: 'Classic border with official seal', category: 'business', style: 'traditional', isPremium: false, tags: ['achievement', 'award', 'classic'] },
  { id: 'cert-002', name: 'Course Completion', description: 'Educational certification design', category: 'business', style: 'professional', isPremium: false, tags: ['course', 'education', 'completion'] },
  { id: 'cert-003', name: 'Participation Certificate', description: 'Event attendance proof', category: 'business', style: 'professional', isPremium: false, tags: ['participation', 'event', 'attendance'] },
  { id: 'cert-004', name: 'Excellence Award', description: 'Premium recognition certificate', category: 'business', style: 'luxury', isPremium: true, tags: ['excellence', 'premium', 'recognition'] },
  { id: 'cert-005', name: 'Sports Championship', description: 'Athletic achievement certificate', category: 'business', style: 'modern', isPremium: false, tags: ['sports', 'championship', 'athletic'] },
  { id: 'cert-006', name: 'Employee Recognition', description: 'Workplace appreciation certificate', category: 'business', style: 'professional', isPremium: false, tags: ['employee', 'recognition', 'workplace'] },
  { id: 'cert-007', name: 'Training Certificate', description: 'Skill development proof', category: 'business', style: 'professional', isPremium: false, tags: ['training', 'skill', 'development'] },
  { id: 'cert-008', name: 'Modern Minimalist', description: 'Contemporary clean design', category: 'business', style: 'modern', isPremium: true, tags: ['minimalist', 'modern', 'clean'] },
  { id: 'cert-009', name: 'Elegant Script', description: 'Calligraphy style certificate', category: 'business', style: 'elegant', isPremium: true, tags: ['elegant', 'script', 'calligraphy'] },
  { id: 'cert-010', name: 'Corporate Professional', description: 'Business certification design', category: 'business', style: 'professional', isPremium: false, tags: ['corporate', 'business', 'professional'] },

  // ID Cards (10)
  { id: 'id-001', name: 'Corporate Employee', description: 'Professional corporate staff card', category: 'business', style: 'professional', isPremium: false, tags: ['corporate', 'employee', 'staff'] },
  { id: 'id-002', name: 'Student ID', description: 'School and college identification', category: 'business', style: 'modern', isPremium: false, tags: ['student', 'school', 'college'] },
  { id: 'id-003', name: 'Visitor Pass', description: 'Temporary access badge', category: 'business', style: 'professional', isPremium: false, tags: ['visitor', 'temporary', 'access'] },
  { id: 'id-004', name: 'Event Badge', description: 'Conference and seminar pass', category: 'business', style: 'modern', isPremium: false, tags: ['event', 'conference', 'badge'] },
  { id: 'id-005', name: 'Membership Card', description: 'Club or organization member card', category: 'business', style: 'professional', isPremium: false, tags: ['membership', 'club', 'organization'] },
  { id: 'id-006', name: 'Security Pass', description: 'High-security clearance badge', category: 'business', style: 'professional', isPremium: true, tags: ['security', 'clearance', 'access'] },
  { id: 'id-007', name: 'Volunteer ID', description: 'NGO and event volunteer identification', category: 'business', style: 'modern', isPremium: false, tags: ['volunteer', 'ngo', 'event'] },
  { id: 'id-008', name: 'Press Pass', description: 'Media professional credential', category: 'business', style: 'professional', isPremium: true, tags: ['press', 'media', 'journalist'] },
  { id: 'id-009', name: 'Library Card', description: 'Institution access card design', category: 'business', style: 'professional', isPremium: false, tags: ['library', 'institution', 'access'] },
  { id: 'id-010', name: 'Gym Membership', description: 'Fitness center access card', category: 'business', style: 'modern', isPremium: false, tags: ['gym', 'fitness', 'membership'] },
];

// Export all templates (for backwards compatibility)
export const allTemplates = TEMPLATES;

// Helper functions to filter templates by category
export const getTemplatesByCategory = (category: string) => {
  return TEMPLATES.filter(t => t.category === category);
};

export const getTemplateById = (id: string) => {
  return TEMPLATES.find(t => t.id === id);
};

// Category-specific exports
export const marriageBiodataTemplates = TEMPLATES.filter(t => 
  t.id.startsWith('mb-')
);

export const resumeTemplates = TEMPLATES.filter(t => 
  t.id.startsWith('res-')
);

export const weddingInvitationTemplates = TEMPLATES.filter(t => 
  t.id.startsWith('wed-')
);

export const businessCardTemplates = TEMPLATES.filter(t => 
  t.id.startsWith('bc-')
);

export const certificateTemplates = TEMPLATES.filter(t => 
  t.id.startsWith('cert-')
);

export const idCardTemplates = TEMPLATES.filter(t => 
  t.id.startsWith('id-')
);
