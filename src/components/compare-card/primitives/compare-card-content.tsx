import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardContentProps = ComponentProps<'div'>;

export function CompareCardContent({ children, className, ...props }: CompareCardContentProps) {
  return (
    <div
      className={cn(
        'prose prose-sm [&>div>*:first-child]:mt-0 [&>div>*:last-child]:mb-0',
        className,
      )}
      data-slot="compare-card-content"
      {...props}
    >
      {children}
    </div>
  );
}
