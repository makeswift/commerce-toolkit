'use client';

import { Slot } from '@radix-ui/react-slot';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CategoryCardIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CategoryCardIcon({ asChild = false, className, children }: CategoryCardIconProps) {
  const baseClassName = cn(
    'absolute right-5 top-5 z-10 size-6 text-[var(--category-card-light-icon,var(--foreground))] transition-transform duration-700 ease-out',
    // Group hover state
    'group-hover/category-card:-translate-y-1.5 group-hover/category-card:translate-x-1.5',
    className,
  );

  if (asChild) {
    return (
      <Slot className={baseClassName} data-slot="category-card-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowUpRight
      absoluteStrokeWidth
      className={baseClassName}
      data-slot="category-card-icon"
      strokeWidth={1.5}
    />
  );
}
