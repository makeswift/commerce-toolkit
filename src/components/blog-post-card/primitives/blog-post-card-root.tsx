import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

export type BlogPostCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
  aspectRatio?: '5/6' | '3/4' | '4/3' | '1/1';
};

export function BlogPostCardRoot<T extends ElementType = 'article'>({
  as,
  className,
  children,
  aspectRatio = '4/3',
  ...props
}: BlogPostCardRootProps<T>) {
  const BlogPostCardRootElement = as ?? 'article';

  return (
    <BlogPostCardRootElement
      className={cn(
        'group/blog-post-card relative w-full max-w-md @container [font-family:var(--blog-post-card-font-family,var(--font-family-body))]',
        className,
      )}
      data-aspect-ratio={aspectRatio}
      data-slot="blog-post-card-root"
      {...props}
    >
      {children}
    </BlogPostCardRootElement>
  );
}
