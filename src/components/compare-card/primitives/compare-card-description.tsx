import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardDescriptionProps = ComponentProps<'div'>;

export function CompareCardDescription({
  className,
  children,
  ...props
}: CompareCardDescriptionProps) {
  return (
    <div
      className={cn('space-y-4 py-4', className)}
      data-slot="compare-card-description"
      {...props}
    >
      {children}
    </div>
  );
}
