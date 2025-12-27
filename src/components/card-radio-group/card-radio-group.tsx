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
 *  :root {
 *   --card-radio-group-focus: var(--brand);
 *   --card-radio-group-light-unchecked-border: var(--contrast-100);
 *   --card-radio-group-light-unchecked-border-hover: var(--contrast-200);
 *   --card-radio-group-light-unchecked-background: var(--background);
 *   --card-radio-group-light-unchecked-text: var(--foreground);
 *   --card-radio-group-light-unchecked-background-hover: var(--contrast-100);
 *   --card-radio-group-light-checked-background: var(--foreground);
 *   --card-radio-group-light-checked-text: var(--background);
 *   --card-radio-group-light-border-error: var(--error);
 *  }
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
