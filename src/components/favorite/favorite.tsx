import * as FavoritePrimitive from '@/components/favorite';

export interface FavoriteProps {
  checked?: boolean;
  setChecked: (liked: boolean) => void;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --favorite-focus: hsl(var(--primary));
 *   --favorite-border: hsl(var(--contrast-100));
 *   --favorite-icon: hsl(var(--foreground));
 *   --favorite-on-background: hsl(var(--contrast-100));
 *   --favorite-off-border: hsl(var(--contrast-200));
 * }
 * ```
 */
export function Favorite({ checked = false, setChecked }: FavoriteProps) {
  return (
    <FavoritePrimitive.Root onPressedChange={setChecked} pressed={checked}>
      <FavoritePrimitive.Heart filled={checked} />
    </FavoritePrimitive.Root>
  );
}
