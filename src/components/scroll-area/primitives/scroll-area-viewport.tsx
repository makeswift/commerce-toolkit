'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaPrimitive.Viewport>;

export function ScrollAreaViewport({ className, children, ...props }: ScrollAreaViewportProps) {
  return (
    <ScrollAreaPrimitive.Viewport
      className={cn(
        'size-full rounded-[inherit] transition-[color,box-shadow]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--scroll-area-focus,var(--brand))]',
        className,
      )}
      data-slot="scroll-area-viewport"
      {...props}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
  );
}
