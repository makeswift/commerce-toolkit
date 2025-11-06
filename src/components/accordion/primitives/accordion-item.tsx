'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithoutRef } from 'react';

import { useAccordionContext } from '@/components/accordion';
import { cn } from '@/lib';

export type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  const { colorScheme } = useAccordionContext();

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
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}
