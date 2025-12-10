import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardRootProps = ComponentProps<'div'>;

export function CompareCardRoot({ children, className, ...props }: CompareCardRootProps) {
  return (
    <div
      className={cn(
        'w-full max-w-72 divide-y divide-[var(--compare-card-divider,hsl(var(--contrast-100)))] font-[family-name:var(--compare-card-font-family-primary,var(--font-family-body))] font-normal @container',
        className,
      )}
      data-slot="compare-card-root"
      {...props}
    >
      {children}
    </div>
  );
}
