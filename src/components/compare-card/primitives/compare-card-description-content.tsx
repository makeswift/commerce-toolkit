import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardDescriptionContentProps = ComponentProps<'div'>;

export function CompareCardDescriptionContent({
  children,
  className,
  ...props
}: CompareCardDescriptionContentProps) {
  return (
    <div
      className={cn(
        'prose prose-sm [&>div>*:first-child]:mt-0 [&>div>*:last-child]:mb-0',
        className,
      )}
      data-slot="compare-card-description-content"
      {...props}
    >
      {children}
    </div>
  );
}
