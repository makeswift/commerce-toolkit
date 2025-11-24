import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BlogPostCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function BlogPostCardLink({
  asChild = false,
  className,
  children,
  ...props
}: BlogPostCardLinkProps) {
  const linkClassName = cn(
    'absolute inset-0 rounded-b-lg rounded-t-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blog-post-card-focus,hsl(var(--primary)))] focus-visible:ring-offset-4',
    className,
  );

  if (asChild) {
    return (
      <Slot className={linkClassName} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={linkClassName} {...props}>
      {children}
    </a>
  );
}
