'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { useCategoryCard } from '@/components/category-card';
import { cn } from '@/lib';

export interface CategoryCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function CategoryCardLink({ asChild = false, className, ...props }: CategoryCardLinkProps) {
  const { textColorScheme } = useCategoryCard();

  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'absolute inset-0 rounded-[var(--category-card-border-radius,1rem)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--category-card-focus,hsl(var(--primary)))] focus-visible:ring-offset-4',
        {
          light: 'ring-offset-[var(--category-card-light-offset,hsl(var(--background)))]',
          dark: 'ring-offset-[var(--category-card-dark-offset,hsl(var(--foreground)))]',
        }[textColorScheme],
        className,
      )}
      data-slot="category-card-link"
      {...props}
    />
  );
}
