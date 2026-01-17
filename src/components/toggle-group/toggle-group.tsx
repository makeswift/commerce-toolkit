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
 * :root {
 *   --toggle-group-fill-unchecked: var(--form-fill-unchecked);
 *   --toggle-group-fill-checked: var(--form-fill-checked);
 *   --toggle-group-fill-hover: var(--form-fill-hover);
 *   --toggle-group-text-unchecked: var(--form-text-unchecked);
 *   --toggle-group-text-checked: var(--form-text-checked);
 * }
 * ```
 */
export function ToggleGroup({ options, ...props }: ToggleGroupProps) {
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
}
