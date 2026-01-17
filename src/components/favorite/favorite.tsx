import type { ReactNode } from 'react';

import * as FavoritePrimitive from '@/components/favorite';

export interface FavoriteProps {
  checked?: boolean;
  setChecked: (liked: boolean) => void;
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --favorite-fill: var(--contrast-100);
 *   --favorite-fill-icon: var(--foreground);
 * }
 * ```
 */
export function Favorite({ checked = false, setChecked, icon }: FavoriteProps) {
  return (
    <FavoritePrimitive.Root onPressedChange={setChecked} pressed={checked}>
      <FavoritePrimitive.Heart asChild={icon?.asChild}>{icon?.children}</FavoritePrimitive.Heart>
    </FavoritePrimitive.Root>
  );
}
