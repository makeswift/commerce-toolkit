'use client';

import { useCallback, useState } from 'react';
import type { ClipboardEvent, ComponentPropsWithoutRef, DragEvent, KeyboardEvent } from 'react';

import { useFileInput } from '@/components/file-input';
import { cn } from '@/lib';

export type FileInputDropzoneProps = ComponentPropsWithoutRef<'div'>;

export function FileInputDropzone({ children, className, ...props }: FileInputDropzoneProps) {
  const { id, disabled, invalid, addFiles, openFilePicker } = useFileInput();
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);

      const newFiles = Array.from(event.dataTransfer.files);

      addFiles(newFiles);
    },
    [addFiles],
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget;

    if (
      relatedTarget &&
      relatedTarget instanceof Node &&
      event.currentTarget.contains(relatedTarget)
    ) {
      return;
    }

    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openFilePicker();
      }
    },
    [openFilePicker],
  );

  const handlePaste = useCallback(
    (event: ClipboardEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);

      const items = event.clipboardData.items;

      if (items.length === 0) return;

      const pastedFiles: File[] = [];

      for (const item of Array.from(items)) {
        if (item.kind === 'file') {
          const file = item.getAsFile();

          if (file) {
            pastedFiles.push(file);
          }
        }
      }

      if (pastedFiles.length === 0) return;

      addFiles(pastedFiles);
    },
    [addFiles],
  );

  const handleClick = useCallback(() => {
    openFilePicker();
  }, [openFilePicker]);

  return (
    <div
      aria-controls={`${id}-input ${id}-list`}
      aria-disabled={disabled === true ? true : undefined}
      aria-invalid={invalid === true ? true : undefined}
      className={cn(
        'min-h-19 flex cursor-pointer select-none flex-col items-center justify-center gap-1.5 rounded-lg border-[1.5px] border-dashed border-[var(--file-input-dropzone-border,var(--contrast-200))] bg-[var(--file-input-dropzone-background,var(--background))] p-4 transition-colors duration-300 ease-in-out',
        // Hover state
        'hover:border-[var(--file-input-dropzone-border-hover,var(--foreground))] hover:bg-[var(--file-input-dropzone-background-hover,var(--contrast-100))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--file-input-focus,var(--brand))]',
        // Disabled state
        'group-aria-disabled/file-input:cursor-not-allowed group-aria-disabled/file-input:border-[var(--file-input-dropzone-border-disabled,color-mix(in_oklab,var(--contrast-200)_70%,transparent))] group-aria-disabled/file-input:bg-[var(--file-input-dropzone-background-disabled,var(--background))]',
        'group-aria-disabled/file-input:focus-visible:outline-0',
        // Invalid state
        'group-aria-invalid/file-input:border-[var(--file-input-dropzone-border-error,var(--error))]',
        // Dragging state
        'data-[dragging]:border-[var(--file-input-dropzone-border-dragging,var(--foreground))] data-[dragging]:bg-[var(--file-input-dropzone-background-dragging,color-mix(in_oklab,var(--success),white_75%))]',
        // Container queries
        '@sm:flex-row',
        className,
      )}
      data-dragging={isDragging ? '' : undefined}
      data-slot="file-input-dropzone"
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      role="button"
      tabIndex={disabled === true ? -1 : 0}
      {...props}
    >
      {children}
    </div>
  );
}
