import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardEmptyProps = ComponentProps<'p'>;

export function CompareCardEmpty({ children, className, ...props }: CompareCardEmptyProps) {
  return (
    <p
      className={cn(
        'text-sm text-[--compare-card-text-secondary,var(--text-secondary)]',
        className,
      )}
      data-slot="compare-card-empty"
      {...props}
    >
      {children}
    </p>
  );
}
