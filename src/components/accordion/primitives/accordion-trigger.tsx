'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Trigger
      className={cn(
        'group/accordion flex w-full cursor-pointer items-start gap-8 border-none py-3 text-start focus:outline-none @md:py-4',
        className,
      )}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  );
}
