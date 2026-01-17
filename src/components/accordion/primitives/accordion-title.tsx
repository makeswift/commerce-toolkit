import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionTitleProps = ComponentProps<'div'>;

export function AccordionTitle({ children, className, ...props }: AccordionTitleProps) {
  return (
    <div
      className={cn(
        'flex-1 select-none text-sm font-medium text-[--accordion-text-primary,var(--text-primary)] transition-colors duration-300 ease-out [font-family:--accordion-font-title,var(--font-heading)] group-hover/accordion:opacity-70',
        className,
      )}
      data-slot="accordion-title"
      {...props}
    >
      {children}
    </div>
  );
}
