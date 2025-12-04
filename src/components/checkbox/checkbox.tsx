'use client';

import { Check } from 'lucide-react';
import type { ComponentProps } from 'react';

import * as CheckboxPrimitive from '@/components/checkbox';

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --checkbox-focus: var(--primary);
 *    --checkbox-light-label: var(--foreground);
 *    --checkbox-light-error: var(--error);
 *    --checkbox-light-unchecked-border: var(--contrast-200);
 *    --checkbox-light-unchecked-border-hover: var(--contrast-300);
 *    --checkbox-light-unchecked-background: var(--background);
 *    --checkbox-light-unchecked-icon: var(--foreground);
 *    --checkbox-light-checked-border: var(--foreground);
 *    --checkbox-light-checked-border-hover: var(--foreground);
 *    --checkbox-light-checked-background: var(--foreground);
 *    --checkbox-light-checked-icon: var(--background);
 *    --checkbox-light-disabled-border: var(--contrast-200);
 *    --checkbox-light-disabled-background: var(--contrast-100);
 *    --checkbox-light-disabled-icon: var(--contrast-300);
 *    --checkbox-dark-label: var(--background);
 *    --checkbox-dark-error: var(--error);
 *    --checkbox-dark-unchecked-border: var(--contrast-400);
 *    --checkbox-dark-unchecked-border-hover: var(--contrast-300);
 *    --checkbox-dark-unchecked-background: var(--foreground);
 *    --checkbox-dark-unchecked-icon: var(--background);
 *    --checkbox-dark-checked-border: var(--background);
 *    --checkbox-dark-checked-border-hover: var(--background);
 *    --checkbox-dark-checked-background: var(--foreground);
 *    --checkbox-dark-checked-icon: var(--foreground);
 *    --checkbox-dark-disabled-border: var(--contrast-200);
 *    --checkbox-dark-disabled-background: var(--contrast-100);
 *    --checkbox-dark-disabled-icon: var(--contrast-300);
 *    --checkbox-font-family: var(--font-family-body);
 *  }
 * ```
 */
export function Checkbox({ className, colorScheme = 'light', ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={className} colorScheme={colorScheme} {...props}>
      <CheckboxPrimitive.Indicator>
        <Check className="h-4 w-4" color="currentColor" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
