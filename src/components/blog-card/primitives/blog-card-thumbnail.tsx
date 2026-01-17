import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogCardThumbnailProps = ComponentProps<'div'>;

export function BlogCardThumbnail({ className, children, ...props }: BlogCardThumbnailProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl bg-[--fill-image]',
        'group-data-[aspect-ratio=5/6]/blog-card:aspect-[5/6]',
        'group-data-[aspect-ratio=3/4]/blog-card:aspect-[3/4]',
        'group-data-[aspect-ratio=4/3]/blog-card:aspect-[4/3]',
        'group-data-[aspect-ratio=1/1]/blog-card:aspect-square',
        className,
      )}
      data-slot="blog-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
