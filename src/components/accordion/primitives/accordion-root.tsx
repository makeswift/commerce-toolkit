import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';
export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root>;

export function AccordionRoot({ className, ...props }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root className={cn(className)} {...props} data-slot="accordion-root" />
  );
}
