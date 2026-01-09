import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardFallbackProps = ComponentProps<'div'>;

export function CategoryCardFallback({ className, children, ...props }: CategoryCardFallbackProps) {
  return (
    <div
      className={cn(
        'break-words p-4 text-4xl font-bold leading-none tracking-tight transition-transform duration-500 ease-out [color:color-mix(in_oklab,var(--foreground)_30%,transparent)]',
        // Group hover state
        'group-hover/category-card:scale-105',
        className,
      )}
      data-slot="category-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
