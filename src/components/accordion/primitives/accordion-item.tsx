'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { useAccordion, useAccordionItem } from '@/components/accordion';
import { cn } from '@/lib';

export type AccordionItemProps = Omit<ComponentProps<typeof AccordionPrimitive.Item>, 'value'>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  const { colorScheme } = useAccordion();
  const { value } = useAccordionItem();

  return (
    <AccordionPrimitive.Item
      className={cn(
        'focus:outline-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--accordion-focus,hsl(var(--primary)))] has-[:focus-visible]:ring-offset-4',
        {
          light: 'ring-offset-[var(--acordion-light-offset,hsl(var(--background)))]',
          dark: 'ring-offset-[var(--acordion-dark-offset,hsl(var(--foreground)))]',
        }[colorScheme],
        className,
      )}
      data-slot="accordion-item"
      value={value}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}
