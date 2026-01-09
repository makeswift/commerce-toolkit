'use client';

import { Slot } from '@radix-ui/react-slot';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface RangeInputIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function RangeInputIcon({ asChild = false, className, children }: RangeInputIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-5', className)} data-slot="range-input-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowRight
      absoluteStrokeWidth
      className={cn('size-5', className)}
      data-slot="range-input-icon"
      strokeWidth={1}
    />
  );
}
