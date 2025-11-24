'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useEffect, useState } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden',
        // We need to delay the animation until the component is mounted to avoid the animation from being triggered when the component is first rendered.
        isMounted && 'data-[state=closed]:animate-collapse data-[state=open]:animate-expand',
      )}
      data-slot="accordion-content"
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  );
}
