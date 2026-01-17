import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldLegendProps = ComponentProps<'legend'>;

export function FieldLegend({ className, children, ...props }: FieldLegendProps) {
  return (
    <legend
      className={cn(
        'mb-1 text-2xl font-medium text-[--field-text-primary,var(--text-secondary)] [font-family:var(--field-font-legend,var(--font-heading))]',
        className,
      )}
      data-slot="field-legend"
      {...props}
    >
      {children}
    </legend>
  );
}
