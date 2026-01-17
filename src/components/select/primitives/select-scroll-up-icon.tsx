'use client';

import { Slot } from '@radix-ui/react-slot';
import { ChevronUp } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface SelectScrollUpIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SelectScrollUpIcon({
  asChild = false,
  className,
  children,
}: SelectScrollUpIconProps) {
  if (asChild) {
    return (
      <Slot
        className={cn('w-5 text-[--select-fill-icon,var(--form-fill-icon)]', className)}
        data-slot="select-scroll-up-icon"
      >
        {children}
      </Slot>
    );
  }

  return (
    <ChevronUp
      absoluteStrokeWidth
      className={cn('w-5 text-[var(--select-fill-icon,var(--form-fill-icon))]', className)}
      data-slot="select-scroll-up-icon"
      strokeWidth={1.5}
    />
  );
}
