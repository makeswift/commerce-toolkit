import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CompareDrawerLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function CompareDrawerLink({
  asChild = false,
  className,
  children,
  ...props
}: CompareDrawerLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'focus-primary group/compare-drawer-link relative flex max-w-56 items-center overflow-hidden whitespace-nowrap rounded-xl border border-[--border-subtle] bg-[--compare-drawer-fill-primary,var(--background)] font-semibold transition-all duration-150 hover:bg-[--compare-drawer-fill-hover,var(--contrast-100)]',
        className,
      )}
      data-slot="compare-drawer-link"
      {...props}
    >
      {children}
    </Component>
  );
}
