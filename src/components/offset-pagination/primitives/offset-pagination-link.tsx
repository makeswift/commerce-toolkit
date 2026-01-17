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
        'focus-primary flex size-12 items-center justify-center rounded-full border border-[--border-subtle] text-[--offset-pagination-text-primary,var(--text-primary)] transition-colors duration-300 hover:bg-[--offset-pagination-fill-hover,var(--contrast-100)]',
        // Current page state
        'aria-[current=page]:border-[--border-inverse] aria-[current=page]:bg-[--offset-pagination-fill-current,var(--foreground)] aria-[current=page]:text-[--offset-pagination-text-current,var(--text-inverse)] aria-[current=page]:hover:bg-[--offset-pagination-fill-current-hover,var(--contrast-500)]',
        className,
      )}
      data-slot="offset-pagination-link"
      {...props}
    >
      {children}
    </Component>
  );
}
