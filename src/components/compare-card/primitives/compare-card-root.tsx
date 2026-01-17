import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardRootProps = ComponentProps<'div'>;

export function CompareCardRoot({ children, className, ...props }: CompareCardRootProps) {
  return (
    <div
      className={cn(
        'w-full max-w-72 divide-y divide-[--border-subtle] font-normal @container [font-family:var(--compare-card-font,var(--font-body))]',
        className,
      )}
      data-slot="compare-card-root"
      {...props}
    >
      {children}
    </div>
  );
}
