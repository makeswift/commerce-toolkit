'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CategoryCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function CategoryCardLink({ asChild = false, className, ...props }: CategoryCardLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'absolute inset-0 rounded-[var(--category-card-border-radius,1rem)] ring-offset-[var(--category-card-light-offset,var(--background))]',
        // Focus state
        'focus:outline-none',
        // Focus-visible state
        'focus-visible:ring-2 focus-visible:ring-[var(--category-card-focus,var(--primary))] focus-visible:ring-offset-4',
        className,
      )}
      data-slot="category-card-link"
      {...props}
    />
  );
}
