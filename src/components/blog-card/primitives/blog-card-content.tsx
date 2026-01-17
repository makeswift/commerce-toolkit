import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BlogCardContentProps = ComponentProps<'p'>;

export function BlogCardContent({ className, children, ...props }: BlogCardContentProps) {
  return (
    <p
      className={cn(
        'mt-2 line-clamp-3 text-sm text-[--blog-card-text-secondary,var(--text-secondary)] [font-family:var(--blog-card-font-content,var(--font-body))] @lg:mt-3 @lg:text-base',
        className,
      )}
      data-slot="blog-card-content"
      {...props}
    >
      {children}
    </p>
  );
}
