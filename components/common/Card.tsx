import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className, 
  hover = false,
  padding = 'md'
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverStyle = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md transition-all duration-200',
        paddingStyles[padding],
        hoverStyle,
        className
      )}
    >
      {children}
    </div>
  );
}
