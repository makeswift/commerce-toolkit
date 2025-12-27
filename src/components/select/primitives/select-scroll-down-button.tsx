'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectScrollDownButtonProps = ComponentProps<typeof SelectPrimitive.ScrollDownButton>;

export function SelectScrollDownButton({
  children,
  className,
  ...props
}: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn('flex w-full cursor-default items-center justify-center py-3', className)}
      data-slot="select-scroll-down-button"
      {...props}
    >
      {children}
    </SelectPrimitive.ScrollDownButton>
  );
}
