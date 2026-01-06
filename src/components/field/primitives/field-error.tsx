import { CircleAlert } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib';

export type FieldErrorProps = ComponentPropsWithoutRef<'div'>;

export function FieldError({ className, children, ...props }: FieldErrorProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 text-xs text-[var(--field-error,var(--error))]',
        className,
      )}
      data-slot="field-error"
      {...props}
    >
      <CircleAlert size={16} strokeWidth={1.5} />
      {children}
    </div>
  );
}
