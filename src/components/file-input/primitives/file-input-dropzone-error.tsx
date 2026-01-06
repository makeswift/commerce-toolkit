'use client';

import type { ComponentProps } from 'react';

import { useFileInput } from '@/components/file-input';
import { cn } from '@/lib/utils';

export type FileInputDropzoneErrorProps = ComponentProps<'p'>;

export function FileInputDropzoneError({
  className,
  children,
  ...props
}: FileInputDropzoneErrorProps) {
  const { id, validationError } = useFileInput();

  if (validationError == null) {
    return null;
  }

  return (
    <p
      className={cn(
        'font-[family-name:var(--file-input-dropzone-message-font-family,var(--font-family-body))] text-sm font-normal text-[var(--file-input-dropzone-message-error,var(--error))]',
        className,
      )}
      data-slot="file-input-dropzone-error"
      id={`${id}-error`}
      role="alert"
      {...props}
    >
      {children ?? validationError}
    </p>
  );
}
