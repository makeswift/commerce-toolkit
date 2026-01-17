'use client';

import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface BreadcrumbsIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function BreadcrumbsIcon({ asChild = false, className, children }: BreadcrumbsIconProps) {
  const iconStyles = cn('size-5 text-[--breadcrumbs-fill-icon,var(--contrast-400)]', className);

  if (asChild) {
    return (
      <Slot aria-hidden="true" className={iconStyles} data-slot="breadcrumbs-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ChevronRight
      absoluteStrokeWidth
      aria-hidden="true"
      className={iconStyles}
      data-slot="breadcrumbs-icon"
      strokeWidth={1.5}
    />
  );
}
