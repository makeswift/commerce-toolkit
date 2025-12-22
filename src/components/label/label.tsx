import * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'block cursor-pointer text-xs font-semibold text-[var(--label-text,hsl(var(--contrast-500)))] [font-family:var(--label-font-family,var(--font-family-body))]',
        // Horizontal label orientation (via data-label-orientation on any ancestor)
        '[[data-label-orientation=horizontal]_&]:text-sm [[data-label-orientation=horizontal]_&]:font-normal [[data-label-orientation=horizontal]_&]:text-[var(--label-horizontal-text,hsl(var(--foreground)))]',
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
