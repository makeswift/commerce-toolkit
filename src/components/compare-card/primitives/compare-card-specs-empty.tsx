import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSpecsEmptyProps = ComponentProps<'p'>;

export function CompareCardSpecsEmpty({
  children,
  className,
  ...props
}: CompareCardSpecsEmptyProps) {
  return (
    <p
      className={cn(
        'text-sm text-[var(--compare-card-description,hsl(var(--contrast-400)))]',
        className,
      )}
      data-slot="compare-card-specs-empty"
      {...props}
    >
      {children}
    </p>
  );
}
