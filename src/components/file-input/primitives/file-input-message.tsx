'use client';

import type { ComponentProps } from 'react';

import { useFileInput } from '@/components/file-input';
import { cn } from '@/lib/utils';

export type FileInputMessageProps = ComponentProps<'p'>;

export function FileInputMessage({ className, children, ...props }: FileInputMessageProps) {
  const { id } = useFileInput();

  return (
    <p
      className={cn(
        'mt-2 text-sm text-[--file-input-text-secondary,var(--form-text-secondary)] [font-family:var(--file-input-font-message,var(--font-body))]',
        className,
      )}
      data-slot="file-input-message"
      id={`${id}-message`}
      {...props}
    >
      {children}
    </p>
  );
}
