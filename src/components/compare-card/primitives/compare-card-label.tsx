import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardLabelProps = ComponentProps<'p'>;

export function CompareCardLabel({ children, className, ...props }: CompareCardLabelProps) {
  return (
    <p
      className={cn(
        'text-xs font-semibold text-[--compare-card-text-secondary,var(--text-secondary)] [family-name:var(--compare-card-font,var(--font-body))]',
        className,
      )}
      data-slot="compare-card-label"
      {...props}
    >
      {children}
    </p>
  );
}
