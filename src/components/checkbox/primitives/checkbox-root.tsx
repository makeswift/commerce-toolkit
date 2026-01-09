'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive.Root>;

export function CheckboxRoot({ children, className, ...props }: CheckboxRootProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'peer flex size-5 items-center justify-center rounded-md border transition-colors duration-150',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--checkbox-focus,var(--brand))]',
        // Disabled state
        'disabled:cursor-not-allowed disabled:border-[var(--checkbox-light-disabled-border,var(--contrast-200))] disabled:bg-[var(--checkbox-light-disabled-background,var(--contrast-100))] disabled:text-[var(--checkbox-light-disabled-icon,var(--contrast-300))]',
        // Enabled + Checked state
        'enabled:data-[state=checked]:border-[var(--checkbox-light-checked-border,var(--foreground))] enabled:data-[state=checked]:bg-[var(--checkbox-light-checked-background,var(--foreground))] enabled:data-[state=checked]:text-[var(--checkbox-light-checked-text,var(--background))]',
        // Enabled + Unchecked state
        'enabled:data-[state=unchecked]:border-[var(--checkbox-light-unchecked-border,var(--contrast-200))] enabled:data-[state=unchecked]:bg-[var(--checkbox-light-unchecked-background,var(--background))] enabled:data-[state=unchecked]:text-[var(--checkbox-light-unchecked-text,var(--foreground))]',
        // Enabled + Checked + Hover state
        'enabled:data-[state=checked]:hover:border-[var(--checkbox-light-checked-border-hover,var(--foreground))]',
        // Enabled + Unchecked + Hover state
        'enabled:data-[state=unchecked]:hover:border-[var(--checkbox-light-unchecked-border-hover,var(--contrast-300))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--checkbox-light-error,var(--error))]',
        className,
      )}
      data-slot="checkbox-root"
      {...props}
    >
      {children}
    </CheckboxPrimitive.Root>
  );
}
