import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSpecsLabelProps = ComponentProps<'p'>;

export function CompareCardSpecsLabel({
  children,
  className,
  ...props
}: CompareCardSpecsLabelProps) {
  return (
    <p
      className={cn(
        'font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-mono))] text-xs font-normal uppercase text-[var(--compare-card-label,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="compare-card-specs-label"
      {...props}
    >
      {children}
    </p>
  );
}
