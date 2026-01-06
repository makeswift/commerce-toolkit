import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSpecsListProps = ComponentProps<'dl'>;

export function CompareCardSpecsList({ children, className, ...props }: CompareCardSpecsListProps) {
  return (
    <dl
      className={cn(
        'grid grid-cols-2 gap-1 text-xs font-normal text-[var(--compare-card-field,var(--foreground))]',
        className,
      )}
      data-slot="compare-card-specs-list"
      {...props}
    >
      {children}
    </dl>
  );
}
