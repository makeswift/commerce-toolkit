import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BlogPostCardDetailsProps = ComponentProps<'div'>;

export function BlogPostCardDetails({ children, className, ...props }: BlogPostCardDetailsProps) {
  return (
    <div
      className={cn(
        'mt-3 text-sm text-[var(--blog-post-card-author-date-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="blog-post-card-details"
      {...props}
    >
      {children}
    </div>
  );
}
