import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardListProps = ComponentProps<'dl'>;

export function CompareCardList({ children, className, ...props }: CompareCardListProps) {
  return (
    <dl
      className={cn(
        'text-[--compare-card-text-primary,var(--text-primary)) grid grid-cols-2 gap-1 text-xs font-normal',
        className,
      )}
      data-slot="compare-card-list"
      {...props}
    >
      {children}
    </dl>
  );
}
