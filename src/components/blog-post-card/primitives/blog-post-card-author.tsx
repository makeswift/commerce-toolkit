import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogPostCardAuthorProps = ComponentProps<'span'>;

export function BlogPostCardAuthor({ className, children, ...props }: BlogPostCardAuthorProps) {
  return (
    <span
      className={cn("before:mx-2 before:content-['•']", className)}
      data-slot="blog-post-card-author"
      {...props}
    >
      {children}
    </span>
  );
}
