import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldHintProps = ComponentProps<'p'>;

export function FieldHint({ className, children, ...props }: FieldHintProps) {
  return (
    <p
      className={cn(
        'text-xs font-medium text-[--field-text-secondary,var(--text-secondary)] [font-family:var(--field-font-hint,var(--font-body))]',
        className,
      )}
      data-slot="field-hint"
      {...props}
    >
      {children}
    </p>
  );
}
