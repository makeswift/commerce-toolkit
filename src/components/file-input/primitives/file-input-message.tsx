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
        'mt-2 font-[family-name:var(--file-input-message-font-family,var(--font-family-body))] text-sm font-normal text-[var(--file-input-message,var(--contrast-500))]',
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
