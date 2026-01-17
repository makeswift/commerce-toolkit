import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogCardFallbackProps = ComponentProps<'div'>;

export function BlogCardFallback({ children, className, ...props }: BlogCardFallbackProps) {
  return (
    <div
      className={cn(
        'break-words p-4 text-3xl font-bold text-[color-mix(in_oklab,var(--blog-card-text-primary,var(--text-primary))_30%,transparent)] transition-transform duration-500 ease-out group-hover/blog-card:scale-105',
        className,
      )}
      data-slot="blog-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
