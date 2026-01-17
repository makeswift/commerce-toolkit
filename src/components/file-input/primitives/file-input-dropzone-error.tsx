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
        'text-sm font-normal text-[--file-input-text-error,var(--error)] [font-family:var(--file-input-font-message,var(--font-body))]',
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
