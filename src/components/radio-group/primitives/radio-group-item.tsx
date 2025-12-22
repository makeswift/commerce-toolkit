import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function RadioGroupItem({ children, className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        // Base layout
        'h-5 w-5 cursor-default',
        // Colors
        'bg-[var(--radio-group-light-background,hsl(var(--background)))]',
        'border-[var(--radio-group-light-border,hsl(var(--contrast-200)))]',
        // Borders & rounded
        'rounded-full border',
        // Effects
        'outline-none',
        // Hover state
        'hover:border-[var(--radio-group-light-border-hover,hsl(var(--contrast-300)))]',
        // Focus state
        'focus:border-[var(--radio-group-light-border-focus,hsl(var(--contrast-300)))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--radio-group-light-border-error,hsl(var(--error)))]',
        'aria-invalid:disabled:border-[var(--radio-group-light-disabled-border-error,color-mix(in_oklab,hsl(var(--error))_50%,transparent))]',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        '[&:disabled+label]:pointer-events-none [&:disabled+label]:opacity-50',
        className,
      )}
      data-slot="radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}
