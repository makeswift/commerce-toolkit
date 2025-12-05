'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

import { useCategoryCard } from '../primitives';

export type CategoryCardTitleProps = ComponentProps<'h3'>;

export function CategoryCardTitle({ children, className, ...props }: CategoryCardTitleProps) {
  const { textSize, textColorScheme } = useCategoryCard();

  return (
    <h3
      className={cn(
        'font-medium leading-tight',
        {
          small: 'text-lg tracking-normal @xs:text-xl',
          medium: 'text-xl tracking-normal @xs:text-2xl',
          large: 'text-2xl tracking-tight @xs:text-3xl',
          'x-large': 'text-3xl tracking-tight @xs:text-4xl',
        }[textSize],
        {
          light: 'text-[var(--category-card-light-text,hsl(var(--foreground)))]',
          dark: 'text-[var(--category-card-dark-text,hsl(var(--background)))]',
        }[textColorScheme],
        className,
      )}
      data-slot="category-card-title"
      {...props}
    >
      {children}
    </h3>
  );
}
