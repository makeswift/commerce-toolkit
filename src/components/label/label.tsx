import * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root> & {
  colorScheme?: 'light' | 'dark';
};

export function Label({ className, children, colorScheme = 'light', ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'cursor-pointer text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        {
          light: 'text-[var(--checkbox-light-label,hsl(var(--foreground)))]',
          dark: 'text-[var(--checkbox-dark-label,hsl(var(--background)))]',
        }[colorScheme],
      )}
      data-slot="label"
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  );
}
