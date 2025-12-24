import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CardRadioGroupLabelProps = ComponentProps<'span'>;

export function CardRadioGroupLabel({ className, children, ...props }: CardRadioGroupLabelProps) {
  return (
    <span className={cn('flex-1 truncate text-ellipsis px-4 text-left', className)} {...props}>
      {children}
    </span>
  );
}
