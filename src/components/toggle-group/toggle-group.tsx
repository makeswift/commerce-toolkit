'use client';

import type { ComponentProps } from 'react';

import * as ToggleGroupPrimitive from '@/components/toggle-group';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  id: string;
}

export type ToggleGroupProps = ComponentProps<typeof ToggleGroupPrimitive.Root> & {
  options: Option[];
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --toggle-group-light-focus: var(--primary);
 *   --toggle-group-light-border: var(--contrast-100);
 *   --toggle-group-light-on-border: var(--foreground);
 *   --toggle-group-light-on-background: var(--foreground);
 *   --toggle-group-light-off-background: var(--background);
 *   --toggle-group-light-off-text: var(--foreground);
 *   --toggle-group-light-on-text: var(--background);
 *   --toggle-group-light-off-border-hover: var(--contrast-200);
 *   --toggle-group-light-off-background-hover: var(--contrast-100);
 * }
 * ```
 */
export const ToggleGroup = ({ options, ...props }: ToggleGroupProps) => {
  return (
    <ToggleGroupPrimitive.Root {...props}>
      {options.map(({ label, value, id, disabled }) => (
        <ToggleGroupPrimitive.Item
          aria-label={label}
          disabled={disabled}
          id={id}
          key={value}
          value={value}
        >
          {label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
};
