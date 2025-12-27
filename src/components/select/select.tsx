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
 *   --select-light-trigger-background: var(--background);
 *   --select-light-trigger-background-hover: var(--contrast-100);
 *   --select-light-trigger-border: var(--contrast-100);
 *   --select-light-trigger-border-hover: var(--contrast-300);
 *   --select-light-trigger-border-error: var(--error);
 *   --select-light-trigger-text: var(--foreground);
 *   --select-light-trigger-focus: var(--brand);
 *   --select-light-icon: var(--foreground);
 *   --select-light-content-background: var(--background);
 *   --select-light-content-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *   --select-light-item-background-hover: var(--contrast-100);
 *   --select-light-item-background-focus: var(--contrast-100);
 *   --select-light-item-text: var(--contrast-400);
 *   --select-light-item-text-hover: var(--foreground);
 *   --select-light-item-text-focus: var(--foreground);
 *   --select-light-item-checked-text-focus: var(--foreground);
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
