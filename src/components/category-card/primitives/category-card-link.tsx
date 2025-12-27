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
        'absolute inset-0 rounded-[var(--category-card-border-radius,1rem)]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--category-card-focus,var(--brand))]',
        className,
      )}
      data-slot="category-card-link"
      {...props}
    />
  );
}
