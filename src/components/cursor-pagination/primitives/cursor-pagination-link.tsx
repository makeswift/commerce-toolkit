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
        'flex h-12 w-12 items-center justify-center rounded-full border border-[var(--cursor-pagination-border,var(--contrast-100))] bg-[var(--cursor-pagination-background,var(--background))] transition-colors duration-300',
        // Hover state
        'hover:border-[var(--cursor-pagination-border-hover,var(--contrast-200))] hover:bg-[var(--cursor-pagination-background-hover,var(--contrast-100))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cursor-pagination-focus,var(--brand))]',
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
