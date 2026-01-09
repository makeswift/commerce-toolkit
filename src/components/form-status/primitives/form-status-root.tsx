import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

const formStatusVariants = cva('flex items-center gap-3 rounded-xl px-4 py-3 text-sm', {
  variants: {
    type: {
      error:
        'bg-[var(--form-status-background-error,color-mix(in_oklab,_var(--error),_white_75%))] [color:var(--form-status-text-error,color-mix(in_oklab,var(--error),black_75%))]',
      success:
        'bg-[var(--form-status-background-success,color-mix(in_oklab,_var(--success),_white_75%))] [color:var(--form-status-text-success,color-mix(in_oklab,var(--success),black_75%))]',
    },
  },
  defaultVariants: {
    type: 'success',
  },
});

export type FormStatusRootProps = ComponentProps<'div'> & VariantProps<typeof formStatusVariants>;

export function FormStatusRoot({ className, type, ...props }: FormStatusRootProps) {
  return (
    <div
      className={cn(formStatusVariants({ type }), className)}
      data-slot="form-status-root"
      {...props}
    />
  );
}
