import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldLegendProps = ComponentProps<'legend'>;

export function FieldLegend({ className, children, ...props }: FieldLegendProps) {
  return (
    <legend
      className={cn(
        'mb-1 text-2xl font-medium text-[var(--field-legend,hsl(var(--foreground)))] [font-family:var(--field-legend-font-family,var(--font-family-heading))]',
        className,
      )}
      data-slot="field-legend"
      {...props}
    >
      {children}
    </legend>
  );
}
