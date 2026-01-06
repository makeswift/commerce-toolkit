import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardThumbnailProps = ComponentProps<'div'>;

export function ProductCardThumbnail({ className, children, ...props }: ProductCardThumbnailProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[var(--product-card-border-radius,1rem)] bg-[var(--product-card-light-background,var(--contrast-100))]',
        'group-data-[aspect-ratio=5/6]/product-card:aspect-[5/6]',
        'group-data-[aspect-ratio=3/4]/product-card:aspect-[3/4]',
        'group-data-[aspect-ratio=1/1]/product-card:aspect-square',
        className,
      )}
      data-slot="product-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
