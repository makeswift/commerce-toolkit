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
  const iconStyles = cn('size-5', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="range-input-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowRight
      absoluteStrokeWidth
      className={iconStyles}
      data-slot="range-input-icon"
      strokeWidth={1}
    />
  );
}
