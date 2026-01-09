import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerRemoveProps = ComponentProps<'button'>;

export function CompareDrawerRemove({ className, children, ...props }: CompareDrawerRemoveProps) {
  return (
    <button
      className={cn(
        'absolute -right-2.5 -top-2.5 flex size-7 items-center justify-center rounded-full border border-[var(--compare-drawer-dismiss-border,var(--contrast-100))] bg-[var(--compare-drawer-dismiss-background,var(--background))] text-[var(--compare-drawer-dismiss-icon,var(--contrast-400))] transition-colors duration-150',
        // Hover state
        'hover:border-[var(--compare-drawer-dismiss-border-hover,var(--contrast-200))] hover:bg-[var(--compare-drawer-dismiss-background-hover,var(--contrast-100))] hover:text-[var(--compare-drawer-dismiss-icon-hover,var(--foreground))]',
        // Focus state
        'focus:outline-none',
        // Focus-visible state
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--compare-drawer-card-focus,var(--brand))]',
        className,
      )}
      data-slot="compare-drawer-remove"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
