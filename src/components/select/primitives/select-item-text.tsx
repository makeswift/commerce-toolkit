'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectItemTextProps = ComponentProps<typeof SelectPrimitive.ItemText>;

export function SelectItemText({ children, className, ...props }: SelectItemTextProps) {
  return (
    <SelectPrimitive.ItemText className={cn(className)} data-slot="select-item-text" {...props}>
      {children}
    </SelectPrimitive.ItemText>
  );
}
