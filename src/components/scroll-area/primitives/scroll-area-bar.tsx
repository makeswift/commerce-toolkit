'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { ComponentProps } from 'react';

import { useScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib';

export type ScrollAreaBarProps = ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

export function ScrollAreaBar({ className, children, ...props }: ScrollAreaBarProps) {
  const { orientation } = useScrollArea();

  const baseClasses = cn(
    'flex touch-none select-none bg-transparent p-1 transition-colors',
    // Visible state
    'data-[state=visible]:animate-in data-[state=visible]:fade-in-0',
    // Hidden state
    'data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0',
  );

  const verticalClasses = 'h-full w-3.5 border-l border-l-transparent';

  const horizontalClasses = 'h-3.5 flex-col border-t border-t-transparent';

  if (orientation === 'both') {
    return (
      <>
        <ScrollAreaPrimitive.ScrollAreaScrollbar
          className={cn(baseClasses, verticalClasses, className)}
          data-slot="scroll-area-vertical-scrollbar"
          orientation="vertical"
          {...props}
        >
          {children}
        </ScrollAreaPrimitive.ScrollAreaScrollbar>
        <ScrollAreaPrimitive.ScrollAreaScrollbar
          className={cn(baseClasses, horizontalClasses, className)}
          data-slot="scroll-area-horizontal-scrollbar"
          orientation="horizontal"
          {...props}
        >
          {children}
        </ScrollAreaPrimitive.ScrollAreaScrollbar>
      </>
    );
  }

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className={cn(
        baseClasses,
        orientation === 'vertical' && verticalClasses,
        orientation === 'horizontal' && horizontalClasses,
        className,
      )}
      data-slot={`scroll-area-${orientation}-scrollbar`}
      orientation={orientation}
      {...props}
    >
      {children}
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}
