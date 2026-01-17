import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export const inputVariants = cva(
  [
    'group/input [font-family:var(--input-font,var(--font-body))] relative flex items-center overflow-hidden border border-[--border-subtle] bg-[--input-fill,var(--form-fill)] text-[--input-text,var(--form-text-primary)] transition-colors duration-200',
    // Focus-within state
    'focus-within:border-[--border-focus-secondary]',
    // Aria-invalid state
    'has-[[aria-invalid]]:border-[--border-error]',
    // Disabled state
    'has-[:disabled]:cursor-not-allowed has-[:disabled]:bg-[--input-fill-disabled,var(--form-fill-disabled)] has-[:disabled]:opacity-50',
  ],
  {
    variants: {
      size: {
        small: 'h-9 text-sm px-3 py-2 rounded-lg',
        medium: 'h-11 text-sm px-4 py-3 rounded-lg',
        large: 'h-14 text-base px-5 py-4 rounded-xl',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

export type InputRootProps = ComponentProps<'div'> &
  VariantProps<typeof inputVariants> & {
    prepend?: ReactNode;
  };

export function InputRoot({
  className,
  children,
  prepend,
  size = 'medium',
  ...props
}: InputRootProps) {
  return (
    <div
      className={cn(inputVariants({ size }), className)}
      data-prepend={prepend != null && prepend !== '' ? '' : undefined}
      data-size={size}
      data-slot="input-root"
      {...props}
    >
      {children}
    </div>
  );
}
