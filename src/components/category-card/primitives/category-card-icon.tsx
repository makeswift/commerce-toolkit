'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardIconProps = ComponentProps<typeof Slot>;

export function CategoryCardIcon({ className, children, ...props }: CategoryCardIconProps) {
  return (
    <Slot
      className={cn(
        'absolute right-5 top-5 z-10 text-[var(--category-card-light-icon,var(--foreground))] transition-transform duration-700 ease-out',
        // Group hover state
        'group-hover/category-card:-translate-y-1.5 group-hover/category-card:translate-x-1.5',
        className,
      )}
      data-slot="category-card-icon"
      {...props}
    >
      {children}
    </Slot>
  );
}
