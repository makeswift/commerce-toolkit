import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

import { useAccordionContext } from '@/components/accordion';
import { cn } from '@/lib';

export type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const { colorScheme } = useAccordionContext();

  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex w-full cursor-pointer items-start gap-8 border-none py-3 text-start focus:outline-none @md:py-4',
          className,
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        <div
          className={cn(
            'flex-1 select-none text-sm font-normal uppercase transition-colors duration-300 ease-out [font-family:var(--accordion-title-font-family,var(--font-family-mono))]',
            {
              light:
                'text-[var(--accordion-light-title-text,hsl(var(--contrast-400)))] group-hover:text-[var(--accordion-light-title-text-hover,hsl(var(--foreground)))]',
              dark: 'text-[var(--accordion-dark-title-text,hsl(var(--contrast-200)))] group-hover:text-[var(--accordion-dark-title-text-hover,hsl(var(--background)))]',
            }[colorScheme],
          )}
        >
          {children}
        </div>
        <svg
          className={cn(
            'mt-1 shrink-0 [&>line]:origin-center [&>line]:transition [&>line]:duration-300 [&>line]:ease-out',
            {
              light:
                'stroke-[var(--accordion-light-title-icon,hsl(var(--contrast-500)))] group-hover:stroke-[var(--accordion-light-title-icon-hover,hsl(var(--foreground)))]',
              dark: 'stroke-[var(--accordion-dark-title-icon,hsl(var(--contrast-200)))] group-hover:stroke-[var(--accordion-dark-title-icon-hover,hsl(var(--background)))]',
            }[colorScheme],
          )}
          data-slot="accordion-chevron"
          viewBox="0 0 10 10"
          width={16}
        >
          {/* Left Line of Chevron */}
          <line
            className="group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:-rotate-90"
            strokeLinecap="round"
            x1={2}
            x2={5}
            y1={2}
            y2={5}
          />
          {/* Right Line of Chevron */}
          <line
            className="group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:rotate-90"
            strokeLinecap="round"
            x1={8}
            x2={5}
            y1={2}
            y2={5}
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
