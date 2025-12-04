'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CheckboxIndicatorProps = ComponentProps<typeof CheckboxPrimitive.Indicator>;

export function CheckboxIndicator({ className, children, ...props }: CheckboxIndicatorProps) {
  return (
    <CheckboxPrimitive.Indicator
      className={cn(className)}
      data-slot="checkbox-indicator"
      {...props}
    >
      {children}
    </CheckboxPrimitive.Indicator>
  );
}
