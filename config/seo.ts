import { SEOMetadata } from '@/types';

export const defaultSEO: SEOMetadata = {
  title: 'BioDatawala - Free Marriage Biodata, Resume & Document Maker',
  description:
    'Create professional marriage biodata, resumes, wedding cards, and business documents online. 140+ free templates. Download instantly as PDF/JPG.',
  keywords: [
    'marriage biodata maker',
    'resume builder',
    'wedding invitation',
    'biodata format',
    'free CV maker',
  ],
  canonical: 'https://biodatawala.in',
};

export const serviceSEO: Record<string, SEOMetadata> = {
  'marriage-biodata-maker': {
    title: 'Marriage Biodata Maker Online Free | Hindu, Muslim, Christian Formats',
    description:
      'Create beautiful marriage biodata online for free. Choose from traditional Hindu, Muslim, Christian formats. Download as PDF. 10+ professional templates.',
    keywords: [
      'marriage biodata maker',
      'Hindu biodata format',
      'Muslim nikah biodata',
      'Christian marriage resume',
      'shaadi biodata template',
    ],
    canonical: 'https://biodatawala.in/marriage-biodata-maker',
  },
  'resume-cv-maker': {
    title: 'Free Resume Builder Online | ATS-Friendly CV Maker for India',
    description:
      'Create professional ATS-friendly resumes online. Free resume templates for freshers and experienced. Download as PDF. Get hired faster.',
    keywords: [
      'resume builder India',
      'fresher resume format',
      'ATS resume template',
      'professional CV maker',
      'free resume creator',
    ],
    canonical: 'https://biodatawala.in/resume-cv-maker',
  },
  // Add more services...
};
