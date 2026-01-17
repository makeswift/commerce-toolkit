import type { ComponentProps } from 'react';

import * as RadioGroupPrimitive from '@/components/button-radio-group';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  id: string;
}

export type ButtonRadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root> & {
  options: Option[];
  onOptionMouseEnter?: (value: string) => void;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --button-radio-group-font: var(--font-body);
 *   --button-radio-group-fill-unchecked: var(--form-fill-unchecked);
 *   --button-radio-group-fill-checked: var(--form-fill-checked);
 *   --button-radio-group-fill-hover: var(--form-fill-hover);
 *   --button-radio-group-text-unchecked: var(--form-text-unchecked);
 *   --button-radio-group-text-checked: var(--form-text-checked);
 * }
 * ```
 */
export function ButtonRadioGroup({
  options,
  className,
  onOptionMouseEnter,
  ...props
}: ButtonRadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root {...props}>
      {options.map(({ label, id, value, disabled }) => (
        <RadioGroupPrimitive.Item
          aria-label={label}
          disabled={disabled}
          id={id}
          key={value}
          onMouseEnter={() => {
            onOptionMouseEnter?.(value);
          }}
          value={value}
        >
          {label}
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
