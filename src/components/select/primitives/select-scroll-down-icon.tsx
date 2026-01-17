'use client';

import { Slot } from '@radix-ui/react-slot';
import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface SelectScrollDownIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SelectScrollDownIcon({
  asChild = false,
  className,
  children,
}: SelectScrollDownIconProps) {
  if (asChild) {
    return (
      <Slot
        className={cn('w-5 text-[--select-fill-icon,var(--form-fill-icon)]', className)}
        data-slot="select-scroll-down-icon"
      >
        {children}
      </Slot>
    );
  }

  return (
    <ChevronDown
      absoluteStrokeWidth
      className={cn('w-5 text-[--select-fill-icon,var(--form-fill-icon)]', className)}
      data-slot="select-scroll-down-icon"
      strokeWidth={1.5}
    />
  );
}
