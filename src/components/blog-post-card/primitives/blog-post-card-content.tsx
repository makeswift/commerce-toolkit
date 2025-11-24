import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogPostCardContentProps = ComponentProps<'p'>;

export function BlogPostCardContent({ className, children, ...props }: BlogPostCardContentProps) {
  return (
    <p
      className={cn(
        'mt-1.5 line-clamp-3 text-sm font-normal text-[var(--blog-post-card-content-text,hsl(var(--contrast-400)))]',
        className,
      )}
      data-slot="blog-post-card-content"
      {...props}
    >
      {children}
    </p>
  );
}
