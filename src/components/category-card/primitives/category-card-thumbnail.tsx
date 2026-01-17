import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardThumbnailProps = ComponentProps<'div'>;

export function CategoryCardThumbnail({
  className,
  children,
  ...props
}: CategoryCardThumbnailProps) {
  return (
    <div
      className={cn(
        'focus-primary relative overflow-hidden rounded-[inherit] bg-[--fill-pending]',
        // Aspect ratio variants
        'group-data-[aspect-ratio=1/1]/category-card:aspect-square',
        'group-data-[aspect-ratio=3/4]/category-card:aspect-[3/4]',
        'group-data-[aspect-ratio=5/6]/category-card:aspect-[5/6]',
        className,
      )}
      data-slot="category-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
