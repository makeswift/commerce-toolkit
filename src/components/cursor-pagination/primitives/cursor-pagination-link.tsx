import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CursorPaginationLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function CursorPaginationLink({
  className,
  children,
  asChild = false,
  ...props
}: CursorPaginationLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'focus-primary flex h-12 w-12 items-center justify-center rounded-full border border-[--border-subtle] bg-[--cursor-pagination-fill,var(--background)] transition-colors duration-300',
        // Hover state
        'hover:border-[--border-hover] hover:bg-[--cursor-pagination-fill-hover,var(--contrast-100)]',
        // Disabled state (aria-disabled)
        'aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-25',
        className,
      )}
      data-slot="cursor-pagination-link"
      {...props}
    >
      {children}
    </Component>
  );
}
