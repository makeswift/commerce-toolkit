import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogCardTitleProps = ComponentProps<'h5'>;

export function BlogCardTitle({ className, children, ...props }: BlogCardTitleProps) {
  return (
    <h5
      className={cn(
        'mt-3 text-base leading-snug text-[--blog-card-text-primary,var(--text-primary)] [font-family:var(--blog-card-font-title,var(--font-body))] @lg:mt-4 @lg:text-xl',
        className,
      )}
      data-slot="blog-card-title"
      {...props}
    >
      {children}
    </h5>
  );
}
