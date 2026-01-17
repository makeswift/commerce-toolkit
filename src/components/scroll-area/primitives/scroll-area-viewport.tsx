'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaPrimitive.Viewport>;

export function ScrollAreaViewport({ className, children, ...props }: ScrollAreaViewportProps) {
  return (
    <ScrollAreaPrimitive.Viewport
      className={cn(
        'focus-primary transition-[color,box-shadow size-full rounded-[inherit]',
        className,
      )}
      data-slot="scroll-area-viewport"
      {...props}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
  );
}
