import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogPostCardThumbnailProps = ComponentProps<'div'>;

export function BlogPostCardThumbnail({
  className,
  children,
  ...props
}: BlogPostCardThumbnailProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl bg-[var(--blog-post-card-image-background,hsl(var(--contrast-100)))]',
        'group-data-[aspect-ratio=5/6]/blog-post-card:aspect-[5/6]',
        'group-data-[aspect-ratio=3/4]/blog-post-card:aspect-[3/4]',
        'group-data-[aspect-ratio=4/3]/blog-post-card:aspect-[4/3]',
        'group-data-[aspect-ratio=1/1]/blog-post-card:aspect-square',
        className,
      )}
      data-slot="blog-post-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
