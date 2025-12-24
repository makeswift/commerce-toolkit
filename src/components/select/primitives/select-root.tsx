'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectRootProps = ComponentProps<typeof SelectPrimitive.Root> & {
  className?: string;
  variant?: 'round' | 'rectangle';
  pending?: boolean;
};

export function SelectRoot({
  className,
  variant = 'rectangle',
  pending = false,
  children,
  ...props
}: SelectRootProps) {
  return (
    <div
      className={cn('group/select contents', className)}
      data-pending={pending ? true : undefined}
      data-slot="select-root"
      data-variant={variant}
    >
      <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
    </div>
  );
}
