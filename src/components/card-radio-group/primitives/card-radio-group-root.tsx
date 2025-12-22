import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CardRadioGroupRootProps = ComponentProps<typeof RadioGroupPrimitive.Root>;

export function CardRadioGroupRoot({ children, className, ...props }: CardRadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('space-y-2', className)}
      data-slot="card-radio-group-root"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}
