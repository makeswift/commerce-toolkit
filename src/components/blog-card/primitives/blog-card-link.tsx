import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BlogCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function BlogCardLink({ asChild = false, className, ...props }: BlogCardLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn('focus-primary absolute inset-0 rounded-b-lg rounded-t-2xl', className)}
      data-slot="blog-card-link"
      {...props}
    />
  );
}
