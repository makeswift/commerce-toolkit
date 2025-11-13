import type { ComponentProps } from 'react';

import * as ChipPrimitive from '@/components/chip';

export interface ChipProps extends ComponentProps<'button'> {
  removeLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --chip-focus: hsl(var(--foreground));
 *   --chip-font-family: var(--font-family-body);
 *   --chip-background: hsl(var(--contrast-100));
 *   --chip-background-hover: hsl(var(--contrast-200));
 *   --chip-text: hsl(var(--foreground));
 * }
 * ```
 */
export function Chip({ className, children, removeLabel = 'Remove', ...props }: ChipProps) {
  return (
    <ChipPrimitive.Root className={className}>
      {children}
      <ChipPrimitive.Button title={removeLabel} {...props} />
    </ChipPrimitive.Root>
  );
}
