import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FileInputHeaderProps = ComponentProps<'div'>;

export function FileInputHeader({ className, children, ...props }: FileInputHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 [font-family:var(--file-input-font-header,var(--font-body))]',
        className,
      )}
      data-slot="file-input-header"
      {...props}
    >
      {children}
    </div>
  );
}
