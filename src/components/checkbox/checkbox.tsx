'use client';

import type { ComponentProps, ReactNode } from 'react';

import * as CheckboxPrimitive from '@/components/checkbox';

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> & {
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --checkbox-fill-unchecked: var(--form-fill-unchecked);
 *   --checkbox-fill-checked: var(--form-fill-checked);
 *   --checkbox-fill-disabled: var(--form-fill-disabled);
 *   --checkbox-text-unchecked: var(--form-text-unchecked);
 *   --checkbox-text-checked: var(--form-text-checked);
 *   --checkbox-text-disabled: var(--form-text-disabled);
 * }
 * ```
 */
export function Checkbox({ className, icon, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={className} {...props}>
      <CheckboxPrimitive.Indicator>
        <CheckboxPrimitive.Icon asChild={icon?.asChild}>{icon?.children}</CheckboxPrimitive.Icon>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
