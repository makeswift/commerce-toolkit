import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ButtonRadioGroupRootProps = ComponentProps<typeof RadioGroupPrimitive.Root>;

export function ButtonRadioGroupRoot({ children, className, ...props }: ButtonRadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('flex flex-wrap gap-2', className)}
      data-slot="button-radio-group-root"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}
