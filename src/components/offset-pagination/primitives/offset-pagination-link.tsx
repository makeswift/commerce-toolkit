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
        'flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--offset-pagination-focus,var(--brand))]',
        'border-[var(--offset-pagination-border,var(--contrast-100))] text-[var(--offset-pagination-text,var(--foreground))] hover:bg-[var(--offset-pagination-background-hover,var(--contrast-100))]',
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
