import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogPostCardTitleProps = ComponentProps<'h5'>;

export function BlogPostCardTitle({ className, children, ...props }: BlogPostCardTitleProps) {
  return (
    <h5
      className={cn(
        'mt-4 text-lg font-normal leading-snug text-[var(--blog-post-card-title-text,var(--foreground))]',
        className,
      )}
      data-slot="blog-post-card-title"
      {...props}
    >
      {children}
    </h5>
  );
}
