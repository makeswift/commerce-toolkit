import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardFallbackProps = ComponentProps<'div'>;

export function CategoryCardFallback({ className, children, ...props }: CategoryCardFallbackProps) {
  return (
    <div
      className={cn(
        'max-w-[80%] break-words pl-4 pt-4 text-4xl font-bold leading-none tracking-tight transition-transform duration-500 ease-out [color:var(--text-disabled)] group-hover/category-card:scale-105',
        className,
      )}
      data-slot="category-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
