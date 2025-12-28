import { ChevronLeftIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib';

const components = {
  Chevron: () => <ChevronLeftIcon className="h-5 w-5" strokeWidth={1} />,
};

export type CalendarProps = ComponentProps<typeof DayPicker>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --calendar-font-family: var(--font-family-body);
 *   --calendar-light-focus: var(--foreground);
 *   --calendar-light-border: var(--contrast-100);
 *   --calendar-light-text: var(--foreground);
 *   --calendar-light-background: var(--background);
 *   --calendar-light-button-border-hover: var(--contrast-200);
 *   --calendar-light-selected-button-background: var(--primary);
 *   --calendar-light-selected-button-text: var(--foreground);
 *   --calendar-light-selected-middle-button-background: transparent;
 *   --calendar-light-text-disabled: var(--contrast-300);
 *   --calendar-light-range-background: var(--primary-highlight);
 *   --calendar-dark-focus: var(--background);
 *   --calendar-dark-border: var(--contrast-500);
 *   --calendar-dark-text: var(--background);
 *   --calendar-dark-background: var(--foreground);
 *   --calendar-dark-button-border-hover: var(--contrast-400);
 *   --calendar-dark-selected-button-background: var(--primary);
 *   --calendar-dark-selected-button-text: var(--foreground);
 *   --calendar-dark-selected-middle-button-background: transparent;
 *   --calendar-dark-text-disabled: var(--contrast-300);
 *   --calendar-dark-range-background: color-mix(in oklab, var(--primary), white 60%);
 *  }
 * ```
 */
export function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn(
        'box-content w-[280px] rounded-lg border border-[var(--calendar-light-border,hsl(var(--contrast-100)))] bg-[var(--calendar-light-background,hsl(var(--background)))] p-3 font-[var(--calendar-font-family,var(--font-family-body))] text-[var(--calendar-light-text,hsl(var(--foreground)))]',
        className,
      )}
      classNames={{
        months: 'relative',
        month_caption: 'flex justify-center w-full font-medium pb-0.5',
        nav: 'absolute flex justify-between w-full',
        button_next: cn(
          'rotate-180 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--calendar-light-focus,hsl(var(--foreground)))]',
        ),
        button_previous: cn(
          'rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--calendar-light-focus,hsl(var(--foreground)))]',
        ),
        month_grid: 'flex flex-col gap-0.5',
        weeks: 'flex flex-col gap-0.5',
        weekdays: 'flex',
        weekday: 'flex h-10 w-10 items-center justify-center text-xs font-medium',
        week: 'flex',
        day: 'h-10 w-10 flex text-xs font-medium group p-0',
        day_button: cn(
          'flex h-full w-full items-center justify-center rounded-full hover:border hover:border-[var(--calendar-light-button-border-hover,hsl(var(--contrast-200)))] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--calendar-light-focus,hsl(var(--foreground)))] disabled:hover:border-none group-data-[selected=true]/middle:bg-[var(--calendar-light-selected-middle-button-background,transparent)] group-data-[selected=true]:bg-[var(--calendar-light-selected-button-background,hsl(var(--primary)))] group-data-[selected=true]:text-[var(--calendar-light-selected-button-text,hsl(var(--foreground)))]',
        ),
        disabled: 'text-[var(--calendar-light-text-disabled,hsl(var(--contrast-300)))]',
        outside: 'text-[var(--calendar-light-text-disabled,hsl(var(--contrast-300)))]',
        range_start:
          'bg-gradient-to-l from-[var(--calendar-light-range-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
        range_middle:
          'group/middle bg-[var(--calendar-light-range-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
        range_end:
          'bg-gradient-to-r from-[var(--calendar-light-range-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
        ...classNames,
      }}
      components={components}
      {...props}
    />
  );
}
