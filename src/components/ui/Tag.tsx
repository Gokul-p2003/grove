import React from 'react';
import { Category } from '../../types';

interface TagProps {
  children: React.ReactNode;
  category?: Category;
  variant?: 'moss' | 'sky' | 'clay' | 'butter' | 'ink' | 'tomato';
  rotation?: 'none' | 'left' | 'right';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  category,
  variant,
  rotation = 'none',
  className = '',
}) => {
  // Map category to color variant if provided
  const resolvedVariant = variant || (category ? {
    Body: 'moss',
    Mind: 'sky',
    Craft: 'clay',
    Home: 'butter',
  }[category] : 'ink');

  const variantStyles = {
    moss: 'bg-moss-tint text-moss border-moss',
    sky: 'bg-sky-tint text-ink border-ink',
    clay: 'bg-clay-tint text-clay border-clay',
    butter: 'bg-butter-tint text-ink border-butter-dark',
    ink: 'bg-paper-tint text-ink border-ink',
    tomato: 'bg-tomato-tint text-tomato border-tomato',
  }[resolvedVariant as 'moss' | 'sky' | 'clay' | 'butter' | 'ink' | 'tomato'];

  const rotationStyles = {
    none: '',
    left: '-rotate-1',
    right: 'rotate-1',
  }[rotation];

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider border border-ink rounded ${variantStyles} ${rotationStyles} ${className}`}
    >
      {children}
    </span>
  );
};
