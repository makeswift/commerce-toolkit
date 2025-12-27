import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type InputFieldProps = ComponentProps<'input'>;

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn(
        'w-full bg-[var(--input-light-background,var(--background))] px-6 py-3 text-sm font-normal text-[var(--input-light-text,var(--foreground))] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        // Focus state
        'focus:outline-none',
        // Placeholder state
        'placeholder:font-normal placeholder:text-[var(--input-light-placeholder,var(--contrast-500))]',
        // Group states (with prepend)
        'group-data-[prepend]/input:py-2.5 group-data-[prepend]/input:pe-4 group-data-[prepend]/input:ps-12',
        className,
      )}
      data-slot="input-field"
      {...props}
    />
  );
}
