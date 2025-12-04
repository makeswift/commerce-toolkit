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
        'flex h-12 w-12 items-center justify-center rounded-full border border-[var(--cursor-pagination-border,hsl(var(--contrast-100)))] bg-[var(--cursor-pagination-background,hsl(var(--background)))] ring-[var(--cursor-pagination-focus,hsl(var(--primary)))] transition-colors duration-300 hover:border-[var(--cursor-pagination-border-hover,hsl(var(--contrast-200)))] hover:bg-[var(--cursor-pagination-background-hover,hsl(var(--contrast-100)))] focus:outline-none focus-visible:ring-2 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-25',
        className,
      )}
      data-slot="cursor-pagination-link"
      {...props}
    />
  );
}
