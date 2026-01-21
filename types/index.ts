// Service Types
export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  templateCount: number;
  category: ServiceCategory;
}

export type ServiceCategory = 'marriage' | 'career' | 'business' | 'personal';

// Template Types
export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  style: TemplateStyle;
  isPremium: boolean;
  tags: string[];
  preview?: string; // Emoji preview
  thumbnail?: string; // Image thumbnail URL
  previewUrl?: string; // Full preview URL
  serviceId?: number; // Optional for backwards compatibility
}

export type TemplateStyle = 
  | 'professional'
  | 'modern'
  | 'classic'
  | 'creative'
  | 'elegant'
  | 'minimalist'
  | 'traditional'
  | 'colorful'
  | 'corporate'
  | 'premium'
  | 'luxury'
  | 'rustic'
  | 'vintage';

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Document Types
export interface Document {
  id: string;
  userId: string;
  templateId: string;
  title: string;
  content: any;
  format: DocumentFormat;
  createdAt: Date;
  updatedAt: Date;
}

export type DocumentFormat = 'pdf' | 'jpg' | 'png';

// Editor Types
export interface EditorState {
  templateId: string;
  content: any;
  history: EditorHistory[];
  currentIndex: number;
}

export interface EditorHistory {
  action: string;
  timestamp: Date;
  state: any;
}

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}
