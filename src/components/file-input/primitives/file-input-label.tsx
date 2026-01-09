'use client';

import type { ComponentProps } from 'react';

import { useFileInput } from '@/components/file-input';
import { Label } from '@/components/label';
import { cn } from '@/lib';

export type FileInputLabelProps = ComponentProps<typeof Label>;

export function FileInputLabel({ className, children, ...props }: FileInputLabelProps) {
  const { inputId } = useFileInput();

  return (
    <Label
      className={cn(className)}
      data-slot="file-input-label"
      htmlFor={`${inputId}-input`}
      {...props}
    >
      {children}
    </Label>
  );
}
