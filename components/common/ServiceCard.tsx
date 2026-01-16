import Link from 'next/link';
import Card from './Card';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/${service.slug}`}>
      <Card hover padding="md">
        <div className="text-center">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
          <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {service.templateCount}+ Templates
          </span>
        </div>
      </Card>
    </Link>
  );
}
