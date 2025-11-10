'use client';

import type { ComponentProps } from 'react';

import { useBlogPostCard } from './blog-post-card-provider';

export type BlogPostCardDateProps = ComponentProps<'time'>;

export function BlogPostCardDate({ className, ...props }: BlogPostCardDateProps) {
  const { date } = useBlogPostCard();

  return (
    <time dateTime={date} {...props} data-slot="blog-post-card-date">
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
}
