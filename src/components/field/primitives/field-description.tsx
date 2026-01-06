import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldDescriptionProps = ComponentProps<'p'>;

export function FieldDescription({ className, children, ...props }: FieldDescriptionProps) {
  return (
    <p
      className={cn(
        'text-sm font-normal text-[var(--field-description,var(--contrast-500))] [font-family:var(--field-description-font-family,var(--font-family-body))]',
        className,
      )}
      data-slot="field-description"
      {...props}
    >
      {children}
    </p>
  );
}
