'use client';

import type { ComponentProps, FocusEvent, ReactNode } from 'react';

import * as SelectPrimitive from '@/components/select/primitives';

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root> & {
  label: string;
  pending?: boolean;
  placeholder?: string;
  variant?: 'round' | 'rectangle';
  options: Array<{ label: string; value: string }>;
  onFocus?: (e: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
  onOptionMouseEnter?: (value: string) => void;
  id: string;
  triggerIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  scrollUpIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  scrollDownIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --select-fill: var(--form-fill);
 *   --select-fill-hover: var(--form-fill-hover);
 *   --select-fill-focus: var(--form-fill-hover);
 *   --select-fill-icon: var(--form-fill-icon);
 *   --select-text-primary: var(--form-text-primary);
 *   --select-text-secondary: var(--form-text-secondary);
 *   --select-text-hover: var(--form-text-hover);
 *   --select-text-focus: var(--form-text-hover);
 * }
 * ```
 */
export function Select({
  pending = false,
  placeholder = 'Select an item',
  variant = 'rectangle',
  label,
  options,
  className,
  onFocus,
  onBlur,
  onOptionMouseEnter,
  value,
  id,
  triggerIcon,
  scrollUpIcon,
  scrollDownIcon,
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive.Root className={className} pending={pending} variant={variant} {...props}>
      <SelectPrimitive.Trigger aria-label={label} id={id} onBlur={onBlur} onFocus={onFocus}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <SelectPrimitive.TriggerIcon asChild={triggerIcon?.asChild}>
            {triggerIcon?.children}
          </SelectPrimitive.TriggerIcon>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.ScrollUpIcon asChild={scrollUpIcon?.asChild}>
              {scrollUpIcon?.children}
            </SelectPrimitive.ScrollUpIcon>
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                onMouseEnter={() => {
                  onOptionMouseEnter?.(option.value);
                }}
                value={option.value}
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton>
            <SelectPrimitive.ScrollDownIcon asChild={scrollDownIcon?.asChild}>
              {scrollDownIcon?.children}
            </SelectPrimitive.ScrollDownIcon>
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
