import type { ComponentProps } from 'react';

import * as RadioGroupPrimitive from '@/components/radio-group';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  id: string;
}

export type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root> & {
  options: Option[];
  onOptionMouseEnter?: (value: string) => void;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --radio-group-fill: var(--form-fill);
 *   --radio-group-fill-checked: var(--form-fill-checked);
 * }
 * ```
 */
export function RadioGroup({ options, className, onOptionMouseEnter, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root {...props}>
      {options.map(({ value, label, id, disabled }) => (
        <RadioGroupPrimitive.FieldItem key={id}>
          <RadioGroupPrimitive.Item
            disabled={disabled}
            id={id}
            onMouseEnter={() => {
              onOptionMouseEnter?.(value);
            }}
            value={value}
          >
            <RadioGroupPrimitive.Indicator />
          </RadioGroupPrimitive.Item>
          <RadioGroupPrimitive.Label htmlFor={id}>{label}</RadioGroupPrimitive.Label>
        </RadioGroupPrimitive.FieldItem>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
