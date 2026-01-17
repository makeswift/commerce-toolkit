import * as Toggle from '@radix-ui/react-toggle';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FavoriteRootProps = ComponentProps<typeof Toggle.Root>;

export function FavoriteRoot({ children, className, ...props }: FavoriteRootProps) {
  return (
    <Toggle.Root
      className={cn(
        'focus-primary group/favorite relative flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[--border-subtle] text-[--favorite-fill-icon,var(--foreground)] transition duration-300 data-[state=on]:bg-[--favorite-fill,var(--contrast-100)] data-[state=off]:hover:border-[--border]',
        className,
      )}
      data-slot="favorite-root"
      {...props}
    >
      {children}
    </Toggle.Root>
  );
}
