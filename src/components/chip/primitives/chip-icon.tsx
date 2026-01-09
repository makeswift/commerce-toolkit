'use client';

import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface ChipIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function ChipIcon({ asChild = false, className, children }: ChipIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-3', className)} data-slot="chip-icon">
        {children}
      </Slot>
    );
  }

  return <X className={cn('size-3', className)} data-slot="chip-icon" />;
}
