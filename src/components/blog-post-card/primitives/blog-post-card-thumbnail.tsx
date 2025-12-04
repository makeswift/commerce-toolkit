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
        'relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--blog-post-card-image-background,hsl(var(--contrast-100)))]',
        className,
      )}
      data-slot="blog-post-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
