import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldHintProps = ComponentProps<'p'>;

export function FieldHint({ className, children, ...props }: FieldHintProps) {
  return (
    <p
      className={cn(
        'text-xs font-medium text-[var(--field-hint,hsl(var(--contrast-500)))] [font-family:var(--field-hint-font-family,var(--font-family-body))]',
        className,
      )}
      data-slot="field-hint"
      {...props}
    >
      {children}
    </p>
  );
}
