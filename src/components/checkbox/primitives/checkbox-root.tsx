'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive.Root>;

export function CheckboxRoot({ children, className, ...props }: CheckboxRootProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'focus-primary peer flex size-5 items-center justify-center rounded-md border transition-colors duration-150',
        // Disabled state
        'disabled:cursor-not-allowed disabled:border-[--border] disabled:bg-[--checkbox-fill-disabled,var(--form-fill-disabled)] disabled:text-[--checkbox-text-disabled,var(--form-text-disabled)]',
        // Enabled + Checked state
        'enabled:data-[state=checked]:border-[--border-focus-secondary] enabled:data-[state=checked]:bg-[--checkbox-fill-checked,var(--form-fill-checked)] enabled:data-[state=checked]:text-[--checkbox-text-checked,var(--form-text-checked)]',
        // Enabled + Unchecked state
        'enabled:data-[state=unchecked]:border-[--border] enabled:data-[state=unchecked]:bg-[--checkbox-fill-unchecked,var(--form-fill-unchecked)] enabled:data-[state=unchecked]:text-[--checkbox-text-unchecked-text,var(--form-text-unchecked)]',
        // Enabled + Checked + Hover state
        'enabled:data-[state=checked]:hover:border-[--border-checked]',
        // Enabled + Unchecked + Hover state
        'enabled:data-[state=unchecked]:hover:border-[--border-hover]',
        // Aria-invalid state
        'aria-invalid:border-[--border-error]',
        className,
      )}
      data-slot="checkbox-root"
      {...props}
    >
      {children}
    </CheckboxPrimitive.Root>
  );
}
