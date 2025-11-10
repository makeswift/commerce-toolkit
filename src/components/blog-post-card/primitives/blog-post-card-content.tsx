'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useBlogPostCard } from './blog-post-card-provider';

export type BlogPostCardContentProps = ComponentProps<'p'>;

export function BlogPostCardContent({ className, ...props }: BlogPostCardContentProps) {
  const { content } = useBlogPostCard();

  return (
    <p
      className={cn(
        'mt-1.5 line-clamp-3 text-sm font-normal text-[var(--blog-post-card-content-text,hsl(var(--contrast-400)))]',
        className,
      )}
      data-slot="blog-post-card-content"
      {...props}
    >
      {content}
    </p>
  );
}
