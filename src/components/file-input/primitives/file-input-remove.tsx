'use client';

import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { useFileInputItem } from '@/components/file-input';

export type FileInputRemoveProps = ComponentProps<'button'>;

export function FileInputRemove({ className, children, ...props }: FileInputRemoveProps) {
  const {
    fileState: {
      file: { name },
    },
    removeFile,
  } = useFileInputItem();

  return (
    <Button
      aria-label={`Remove ${name}`}
      data-slot="file-input-remove"
      onClick={removeFile}
      shape="circle"
      size="x-small"
      type="button"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
