'use client';

import type { ComponentProps } from 'react';

import { useFileInput } from '@/components/file-input';
import { cn } from '@/lib/utils';

export type FileInputDropzoneHintProps = ComponentProps<'p'>;

export function FileInputDropzoneHint({
  className,
  children,
  ...props
}: FileInputDropzoneHintProps) {
  const { id, validationError } = useFileInput();

  if (validationError != null) {
    return null;
  }

  return (
    <p
      className={cn(
        'text-sm font-normal text-[--file-input-text-secondary,var(--form-text-secondary)] [font-family:var(--file-input-font-message,var(--font-body))]',
        // Disabled state
        'group-aria-disabled/file-input:text-[color-mix(in_oklab,var(--file-input-text-secondary,var(--form-text-secondary))_70%,transparent)]',
        className,
      )}
      data-slot="file-input-dropzone-hint"
      id={`${id}-hint`}
      {...props}
    >
      {children}
    </p>
  );
}
