'use client';

import { Check } from 'lucide-react';
import type { ComponentProps } from 'react';

import * as CheckboxPrimitive from '@/components/checkbox';

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> & {
  id?: string;
  label?: string;
};

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
 *    --checkbox-font-family: var(--font-family-body);
 *  }
 * ```
 */
export function Checkbox({ className, id, label, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={className} {...props}>
      <CheckboxPrimitive.Indicator>
        <Check absoluteStrokeWidth className="h-4 w-4" color="currentColor" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
