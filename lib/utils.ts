import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date utility
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Slugify text
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Truncate text
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Generate SEO metadata
export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}) {
  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonical || 'https://biodatawala.in',
    },
    openGraph: {
      title,
      description,
      url: canonical || 'https://biodatawala.in',
      siteName: 'BioDatawala',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
