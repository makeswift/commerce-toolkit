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
 *   --favorite-focus: var(--brand);
 *   --favorite-border: var(--contrast-100);
 *   --favorite-icon: var(--foreground);
 *   --favorite-on-background: var(--contrast-100);
 *   --favorite-off-border: var(--contrast-200);
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
