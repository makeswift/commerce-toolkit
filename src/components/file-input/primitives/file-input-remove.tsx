import type { ComponentProps } from 'react';

import { useFileInputItem } from '@/components/file-input';
import { cn } from '@/lib';

export type FileInputRemoveProps = ComponentProps<'button'>;

export function FileInputRemove({ className, children, ...props }: FileInputRemoveProps) {
  const {
    fileState: {
      file: { name },
    },
    removeFile,
  } = useFileInputItem();

  return (
    <button
      aria-label={`Remove ${name}`}
      className={cn(
        'inline-flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors',
        // Hover state
        'hover:bg-[var(--file-input-item-delete-hover,var(--contrast-100))]',
        // Focus-visible state
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--file-input-focus,var(--brand))]',
        className,
      )}
      data-slot="file-input-remove"
      onClick={removeFile}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
