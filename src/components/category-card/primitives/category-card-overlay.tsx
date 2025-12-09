'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

import { useCategoryCard } from '../primitives';

export type CategoryCardOverlayProps = ComponentProps<'div'>;

export function CategoryCardOverlay({ children, className, ...props }: CategoryCardOverlayProps) {
  const { showOverlay } = useCategoryCard();

  return (
    <div
      className={cn(
        'absolute inset-0 flex items-end p-6 @xs:p-8',
        showOverlay &&
          'bg-gradient-to-b from-foreground/0 from-50% via-foreground/0 via-50% to-foreground/50 to-100%',
        className,
      )}
      data-slot="category-card-overlay"
      {...props}
    >
      {children}
    </div>
  );
}
