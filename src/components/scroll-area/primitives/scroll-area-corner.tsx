'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { ComponentProps } from 'react';

export type ScrollAreaCornerProps = ComponentProps<typeof ScrollAreaPrimitive.Corner>;

export function ScrollAreaCorner({ className, ...props }: ScrollAreaCornerProps) {
  return (
    <ScrollAreaPrimitive.Corner className={className} data-slot="scroll-area-corner" {...props} />
  );
}
