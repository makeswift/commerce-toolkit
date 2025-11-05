import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AlertDescriptionProps = ComponentProps<'p'>;

export function AlertDescription({ children, className, ...props }: AlertDescriptionProps) {
  return (
    <p
      className={cn(
        'text-xs font-medium text-[color:var(--alert-description-text,color-mix(in_oklab,hsl(var(--foreground))_50%,transparent))]',
        className,
      )}
      data-slot="alert-description"
      {...props}
    >
      {children}
    </p>
  );
}
