import type { ComponentProps } from 'react';

import { Checkbox } from '@/components/checkbox';
import * as CheckboxGroupPrimitive from '@/components/checkbox-group';
import * as Field from '@/components/field';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  id: string;
}

export type CheckboxGroupProps = ComponentProps<typeof CheckboxGroupPrimitive.Root> & {
  options: Option[];
  value: string[];
  onValueChange: (value: string[]) => void;
};

export function CheckboxGroup({
  className,
  options,
  value,
  onValueChange,
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive.Root className={className} {...props}>
      {options.map(({ value: optionValue, id, disabled, label }) => (
        <Field.Item key={optionValue} orientation="horizontal">
          <Checkbox
            checked={value.includes(optionValue)}
            disabled={disabled}
            id={id}
            onCheckedChange={(checked) =>
              onValueChange(
                checked === true ? [...value, optionValue] : value.filter((v) => v !== optionValue),
              )
            }
            value={optionValue}
          />
          <Field.Label htmlFor={id}>{label}</Field.Label>
        </Field.Item>
      ))}
    </CheckboxGroupPrimitive.Root>
  );
}
