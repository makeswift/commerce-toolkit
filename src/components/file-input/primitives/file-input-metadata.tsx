import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FileInputMetadataProps = ComponentProps<'div'>;

export function FileInputMetadata({ className, children, ...props }: FileInputMetadataProps) {
  return (
    <div
      className={cn('flex min-w-0 flex-1 flex-col', className)}
      data-slot="file-input-metadata"
      {...props}
    >
      {children}
    </div>
  );
}
