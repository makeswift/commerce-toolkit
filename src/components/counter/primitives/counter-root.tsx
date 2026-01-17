import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CounterRootProps = ComponentProps<'div'>;

export function CounterRoot({ children, className, ...props }: CounterRootProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg border border-[--border-subtle] bg-[--counter-fill,var(--form-fill)] text-[--counter-text,var(--form-text-primary)] [font-family:var(--counter-font,var(--font-body))]',
        className,
      )}
      data-slot="counter-root"
      {...props}
    >
      {children}
    </div>
  );
}
