import * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --label-text: var(--form-text-primary);
 *   --label-font: var(--font-body);
 *  }
 * ```
 */
export function Label({ className, children, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'block cursor-pointer text-xs font-semibold text-[--label-text,var(--font-text-primary)] [font-family:var(--label-font,var(--font-body))]',
        // Horizontal label orientation (via data-label-orientation on any ancestor)
        '[[data-label-orientation=horizontal]_&]:text-sm [[data-label-orientation=horizontal]_&]:font-normal',
        // Disabled state
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      data-slot="label"
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  );
}
