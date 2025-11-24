import type { ComponentProps } from 'react';

import { useAccordion } from '@/components/accordion';
import { cn } from '@/lib';

export type AccordionTitleProps = ComponentProps<'div'>;

export function AccordionTitle({ children, className, ...props }: AccordionTitleProps) {
  const { colorScheme } = useAccordion();

  return (
    <div
      className={cn(
        'flex-1 select-none text-sm font-normal uppercase transition-colors duration-300 ease-out [font-family:var(--accordion-title-font-family,var(--font-family-mono))]',
        {
          light:
            'text-[var(--accordion-light-title-text,hsl(var(--contrast-400)))] group-hover:text-[var(--accordion-light-title-text-hover,hsl(var(--foreground)))]',
          dark: 'text-[var(--accordion-dark-title-text,hsl(var(--contrast-200)))] group-hover:text-[var(--accordion-dark-title-text-hover,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
