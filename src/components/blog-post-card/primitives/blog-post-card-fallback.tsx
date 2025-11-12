import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BlogPostCardFallbackProps = ComponentProps<'div'>;

export function BlogPostCardFallback({ children, className, ...props }: BlogPostCardFallbackProps) {
  return (
    <div
      className={cn(
        'p-4 text-5xl font-bold leading-none tracking-tighter [color:var(--blog-post-card-empty-text,color-mix(in_oklab,hsl(var(--foreground))_15%,transparent))]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
