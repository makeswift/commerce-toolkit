'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaThumb>;

export function ScrollAreaThumb({ className, ...props }: ScrollAreaThumbProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        'relative flex-1 rounded-full bg-[--scroll-area-fill,var(--contrast-200)]',
        className,
      )}
      data-slot="scroll-area-thumb"
      {...props}
    />
  );
}
