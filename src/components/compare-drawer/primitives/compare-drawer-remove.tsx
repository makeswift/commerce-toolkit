import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerRemoveProps = ComponentProps<'button'>;

export function CompareDrawerRemove({ className, children, ...props }: CompareDrawerRemoveProps) {
  return (
    <button
      className={cn(
        'absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--compare-drawer-dismiss-border,hsl(var(--contrast-100)))] bg-[var(--compare-drawer-dismiss-background,hsl(var(--background)))] text-[var(--compare-drawer-dismiss-icon,hsl(var(--contrast-400)))] transition-colors duration-150 hover:border-[var(--compare-drawer-dismiss-border-hover,hsl(var(--contrast-200)))] hover:bg-[var(--compare-drawer-dismiss-background-hover,hsl(var(--contrast-100)))] hover:text-[var(--compare-drawer-dismiss-icon-hover,hsl(var(--foreground)))]',
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
