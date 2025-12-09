'use client';

import type { ComponentProps } from 'react';

import { useCategoryCard } from '@/components/category-card';
import { cn } from '@/lib';

export type CategoryCardThumbnailProps = ComponentProps<'div'>;

export function CategoryCardThumbnail({
  className,
  children,
  ...props
}: CategoryCardThumbnailProps) {
  const { textColorScheme, aspectRatio } = useCategoryCard();

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[inherit] group-focus:ring-[var(--category-card-focus,hsl(var(--primary)))] group-focus-visible:ring-2',
        {
          light: 'bg-[var(--category-card-light-background,hsl(var(--contrast-100)))]',
          dark: 'bg-[var(--category-card-dark-background,hsl(var(--contrast-500)))]',
        }[textColorScheme],
        {
          '5:6': 'aspect-[5/6]',
          '3:4': 'aspect-[3/4]',
          '1:1': 'aspect-square',
        }[aspectRatio],
        className,
      )}
      data-slot="category-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
