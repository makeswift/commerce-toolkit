'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaPrimitive.Root>;

export function ScrollAreaRoot({ className, children, ...props }: ScrollAreaRootProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn('relative', className)}
      data-slot="scroll-area-root"
      {...props}
    >
      {children}
    </ScrollAreaPrimitive.Root>
  );
}
