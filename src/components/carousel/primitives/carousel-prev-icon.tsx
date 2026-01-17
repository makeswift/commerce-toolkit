'use client';

import { Slot } from '@radix-ui/react-slot';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CarouselPrevIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CarouselPrevIcon({ asChild = false, className, children }: CarouselPrevIconProps) {
  const iconStyles = cn('size-6', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="carousel-prev-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowLeft
      absoluteStrokeWidth
      className={iconStyles}
      data-slot="carousel-prev-icon"
      strokeWidth={1.5}
    />
  );
}
