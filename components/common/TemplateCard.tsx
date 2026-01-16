import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import { Template } from '@/types';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card hover padding="sm" className="group">
      <div className="relative aspect-[3/4] mb-3 bg-gray-100 rounded-md overflow-hidden">
        {/* Placeholder for template thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="space-x-2">
            <Link
              href={`/template/${template.id}/preview`}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 inline-block"
            >
              Preview
            </Link>
            <Link
              href={`/template/${template.id}/edit`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 inline-block"
            >
              Use Template
            </Link>
          </div>
        </div>
        
        {template.isPremium && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
            PRO
          </div>
        )}
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">{template.name}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{template.description}</p>
        <div className="flex flex-wrap gap-1">
          {template.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
