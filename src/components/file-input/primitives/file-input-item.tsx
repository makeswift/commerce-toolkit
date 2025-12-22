'use client';

import type { ComponentProps, ReactNode } from 'react';
import { createContext, use, useCallback, useEffect, useId, useMemo, useRef } from 'react';

import type { FileState } from '@/components/file-input';
import { useFileInput } from '@/components/file-input';
import { cn } from '@/lib';

export interface FileInputItemRenderProps {
  file: File;
  fileState: FileState;
  generatedId: string;
  removeFile: () => void;
}

const FileInputItemContext = createContext<FileInputItemRenderProps | undefined>(undefined);

export type FileInputItemProps = Omit<ComponentProps<'div'>, 'children'> & {
  file: File;
  children: ReactNode | ((props: FileInputItemRenderProps) => ReactNode);
};

export function FileInputItem({ className, children, file, ...props }: FileInputItemProps) {
  const generatedId = useId();
  const { files, removeFile: removeFileFromRoot } = useFileInput();
  const hasAnimatedRef = useRef(false);

  const fileState = files.get(file);

  const removeFile = useCallback(() => removeFileFromRoot(file), [removeFileFromRoot, file]);

  if (!fileState) {
    return null;
  }

  const renderProps: FileInputItemRenderProps = useMemo(
    () => ({ file, fileState, generatedId, removeFile }),
    [file, fileState, generatedId, removeFile],
  );

  useEffect(() => {
    // Only animate the file item once since
    // re-rendering will reset the animation
    if (!hasAnimatedRef.current) {
      setTimeout(() => {
        hasAnimatedRef.current = true;
      }, 300);
    }
  }, [fileState]);

  const { status, error } = fileState;

  return (
    <FileInputItemContext.Provider value={renderProps}>
      <div
        aria-describedby={`${generatedId}-status${error != null ? ` ${generatedId}-error` : ''}`.trim()}
        aria-invalid={status === 'error'}
        aria-labelledby={`${generatedId}-name`}
        className={cn(
          'relative flex items-center justify-between gap-2 overflow-hidden rounded-lg border-[1.5px] border-[var(--file-input-item-border,hsl(var(--contrast-200)))] p-4',
          // Start animation state
          'data-[start-animation]:animate-in data-[start-animation]:fade-in-0 data-[start-animation]:slide-in-from-top-2',
          // Invalid state
          'aria-invalid:border-[var(--file-input-item-border-error,hsl(var(--error)))]',
          className,
        )}
        data-slot="file-input-item"
        data-start-animation={!hasAnimatedRef.current ? '' : undefined}
        role="listitem"
        {...props}
      >
        {typeof children === 'function' ? children(renderProps) : children}
      </div>
    </FileInputItemContext.Provider>
  );
}

export function useFileInputItem() {
  const context = use(FileInputItemContext);

  if (!context) {
    throw new Error('useFileInputItem must be used within a FileInputItem');
  }

  return context;
}
