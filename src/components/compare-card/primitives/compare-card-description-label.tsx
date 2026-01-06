import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardDescriptionLabelProps = ComponentProps<'p'>;

export function CompareCardDescriptionLabel({
  children,
  className,
  ...props
}: CompareCardDescriptionLabelProps) {
  return (
    <p
      className={cn(
        'font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-body))] text-xs font-normal uppercase text-[var(--compare-card-label,var(--foreground))]',
        className,
      )}
      data-slot="compare-card-description-label"
      {...props}
    >
      {children}
    </p>
  );
}
