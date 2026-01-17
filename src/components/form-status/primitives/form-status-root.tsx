import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

const formStatusVariants = cva('flex items-center gap-3 rounded-xl px-4 py-3 text-sm', {
  variants: {
    type: {
      error:
        'bg-[--form-status-fill-error,var(--error-background)] text-[--form-status-text-error,var(--error-foreground)]',
      success:
        'bg-[--form-status-fill-success,var(--success-background)] text-[--form-status-text-success,var(--success-foreground)]',
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
