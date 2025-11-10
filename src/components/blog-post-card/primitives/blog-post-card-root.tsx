import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib/utils';

export type BlogPostCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
};

export function BlogPostCardRoot<T extends ElementType = 'article'>({
  as,
  className,
  children,
  ...props
}: BlogPostCardRootProps<T>) {
  const BlogPostCardRootElement = as ?? 'article';

  return (
    <BlogPostCardRootElement
      className={cn(
        'group relative w-full max-w-md @container [font-family:var(--blog-post-card-font-family,var(--font-family-body))]',
        className,
      )}
      data-slot="blog-post-card-root"
      {...props}
    >
      {children}
    </BlogPostCardRootElement>
  );
}
