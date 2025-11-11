'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useEffect, useState } from 'react';
import type { ComponentProps } from 'react';

import { useAccordion, useAccordionItem } from '@/components/accordion';
import { cn } from '@/lib';

export type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;

export function AccordionContent({ className, ...props }: AccordionContentProps) {
  const { colorScheme } = useAccordion();
  const { content } = useAccordionItem();

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
      {...props}
    >
      <div
        className={cn(
          'py-3 text-base font-light leading-normal [font-family:var(--accordion-content-font-family,var(--font-family-body))]',
          {
            light: 'text-[var(--accordion-light-content-text,hsl(var(--foreground)))]',
            dark: 'text-[var(--accordion-dark-content-text,hsl(var(--background)))]',
          }[colorScheme],
          className,
        )}
        data-slot="accordion-content"
      >
        {content}
      </div>
    </AccordionPrimitive.Content>
  );
}
