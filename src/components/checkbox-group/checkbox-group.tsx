import type { ComponentProps, ReactNode } from 'react';

import * as CheckboxGroupPrimitive from '@/components/checkbox-group';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  id: string;
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export type CheckboxGroupProps = ComponentProps<typeof CheckboxGroupPrimitive.Root> & {
  options: Option[];
  value: string[];
  onValueChange: (value: string[]) => void;
};

/**
 * This component uses the Checkbox component internally, which supports theming through CSS variables:
 *
 * @see Checkbox for the full list of CSS variables.
 */
export function CheckboxGroup({
  className,
  options,
  value,
  onValueChange,
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive.Root className={className} {...props}>
      {options.map(({ value: optionValue, id, disabled, label, icon }) => (
        <CheckboxGroupPrimitive.FieldItem key={optionValue}>
          <CheckboxGroupPrimitive.Checkbox
            checked={value.includes(optionValue)}
            disabled={disabled}
            icon={icon}
            id={id}
            onCheckedChange={(checked) =>
              onValueChange(
                checked === true ? [...value, optionValue] : value.filter((v) => v !== optionValue),
              )
            }
            value={optionValue}
          />
          <CheckboxGroupPrimitive.Label htmlFor={id}>{label}</CheckboxGroupPrimitive.Label>
        </CheckboxGroupPrimitive.FieldItem>
      ))}
    </CheckboxGroupPrimitive.Root>
  );
}
