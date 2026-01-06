import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogPostCardFallbackProps = ComponentProps<'div'>;

export function BlogPostCardFallback({ children, className, ...props }: BlogPostCardFallbackProps) {
  return (
    <div
      className={cn(
        'break-words p-4 text-4xl font-bold leading-none tracking-tight transition-transform duration-500 ease-out [color:color-mix(in_oklab,var(--foreground)_30%,transparent)] group-hover:scale-105',
        className,
      )}
      data-slot="blog-post-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
