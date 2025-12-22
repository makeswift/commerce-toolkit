import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FileInputDetailsProps = ComponentProps<'div'>;

export function FileInputDetails({ className, children, ...props }: FileInputDetailsProps) {
  return (
    <div className={cn('flex-1', className)} data-slot="file-input-details" {...props}>
      {children}
    </div>
  );
}
