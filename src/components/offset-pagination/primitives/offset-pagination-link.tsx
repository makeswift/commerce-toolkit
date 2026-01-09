import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface OffsetPaginationLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function OffsetPaginationLink({
  className,
  children,
  asChild = false,
  ...props
}: OffsetPaginationLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'flex size-12 items-center justify-center rounded-full border border-[var(--offset-pagination-border,var(--contrast-100))] text-[var(--offset-pagination-text,var(--foreground))] transition-colors duration-300',
        // Hover state
        'hover:bg-[var(--offset-pagination-background-hover,var(--contrast-100))]',
        // Focus state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--offset-pagination-focus,var(--brand))]',
        // Current page state
        'aria-[current=page]:border-[var(--offset-pagination-current-page-border,var(--foreground))] aria-[current=page]:bg-[var(--offset-pagination-current-page-background,var(--foreground))] aria-[current=page]:text-[var(--offset-pagination-current-page-text,var(--background))] aria-[current=page]:hover:bg-[var(--offset-pagination-current-page-background-hover,var(--contrast-500))]',
        className,
      )}
      data-slot="offset-pagination-link"
      {...props}
    >
      {children}
    </Component>
  );
}
