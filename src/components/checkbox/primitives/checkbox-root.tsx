'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { createContext, use, useMemo } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

interface CheckboxContext {
  colorScheme: 'light' | 'dark';
}

export const CheckboxContext = createContext<CheckboxContext | undefined>(undefined);

export type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive.Root> & {
  colorScheme?: 'light' | 'dark';
};

export function CheckboxRoot({
  children,
  className,
  colorScheme = 'light',
  ...props
}: CheckboxRootProps) {
  const contextValues = useMemo(
    () => ({
      colorScheme,
    }),
    [colorScheme],
  );

  return (
    <CheckboxContext.Provider value={contextValues}>
      <CheckboxPrimitive.Root
        className={cn(
          'peer flex h-5 w-5 items-center justify-center rounded-md border transition-colors duration-150 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-[var(--checkbox-focus,hsl(var(--primary)))] disabled:cursor-not-allowed',
          {
            light: cn(
              // Disabled states
              'disabled:border-[var(--checkbox-light-disabled-border,hsl(var(--contrast-200)))] disabled:bg-[var(--checkbox-light-disabled-background,hsl(var(--contrast-100)))] disabled:text-[var(--checkbox-light-disabled-icon,hsl(var(--contrast-300)))]',
              // Normal states
              'enabled:data-[state=checked]:border-[var(--checkbox-light-checked-border,hsl(var(--foreground)))] enabled:data-[state=unchecked]:border-[var(--checkbox-light-unchecked-border,hsl(var(--contrast-200)))] enabled:data-[state=checked]:bg-[var(--checkbox-light-checked-background,hsl(var(--foreground)))] enabled:data-[state=unchecked]:bg-[var(--checkbox-light-unchecked-background,hsl(var(--background)))] enabled:data-[state=checked]:text-[var(--checkbox-light-checked-text,hsl(var(--background)))] enabled:data-[state=unchecked]:text-[var(--checkbox-light-unchecked-text,hsl(var(--foreground)))]',
              // Hover states (only apply when checkbox is enabled)
              'enabled:data-[state=checked]:hover:border-[var(--checkbox-light-checked-border-hover,hsl(var(--foreground)))] enabled:data-[state=unchecked]:hover:border-[var(--checkbox-light-unchecked-border-hover,hsl(var(--contrast-300)))]',
              // Invalid states
              'aria-invalid:border-[var(--checkbox-light-error,hsl(var(--error)))]',
            ),
            dark: cn(
              // Disabled states
              'disabled:border-[var(--checkbox-dark-disabled-border,hsl(var(--contrast-200)))] disabled:bg-[var(--checkbox-dark-disabled-background,hsl(var(--contrast-100)))] disabled:text-[var(--checkbox-dark-disabled-icon,hsl(var(--contrast-300)))]',
              // Normal states
              'enabled:data-[state=checked]:border-[var(--checkbox-dark-checked-border,hsl(var(--background)))] enabled:data-[state=unchecked]:border-[var(--checkbox-dark-unchecked-border,hsl(var(--contrast-400)))] enabled:data-[state=checked]:bg-[var(--checkbox-dark-checked-background,hsl(var(--foreground)))] enabled:data-[state=unchecked]:bg-[var(--checkbox-dark-unchecked-background,hsl(var(--foreground)))] enabled:data-[state=checked]:text-[var(--checkbox-dark-checked-text,hsl(var(--background)))] enabled:data-[state=unchecked]:text-[var(--checkbox-dark-unchecked-text,hsl(var(--background)))]',
              // Hover states (only apply when checkbox is enabled)
              'enabled:data-[state=checked]:hover:border-[var(--checkbox-dark-checked-border-hover,hsl(var(--background)))] enabled:data-[state=unchecked]:hover:border-[var(--checkbox-dark-unchecked-border-hover,hsl(var(--contrast-300)))]',
              // Invalid states
              'aria-invalid:border-[var(--checkbox-dark-error,hsl(var(--error)))]',
            ),
          }[colorScheme],
        )}
        data-slot="checkbox-root"
        {...props}
      >
        {children}
      </CheckboxPrimitive.Root>
    </CheckboxContext.Provider>
  );
}

export function useCheckbox() {
  const context = use(CheckboxContext);

  if (context === undefined) {
    throw new Error('useCheckbox must be used within an CheckboxRoot');
  }

  return context;
}
