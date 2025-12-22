'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import type { ComponentProps } from 'react';
import type { FocusEvent } from 'react';

import * as SelectPrimitive from '@/components/select/primitives';
import { cn } from '@/lib';

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
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --select-light-trigger-background: hsl(var(--background));
 *   --select-light-trigger-background-hover: hsl(var(--contrast-100));
 *   --select-light-trigger-border: hsl(var(--contrast-100));
 *   --select-light-trigger-border-hover: hsl(var(--contrast-300));
 *   --select-light-trigger-border-error: hsl(var(--error));
 *   --select-light-trigger-text: hsl(var(--foreground));
 *   --select-light-trigger-focus: hsl(var(--primary));
 *   --select-light-icon: hsl(var(--foreground));
 *   --select-light-content-background: hsl(var(--background));
 *   --select-light-content-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *   --select-light-item-background-hover: hsl(var(--contrast-100));
 *   --select-light-item-background-focus: hsl(var(--contrast-100));
 *   --select-light-item-text: hsl(var(--contrast-400));
 *   --select-light-item-text-hover: hsl(var(--foreground));
 *   --select-light-item-text-focus: hsl(var(--foreground));
 *   --select-light-item-checked-text-focus: hsl(var(--foreground));
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
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive.Root pending={pending} variant={variant} {...props}>
      <SelectPrimitive.Trigger aria-label={label} id={id} onBlur={onBlur} onFocus={onFocus}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown
            absoluteStrokeWidth
            className={cn(
              'w-5 text-[var(--select-light-icon,hsl(var(--foreground)))] transition-transform',
            )}
            strokeWidth={1.5}
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton>
            <ChevronUp
              absoluteStrokeWidth
              className={cn('w-5 text-[var(--select-light-icon,hsl(var(--foreground)))]')}
              strokeWidth={1.5}
            />
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
            <ChevronDown
              absoluteStrokeWidth
              className={cn('w-5 text-[var(--select-icon,hsl(var(--foreground)))]')}
              strokeWidth={1.5}
            />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
