'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root>;

export function AccordionRoot({ className, children, ...props }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root className={cn(className)} data-slot="accordion-root" {...props}>
      {children}
    </AccordionPrimitive.Root>
  );
}
