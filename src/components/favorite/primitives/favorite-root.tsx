import * as Toggle from '@radix-ui/react-toggle';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FavoriteRootProps = ComponentProps<typeof Toggle.Root>;

export function FavoriteRoot({ children, className, ...props }: FavoriteRootProps) {
  return (
    <Toggle.Root
      className={cn(
        'group/favorite relative flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--favorite-border,var(--contrast-100))] text-[var(--favorite-icon,var(--foreground))] transition duration-300',
        // Hover state (off)
        'data-[state=off]:hover:border-[var(--favorite-off-border,var(--contrast-200))]',
        // Focus state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--favorite-focus,var(--brand))]',
        // On state
        'data-[state=on]:bg-[var(--favorite-on-background,var(--contrast-100))]',
        className,
      )}
      data-slot="favorite-root"
      {...props}
    >
      {children}
    </Toggle.Root>
  );
}
