'use client';

import type { ComponentProps } from 'react';

import { useFileInputItem } from '@/components/file-input';
import { cn } from '@/lib';

export type FileInputNameProps = ComponentProps<'p'>;

export function FileInputName({ className, children, ...props }: FileInputNameProps) {
  const { generatedId } = useFileInputItem();

  return (
    <p
      className={cn(
        'truncate text-sm font-semibold text-[var(--file-input-item-name,var(--foreground))]',
        className,
      )}
      data-slot="file-input-name"
      id={`${generatedId}-name`}
      {...props}
    >
      {children}
    </p>
  );
}
