'use client';

import type { ComponentProps } from 'react';

import { useFileInputItem } from '@/components/file-input';
import { cn } from '@/lib';

export type FileInputStatusProps = ComponentProps<'p'>;

export function FileInputStatus({ className, children, ...props }: FileInputStatusProps) {
  const { generatedId } = useFileInputItem();

  return (
    <p
      className={cn(
        'text-xs font-normal text-[var(--file-input-item-status,var(--contrast-500))]',
        className,
      )}
      data-slot="file-input-status"
      id={`${generatedId}-status`}
      {...props}
    >
      {children}
    </p>
  );
}
