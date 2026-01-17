import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type InputFieldProps = ComponentProps<'input'>;

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn(
        'w-full bg-transparent [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        // Placeholder state
        'placeholder:font-normal placeholder:text-[--input-text-placeholder,var(--form-text-placeholder)]',
        // Disabled state
        'disabled:cursor-not-allowed',
        // Group states (with prepend)
        // 'group-data-[prepend]/input:py-2.5 group-data-[prepend]/input:pe-4 group-data-[prepend]/input:ps-12',
        className,
      )}
      data-slot="input-field"
      {...props}
    />
  );
}
