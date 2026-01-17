import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldDescriptionProps = ComponentProps<'p'>;

export function FieldDescription({ className, children, ...props }: FieldDescriptionProps) {
  return (
    <p
      className={cn(
        'text-sm text-[--field-text-secondary,var(--font-text-secondary)] [font-family:var(--field-font-description,var(--font-body))]',
        className,
      )}
      data-slot="field-description"
      {...props}
    >
      {children}
    </p>
  );
}
