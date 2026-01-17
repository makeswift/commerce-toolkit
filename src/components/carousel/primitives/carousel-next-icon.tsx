'use client';

import { Slot } from '@radix-ui/react-slot';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CarouselNextIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CarouselNextIcon({ asChild = false, className, children }: CarouselNextIconProps) {
  const iconStyles = cn('size-6', className);

  if (asChild) {
    return (
      <Slot className={cn(iconStyles, className)} data-slot="carousel-next-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowRight
      absoluteStrokeWidth
      className={iconStyles}
      data-slot="carousel-next-icon"
      strokeWidth={1.5}
    />
  );
}
