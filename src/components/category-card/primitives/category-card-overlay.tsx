import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardOverlayProps = ComponentProps<'div'>;

export function CategoryCardOverlay({ children, className, ...props }: CategoryCardOverlayProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-end p-6',
        // Show overlay gradient
        'group-data-[show-overlay=true]/category-card:bg-gradient-to-b',
        'group-data-[show-overlay=true]/category-card:from-foreground/0 group-data-[show-overlay=true]/category-card:from-50%',
        'group-data-[show-overlay=true]/category-card:via-foreground/0 group-data-[show-overlay=true]/category-card:via-50%',
        'group-data-[show-overlay=true]/category-card:to-foreground/50 group-data-[show-overlay=true]/category-card:to-100%',
        // Container query
        '@xs:p-8',
        className,
      )}
      data-slot="category-card-overlay"
      {...props}
    >
      {children}
    </div>
  );
}
