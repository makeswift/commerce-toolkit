'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useBlogPostCard } from './blog-post-card-provider';

export type BlogPostCardAuthorProps = ComponentProps<'span'>;

export function BlogPostCardAuthor({ className, ...props }: BlogPostCardAuthorProps) {
  const { author } = useBlogPostCard();

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
