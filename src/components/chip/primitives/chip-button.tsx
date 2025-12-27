import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export interface ChipButtonProps extends ComponentProps<'button'> {
  children?: ReactNode;
}

export function ChipButton({ className, children, ...props }: ChipButtonProps) {
  return (
    <button
      className={cn(
        'flex size-5 items-center justify-center rounded-full',
        // Hover state
        'hover:bg-[var(--chip-background-hover,var(--contrast-200))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--chip-focus,var(--foreground))]',
        className,
      )}
      data-slot="chip-button"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
