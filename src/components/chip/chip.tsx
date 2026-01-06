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
 *   --chip-focus: var(--foreground);
 *   --chip-font-family: var(--font-family-body);
 *   --chip-background: var(--contrast-100);
 *   --chip-background-hover: var(--contrast-200);
 *   --chip-text: var(--foreground);
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
