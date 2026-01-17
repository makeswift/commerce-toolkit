import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogCardAuthorProps = ComponentProps<'span'>;

export function BlogCardAuthor({ className, children, ...props }: BlogCardAuthorProps) {
  return (
    <span
      className={cn("before:mx-2 before:content-['•']", className)}
      data-slot="blog-card-author"
      {...props}
    >
      {children}
    </span>
  );
}
