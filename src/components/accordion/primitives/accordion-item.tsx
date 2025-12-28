'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'ring-offset-[var(--acordion-light-offset,hsl(var(--background)))] focus:outline-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--accordion-focus,hsl(var(--primary)))] has-[:focus-visible]:ring-offset-4',
        className,
      )}
      data-slot="accordion-item"
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}
