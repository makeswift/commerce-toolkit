'use client';

import { clsx } from 'clsx';
import { useCallback, useState } from 'react';
import type { ClipboardEvent, ComponentPropsWithoutRef, DragEvent, KeyboardEvent } from 'react';

import { useFileInput } from '@/components/file-input';

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
      className={clsx(
        // Base layout
        'min-h-19 flex flex-col items-center justify-center gap-1.5',
        // Spacing
        'p-4',
        // Borders & Rounded
        'rounded-lg border-[1.5px] border-dashed border-[var(--file-input-dropzone-border,var(--contrast-200))]',
        // Background
        'bg-[var(--file-input-dropzone-background,var(--background))]',
        // Interaction
        'cursor-pointer select-none',
        // Transitions
        'transition-colors duration-300 ease-in-out',
        // Hover state
        'hover:border-[var(--file-input-dropzone-border-hover,var(--foreground))] hover:bg-[var(--file-input-dropzone-background-hover,var(--contrast-100))]',
        // Focus-visible state
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--file-input-focus,var(--primary))] focus-visible:ring-offset-2',
        // Disabled state
        'group-aria-disabled:cursor-not-allowed group-aria-disabled:border-[var(--file-input-dropzone-border-disabled,color-mix(in_oklab,var(--contrast-200)_70%,transparent))] group-aria-disabled:bg-[var(--file-input-dropzone-background-disabled,var(--background))]',
        'group-aria-disabled:focus-visible:outline-none group-aria-disabled:focus-visible:ring-0 group-aria-disabled:focus-visible:ring-offset-0',
        // Invalid state
        'group-aria-invalid:border-[var(--file-input-dropzone-border-error,var(--error))]',
        // Dragging state
        'data-[dragging]:border-[var(--file-input-dropzone-border-dragging,var(--foreground))] data-[dragging]:bg-[var(--file-input-dropzone-background-dragging,color-mix(in_oklab,var(--success),white_75%))]',
        // Container queries
        '@sm:flex-row',
        className,
      )}
      data-dragging={isDragging ? '' : undefined}
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
