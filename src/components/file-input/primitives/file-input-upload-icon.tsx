'use client';

import { Slot } from '@radix-ui/react-slot';
import { Upload } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface FileInputUploadIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FileInputUploadIcon({
  asChild = false,
  className,
  children,
}: FileInputUploadIconProps) {
  const iconStyles = cn(
    'size-5 text-[var(--file-input-trigger-icon,var(--foreground))]',
    className,
  );

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="file-input-upload-icon">
        {children}
      </Slot>
    );
  }

  return (
    <Upload
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="file-input-upload-icon"
      strokeWidth={1.5}
    />
  );
}
