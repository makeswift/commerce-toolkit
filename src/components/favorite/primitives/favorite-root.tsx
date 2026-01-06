import * as Toggle from '@radix-ui/react-toggle';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FavoriteRootProps = ComponentProps<typeof Toggle.Root>;

export function FavoriteRoot({ children, className, ...props }: FavoriteRootProps) {
  return (
    <Toggle.Root
      className={cn(
        'group relative flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--favorite-border,var(--contrast-100))] text-[var(--favorite-icon,var(--foreground))] ring-[var(--favorite-focus,var(--brand))] transition duration-300 focus-within:outline-none focus-within:ring-2 data-[state=on]:bg-[var(--favorite-on-background,var(--contrast-100))] data-[state=off]:hover:border-[var(--favorite-off-border,var(--contrast-200))]',
        className,
      )}
      {...props}
    >
      {children}
    </Toggle.Root>
  );
}
