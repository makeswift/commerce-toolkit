import type { ComponentProps } from 'react';

import { useAlert } from '@/components/alert';
import { cn } from '@/lib';

export type AlertDescriptionProps = ComponentProps<'p'>;

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const { description } = useAlert();

  return (
    <p
      className={cn(
        'text-xs font-medium text-[color:var(--alert-description-text,color-mix(in_oklab,hsl(var(--foreground))_50%,transparent))]',
        className,
      )}
      data-slot="alert-description"
      {...props}
    >
      {description}
    </p>
  );
}
