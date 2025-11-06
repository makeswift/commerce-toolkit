'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root>;

export function AccordionRoot({ ...props }: AccordionRootProps) {
  return <AccordionPrimitive.Root data-slot="accordion-root" {...props} />;
}
