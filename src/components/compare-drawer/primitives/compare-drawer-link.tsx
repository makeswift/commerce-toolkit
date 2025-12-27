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
        'group/compare-drawer-link relative flex max-w-56 items-center overflow-hidden whitespace-nowrap rounded-xl border border-[var(--compare-drawer-link-border,var(--contrast-100))] bg-[var(--compare-drawer-card-background,var(--background))] font-semibold transition-all duration-150',
        // Hover state
        'hover:bg-[var(--compare-drawer-card-background-hover,var(--contrast-100))]',
        // Focus state
        'focus:outline-none',
        // Focus-visible state
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--compare-drawer-card-focus,var(--brand))]',
        className,
      )}
      data-slot="compare-drawer-link"
      {...props}
    >
      {children}
    </Component>
  );
}
