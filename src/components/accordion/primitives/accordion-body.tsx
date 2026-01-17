import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionBodyProps = ComponentProps<'div'>;

export function AccordionBody({ children, className, ...props }: AccordionBodyProps) {
  return (
    <div
      className={cn(
        '[font-family:--accordion-font-body,var(--font-body))] py-3 text-base text-[--accordion-text-primary,var(--text-secondary)]',
        className,
      )}
      data-slot="accordion-body"
      {...props}
    >
      {children}
    </div>
  );
}
