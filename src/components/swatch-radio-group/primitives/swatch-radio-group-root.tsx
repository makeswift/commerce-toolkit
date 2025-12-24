import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupRootProps = ComponentProps<typeof RadioGroupPrimitive.Root>;

export function SwatchRadioGroupRoot({ children, className, ...props }: SwatchRadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        // Base layout
        'flex flex-wrap gap-1',
        className,
      )}
      data-slot="swatch-radio-group-root"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}
