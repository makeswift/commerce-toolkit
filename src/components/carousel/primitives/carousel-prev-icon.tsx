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
  if (asChild) {
    return (
      <Slot className={cn('size-6', className)} data-slot="carousel-prev-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowLeft
      absoluteStrokeWidth
      className={cn('size-6', className)}
      data-slot="carousel-prev-icon"
      strokeWidth={1.5}
    />
  );
}
