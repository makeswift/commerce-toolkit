import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

export type BlogCardRootProps<E extends ElementType = 'article'> = Omit<ComponentProps<E>, 'as'> & {
  as?: E;
  aspectRatio?: '5/6' | '3/4' | '4/3' | '1/1';
};

export function BlogCardRoot<T extends ElementType = 'article'>({
  as,
  className,
  children,
  aspectRatio = '4/3',
  ...props
}: BlogCardRootProps<T>) {
  const BlogCardRootElement = as ?? 'article';

  return (
    <BlogCardRootElement
      className={cn('group/blog-card relative w-full @container', className)}
      data-aspect-ratio={aspectRatio}
      data-slot="blog-card-root"
      {...props}
    >
      {children}
    </BlogCardRootElement>
  );
}
