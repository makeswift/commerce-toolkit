'use client';

import type { ComponentProps } from 'react';

import { useFileInputItem } from '@/components/file-input';
import { cn } from '@/lib';

export type FileInputErrorProps = ComponentProps<'p'>;

export function FileInputError({ className, children, ...props }: FileInputErrorProps) {
  const { generatedId } = useFileInputItem();

  return (
    <p
      className={cn('text-xs text-[--file-input-text-error,var(--error)]', className)}
      data-slot="file-input-error"
      id={`${generatedId}-error`}
      {...props}
    >
      {children}
    </p>
  );
}
