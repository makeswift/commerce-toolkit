import type { ComponentProps, ReactNode } from 'react';

import * as RadioGroupPrimitive from '@/components/card-radio-group';

interface Option {
  value: string;
  label: string;
  id: string;
  image?: {
    src: string;
    alt: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  disabled?: boolean;
}

export type CardRadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root> & {
  options: Option[];
  onOptionMouseEnter?: (value: string) => void;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-radio-group-font: var(--font-body);
 *   --card-radio-group-fill-unchecked: var(--form-fill-unchecked);
 *   --card-radio-group-fill-checked: var(--form-fill-checked);
 *   --card-radio-group-fill-hover: var(--form-fill-hover);
 *   --card-radio-group-text-unchecked: var(--form-text-unchecked);
 *   --card-radio-group-text-checked: var(--form-text-checked);
 * }
 * ```
 */
export function CardRadioGroup({
  options,
  className,
  onOptionMouseEnter,
  ...props
}: CardRadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root {...props}>
      {options.map(({ label, value, id, disabled, image }) => (
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
          {image && (
            <RadioGroupPrimitive.Thumbnail>
              <RadioGroupPrimitive.Image alt={image.alt} asChild={image.asChild} src={image.src}>
                {image.children}
              </RadioGroupPrimitive.Image>
            </RadioGroupPrimitive.Thumbnail>
          )}
          <RadioGroupPrimitive.Label>{label}</RadioGroupPrimitive.Label>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
