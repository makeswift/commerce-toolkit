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
        'group relative flex max-w-56 items-center overflow-hidden whitespace-nowrap rounded-xl border border-[var(--compare-drawer-link-border,hsl(var(--contrast-100)))] bg-[var(--compare-drawer-card-background,hsl(var(--background)))] font-semibold ring-[var(--compare-drawer-card-focus,hsl(var(--primary)))] transition-all duration-150 hover:bg-[var(--compare-drawer-card-background-hover,hsl(var(--contrast-100)))] focus:outline-none focus:ring-2',
        className,
      )}
      data-slot="compare-drawer-link"
      {...props}
    >
      {children}
    </Component>
  );
}
