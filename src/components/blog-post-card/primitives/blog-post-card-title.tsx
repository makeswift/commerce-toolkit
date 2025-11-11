import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useBlogPostCard } from './blog-post-card-provider';

export type BlogPostCardTitleProps = ComponentProps<'h5'>;

export function BlogPostCardTitle({ className, ...props }: BlogPostCardTitleProps) {
  const { title } = useBlogPostCard();

  return (
    <h5
      className={cn(
        'mt-4 text-lg font-medium leading-snug text-[var(--blog-post-card-title-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="blog-post-card-title"
      {...props}
    >
      {title}
    </h5>
  );
}
