import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardDescriptionEmptyProps = ComponentProps<'p'>;

export function CompareCardDescriptionEmpty({
  children,
  className,
  ...props
}: CompareCardDescriptionEmptyProps) {
  return (
    <p
      className={cn(
        'text-sm text-[var(--compare-card-description,var(--contrast-400))]',
        className,
      )}
      data-slot="compare-card-description-empty"
      {...props}
    >
      {children}
    </p>
  );
}
