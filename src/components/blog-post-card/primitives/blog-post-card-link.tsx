import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BlogPostCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function BlogPostCardLink({ asChild = false, className, ...props }: BlogPostCardLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'absolute inset-0 rounded-b-lg rounded-t-2xl',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blog-post-card-focus,var(--brand))]',
        className,
      )}
      data-slot="blog-post-card-link"
      {...props}
    />
  );
}
