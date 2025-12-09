'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { useCategoryCard } from '@/components/category-card';
import { cn } from '@/lib';

export type CategoryCardIconProps = ComponentProps<typeof Slot>;

export function CategoryCardIcon({ className, children, ...props }: CategoryCardIconProps) {
  const { iconColorScheme } = useCategoryCard();

  return (
    <Slot
      className={cn(
        'absolute right-5 top-5 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5',
        {
          light: 'text-[var(--category-card-light-icon,hsl(var(--foreground)))]',
          dark: 'text-[var(--category-card-dark-icon,hsl(var(--background)))]',
        }[iconColorScheme],
        className,
      )}
      data-slot="category-card-icon"
      {...props}
    >
      {children}
    </Slot>
  );
}
