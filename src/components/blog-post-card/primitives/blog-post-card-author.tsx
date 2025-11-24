import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogPostCardAuthorProps = ComponentProps<'span'>;

export function BlogPostCardAuthor({ className, children, ...props }: BlogPostCardAuthorProps) {
  return (
    <>
      <span
        className={cn("after:mx-2 after:content-['•']", className)}
        data-slot="blog-post-card-author"
        {...props}
      />
      <span>{children}</span>
    </>
  );
}
