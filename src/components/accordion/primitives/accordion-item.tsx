'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item className={cn(className)} data-slot="accordion-item" {...props}>
      {children}
    </AccordionPrimitive.Item>
  );
}
