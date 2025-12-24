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
 *  :root {
 *   --button-radio-group-focus: var(--primary);
 *   --button-radio-group-light-unchecked-border: var(--contrast-100);
 *   --button-radio-group-light-unchecked-background: var(--background);
 *   --button-radio-group-light-unchecked-text: var(--foreground);
 *   --button-radio-group-light-unchecked-border-hover: var(--contrast-200);
 *   --button-radio-group-light-unchecked-background-hover: var(--contrast-100);
 *   --button-radio-group-light-checked-background: var(--foreground);
 *   --button-radio-group-light-checked-text: var(--background);
 *   --button-radio-group-light-border-error: var(--error);
 *  }
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
