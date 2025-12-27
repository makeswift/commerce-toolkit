'use client';

import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface SwatchRadioGroupIndicatorIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SwatchRadioGroupIndicatorIcon({
  asChild = false,
  className,
  children,
}: SwatchRadioGroupIndicatorIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-4', className)} data-slot="swatch-radio-group-indicator-icon">
        {children}
      </Slot>
    );
  }

  return (
    <X
      absoluteStrokeWidth
      className={cn('size-4', className)}
      data-slot="swatch-radio-group-indicator-icon"
      strokeWidth={1.5}
    />
  );
}
