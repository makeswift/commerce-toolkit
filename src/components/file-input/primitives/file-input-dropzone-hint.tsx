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
        'font-[family-name:var(--file-input-dropzone-message-font-family,var(--font-family-body))] text-sm font-normal text-[var(--file-input-dropzone-message,var(--contrast-500))]',
        // Disabled state
        'group-aria-disabled/file-input:text-[var(--file-input-dropzone-message-disabled,color-mix(in_oklab,var(--contrast-500)_70%,transparent))]',
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
