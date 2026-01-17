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
        'focus-primary absolute inset-0 rounded-[var(--category-card-radius,1rem)]',
        className,
      )}
      data-slot="category-card-link"
      {...props}
    />
  );
}
