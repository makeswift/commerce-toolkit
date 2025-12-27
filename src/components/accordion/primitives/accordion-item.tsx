'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'focus:outline-2',
        // Focus-visible state - using ring for better visibility
        'has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--accordion-focus,var(--brand))] has-[:focus-visible]:ring-offset-4 has-[:focus-visible]:ring-offset-[var(--accordion-offset,var(--background))]',
        className,
      )}
      data-slot="accordion-item"
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}
