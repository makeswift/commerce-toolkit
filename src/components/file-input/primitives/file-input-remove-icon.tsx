'use client';

import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface FileInputRemoveIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FileInputRemoveIcon({
  asChild = false,
  className,
  children,
}: FileInputRemoveIconProps) {
  const iconStyles = cn('size-5', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="file-input-remove-icon">
        {children}
      </Slot>
    );
  }

  return (
    <X
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="file-input-remove-icon"
      strokeWidth={1.5}
    />
  );
}
