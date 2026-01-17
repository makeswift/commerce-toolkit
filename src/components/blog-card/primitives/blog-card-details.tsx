import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogCardDetailsProps = ComponentProps<'div'>;

export function BlogCardDetails({ children, className, ...props }: BlogCardDetailsProps) {
  return (
    <div
      className={cn(
        'mt-3 text-sm text-[--blog-card-text-primary,var(--text-primary)] @lg:text-base',
        className,
      )}
      data-slot="blog-card-details"
      {...props}
    >
      {children}
    </div>
  );
}
