import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type InputFieldProps = ComponentProps<'input'>;

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn(
        // Base layout
        'w-full [appearance:textfield]',
        // Spacing (default)
        'px-6 py-3',
        // Spacing (with prepend)
        'group-data-[prepend]/input:py-2.5 group-data-[prepend]/input:pe-4 group-data-[prepend]/input:ps-12',
        // Typography
        'text-sm font-normal',
        // Colors
        'bg-[var(--input-light-background,hsl(var(--background)))] text-[var(--input-light-text,hsl(var(--foreground)))]',
        // Focus state
        'focus:outline-none',
        // Placeholder state
        'placeholder:font-normal placeholder:text-[var(--input-light-placeholder,hsl(var(--contrast-500)))]',
        // Webkit spin button overrides
        '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        className,
      )}
      {...props}
    />
  );
}
