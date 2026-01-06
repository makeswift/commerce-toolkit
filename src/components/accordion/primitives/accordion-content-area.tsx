import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionContentAreaProps = ComponentProps<'div'>;

export function AccordionContentArea({ children, className, ...props }: AccordionContentAreaProps) {
  return (
    <div
      className={cn(
        'py-3 text-base font-light leading-normal text-[var(--accordion-light-content-text,var(--foreground))] [font-family:var(--accordion-content-font-family,var(--font-family-body))]',

        className,
      )}
      data-slot="accordion-content-area"
      {...props}
    >
      {children}
    </div>
  );
}
