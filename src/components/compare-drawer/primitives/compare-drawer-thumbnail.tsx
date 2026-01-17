import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerThumbnailProps = ComponentProps<'div'>;

export function CompareDrawerThumbnail({
  children,
  className,
  ...props
}: CompareDrawerThumbnailProps) {
  return (
    <div
      className={cn(
        'relative aspect-square w-12 shrink-0 bg-[--compare-drawer-fill-secondary,var(--contrast-100)]',
        className,
      )}
      data-slot="compare-drawer-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
