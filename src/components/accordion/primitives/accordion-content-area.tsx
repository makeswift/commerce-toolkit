import type { ComponentProps } from 'react';

import { useAccordion } from '@/index';
import { cn } from '@/lib';

export type AccordionContentAreaProps = ComponentProps<'div'>;

export function AccordionContentArea({ children, className, ...props }: AccordionContentAreaProps) {
  const { colorScheme } = useAccordion();

  return (
    <div
      className={cn(
        'py-3 text-base font-light leading-normal [font-family:var(--accordion-content-font-family,var(--font-family-body))]',
        {
          light: 'text-[var(--accordion-light-content-text,hsl(var(--foreground)))]',
          dark: 'text-[var(--accordion-dark-content-text,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
      data-slot="accordion-content-area"
      {...props}
    >
      {children}
    </div>
  );
}
