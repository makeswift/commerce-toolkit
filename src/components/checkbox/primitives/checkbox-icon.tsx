'use client';

import { Slot } from '@radix-ui/react-slot';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CheckboxIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CheckboxIcon({ asChild = false, className, children }: CheckboxIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-4', className)} data-slot="checkbox-icon">
        {children}
      </Slot>
    );
  }

  return (
    <Check
      absoluteStrokeWidth
      className={cn('size-4', className)}
      color="currentColor"
      data-slot="checkbox-icon"
    />
  );
}
