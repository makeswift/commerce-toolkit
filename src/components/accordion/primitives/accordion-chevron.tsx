import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AccordionChevronProps = ComponentProps<'svg'>;

export function AccordionChevron({ className, ...props }: AccordionChevronProps) {
  return (
    <svg
      className={cn(
        'mt-1 shrink-0 stroke-[var(--accordion-light-title-icon,var(--contrast-500))] [&>line]:origin-center [&>line]:transition [&>line]:duration-300 [&>line]:ease-out',
        // Hover state
        'group-hover/accordion:stroke-[var(--accordion-light-title-icon-hover,var(--foreground))]',
        className,
      )}
      data-slot="accordion-chevron"
      viewBox="0 0 10 10"
      width={16}
      {...props}
    >
      {/* Left Line of Chevron */}
      <line
        className="group-data-[state=open]/accordion:-translate-y-[3px] group-data-[state=open]/accordion:-rotate-90"
        strokeLinecap="round"
        x1={2}
        x2={5}
        y1={2}
        y2={5}
      />
      {/* Right Line of Chevron */}
      <line
        className="group-data-[state=open]/accordion:-translate-y-[3px] group-data-[state=open]/accordion:rotate-90"
        strokeLinecap="round"
        x1={8}
        x2={5}
        y1={2}
        y2={5}
      />
    </svg>
  );
}
