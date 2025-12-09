'use client';

import type { ComponentProps } from 'react';

import { useCategoryCard } from '@/components/category-card';
import { cn } from '@/lib';

export type CategoryCardFallbackProps = ComponentProps<'div'>;

export function CategoryCardFallback({ className, children, ...props }: CategoryCardFallbackProps) {
  const { textColorScheme } = useCategoryCard();

  return (
    <div
      className={cn(
        'break-words p-4 text-4xl font-bold leading-none tracking-tight transition-transform duration-500 ease-out group-hover:scale-105',
        {
          light: '[color:color-mix(in_oklab,hsl(var(--foreground))_30%,transparent)]',
          dark: '[color:color-mix(in_oklab,hsl(var(--background))_30%,transparent)]',
        }[textColorScheme],
        className,
      )}
      data-slot="category-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
