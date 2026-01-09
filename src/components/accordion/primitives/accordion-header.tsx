import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

export type AccordionHeaderProps = ComponentProps<typeof AccordionPrimitive.Header>;

export function AccordionHeader({ children, className, ...props }: AccordionHeaderProps) {
  return (
    <AccordionPrimitive.Header className={className} data-slot="accordion-header" {...props}>
      {children}
    </AccordionPrimitive.Header>
  );
}
