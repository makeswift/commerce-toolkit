import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldSeparatorProps = ComponentProps<'hr'>;

export function FieldSeparator({ className, ...props }: FieldSeparatorProps) {
  return (
    <hr
      className={cn('my-8 h-px border-0 bg-[--border-subtle]', className)}
      data-slot="field-separator"
      {...props}
    />
  );
}
