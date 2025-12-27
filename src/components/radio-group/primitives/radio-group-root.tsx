'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupRootProps = ComponentProps<typeof RadioGroupPrimitive.Root>;

export function RadioGroupRoot({ children, className, ...props }: RadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      data-slot="radio-group-root"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}
