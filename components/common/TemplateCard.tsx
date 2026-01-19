import Link from 'next/link';
import { Template } from '@/types';
import Button from './Button';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Template Preview Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {template.isPremium && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ⭐ Premium
          </div>
        )}
        
        {/* Placeholder for template preview */}
        <div className="text-center p-6">
          <div className="text-6xl mb-4">{getTemplateIcon(template.category)}</div>
          <p className="text-gray-600 font-medium">{template.style}</p>
        </div>
      </div>

      {/* Template Details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {template.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link href={`/editor/${template.id}`} className="flex-1">
            <Button className="w-full" size="sm">
              Use Template
            </Button>
          </Link>
          <Link href={`/template/${template.id}`}>
            <Button variant="outline" size="sm">
              Preview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function getTemplateIcon(category: string): string {
  const icons: Record<string, string> = {
    marriage: '💍',
    career: '💼',
    business: '🎯',
    creative: '🎨',
  };
  return icons[category] || '📄';
}
