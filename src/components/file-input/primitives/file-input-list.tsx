'use client';

import type { ComponentProps, ReactNode } from 'react';
import { useMemo } from 'react';

import type { FileState } from '@/components/file-input';
import { useFileInput } from '@/components/file-input';
import { cn } from '@/lib/utils';

export interface FileInputListRenderProps {
  files: Map<File, FileState>;
}

export type FileInputListProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: ReactNode | ((props: FileInputListRenderProps) => ReactNode);
};

export function FileInputList({ className, children, ...props }: FileInputListProps) {
  const { id, files } = useFileInput();

  if (files.size === 0) {
    return null;
  }

  const renderProps: FileInputListRenderProps = useMemo(() => ({ files }), [files]);

  return (
    <div
      className={cn('mt-3 grid gap-3', className)}
      data-slot="file-input-list"
      id={`${id}-list`}
      role="list"
      {...props}
    >
      {typeof children === 'function' ? children(renderProps) : children}
    </div>
  );
}
