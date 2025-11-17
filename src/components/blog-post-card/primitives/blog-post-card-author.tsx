'use client';

import type { ComponentProps } from 'react';

import { useBlogPostCard } from '@/components/blog-post-card';
import { cn } from '@/lib';

export type BlogPostCardAuthorProps = ComponentProps<'span'>;

export function BlogPostCardAuthor({ className, ...props }: BlogPostCardAuthorProps) {
  const { author } = useBlogPostCard();

  if (author != null) {
    return (
      <>
        <span
          className={cn("after:mx-2 after:content-['•']", className)}
          data-slot="blog-post-card-author"
          {...props}
        />
        <span>{author}</span>
      </>
    );
  }
}
