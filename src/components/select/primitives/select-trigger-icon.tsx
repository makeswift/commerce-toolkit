'use client';

import { Slot } from '@radix-ui/react-slot';
import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface SelectTriggerIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SelectTriggerIcon({
  asChild = false,
  className,
  children,
}: SelectTriggerIconProps) {
  if (asChild) {
    return (
      <Slot
        className={cn(
          'w-5 text-[var(--select-light-icon,var(--foreground))] transition-transform',
          className,
        )}
        data-slot="select-trigger-icon"
      >
        {children}
      </Slot>
    );
  }

  return (
    <ChevronDown
      absoluteStrokeWidth
      className={cn(
        'w-5 text-[var(--select-light-icon,var(--foreground))] transition-transform',
        className,
      )}
      data-slot="select-trigger-icon"
      strokeWidth={1.5}
    />
  );
}
