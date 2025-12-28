import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionTitleProps = ComponentProps<'div'>;

export function AccordionTitle({ children, className, ...props }: AccordionTitleProps) {
  return (
    <div
      className={cn(
        'flex-1 select-none text-sm font-normal uppercase text-[var(--accordion-light-title-text,hsl(var(--contrast-400)))] transition-colors duration-300 ease-out [font-family:var(--accordion-title-font-family,var(--font-family-mono))] group-hover:text-[var(--accordion-light-title-text-hover,hsl(var(--foreground)))]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
