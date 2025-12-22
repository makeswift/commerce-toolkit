import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupIndicatorProps = ComponentProps<typeof RadioGroupPrimitive.Indicator>;

export function RadioGroupIndicator({ className, children, ...props }: RadioGroupIndicatorProps) {
  return (
    <RadioGroupPrimitive.Indicator
      className={cn(
        // Base layout
        'relative flex h-full w-full items-center justify-center',
        // After pseudo-element (indicator dot)
        'after:block after:h-3 after:w-3 after:rounded-full',
        'after:bg-[var(--radio-group-light-indicator-background,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="radio-group-indicator"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Indicator>
  );
}
