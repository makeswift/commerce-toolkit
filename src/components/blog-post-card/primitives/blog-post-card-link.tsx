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
        'absolute inset-0 rounded-b-lg rounded-t-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blog-post-card-focus,var(--brand))] focus-visible:ring-offset-4',
        className,
      )}
      data-slot="blog-post-card-link"
      {...props}
    />
  );
}
