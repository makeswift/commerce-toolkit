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
  const iconStyles = cn('size-4', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="swatch-radio-group-indicator-icon">
        {children}
      </Slot>
    );
  }

  return (
    <X
      absoluteStrokeWidth
      className={iconStyles}
      data-slot="swatch-radio-group-indicator-icon"
      strokeWidth={1.5}
    />
  );
}
