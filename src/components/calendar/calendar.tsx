'use client';

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type { ComponentProps, CSSProperties } from 'react';
import { useEffect, useRef } from 'react';
import { type DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import { type ButtonProps } from '@/components/button';
import { cn } from '@/lib';

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  buttonVariant?: ButtonProps['variant'];
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --calendar-font-family: var(--font-family-body);
 *   --calendar-focus: var(--foreground);
 *   --calendar-text: var(--foreground);
 *   --calendar-background: var(--background);
 *   --calendar-selected-background: var(--primary);
 *   --calendar-selected-text: var(--foreground);
 *   --calendar-text-disabled: var(--contrast-300);
 * }
 * ```
 */
export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  formatters,
  components,
  ...props
}: ComponentProps<typeof DayPicker> & {
  buttonVariant?: ButtonProps['variant'];
}) {
  const defaultClassNames = getDefaultClassNames();

  const cellSizeStyle: CSSProperties & { '--cell-size': string } = {
    '--cell-size': '40px',
  };

  return (
    <DayPicker
      captionLayout={captionLayout}
      className={cn(
        'group/calendar rounded-2xl bg-[var(--calendar-background,hsl(var(--background)))] p-3 font-[var(--calendar-font-family,var(--font-family-body))] text-[var(--calendar-text,hsl(var(--foreground)))] shadow-lg shadow-black/10 ring-1 ring-black/5',
        className,
      )}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-8 md:flex-row', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-1', defaultClassNames.month),
        nav: cn(
          'absolute -inset-x-0.5 top-0 flex w-full items-center justify-between gap-1 text-foreground',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          'inline-flex size-[var(--cell-size)] cursor-default items-center justify-center rounded-full transition-colors duration-75 ease-linear hover:bg-contrast-100 focus-visible:ring-[var(--calendar-focus,hsl(var(--primary)))] aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          'inline-flex size-[var(--cell-size)] cursor-default items-center justify-center rounded-full transition-colors duration-75 ease-linear hover:bg-contrast-100 focus-visible:ring-[var(--calendar-focus,hsl(var(--primary)))] aria-disabled:cursor-not-allowed aria-disabled:opacity-25',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex h-[var(--cell-size)] w-full items-center justify-center px-[var(--cell-size)]',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-[var(--cell-size)] w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative rounded-lg border border-contrast-200 transition-colors duration-75 ease-linear hover:bg-foreground/5 focus:border-foreground',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn('absolute inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'flex h-8 select-none items-center gap-1.5 rounded-lg pl-2.5 pr-2 text-sm font-medium',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'inline-flex size-[var(--cell-size)] flex-1 select-none items-center justify-center text-xs font-semibold',
          defaultClassNames.weekday,
        ),
        week: cn('mt-1 flex w-full', defaultClassNames.week),
        week_number_header: cn(
          'size-[var(--cell-size)] select-none',
          defaultClassNames.week_number_header,
        ),
        week_number: cn('select-none text-xs', defaultClassNames.week_number),
        day: cn(
          'group/day relative z-0 size-[var(--cell-size)] select-none p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-full',
          props.showWeekNumber === true
            ? '[&:nth-child(2)[data-selected=true]_button]:rounded-l-full'
            : '[&:first-child[data-selected=true]_button]:rounded-l-full',
          defaultClassNames.day,
        ),
        range_start: cn(
          'rounded-l-full bg-[var(--calendar-selected-background,hsl(var(--primary)/.25))]',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'rounded-r-full bg-[var(--calendar-selected-background,hsl(var(--primary)/.25))]',
          defaultClassNames.range_end,
        ),
        today: cn(
          'rounded-full ring-1 ring-inset ring-contrast-200 data-[selected=true]:rounded-full data-[selected=true]:ring-0',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-opacity-50 hover:text-opacity-100 aria-selected:text-opacity-50',
          defaultClassNames.outside,
        ),
        disabled: cn('cursor-not-allowed text-opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => {
          return (
            <div className={cn(rootClassName)} data-slot="calendar" ref={rootRef} {...rootProps} />
          );
        },
        Chevron: ({ className: chevronClassName, orientation, ...chevronProps }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon
                absoluteStrokeWidth
                className={cn('size-5 -translate-x-px', chevronClassName)}
                {...chevronProps}
              />
            );
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                absoluteStrokeWidth
                className={cn('size-5 translate-x-px', chevronClassName)}
                {...chevronProps}
              />
            );
          }

          return (
            <ChevronDownIcon
              absoluteStrokeWidth
              className={cn('size-3.5', chevronClassName)}
              {...chevronProps}
            />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...weekNumberProps }) => {
          return (
            <td {...weekNumberProps}>
              <div className="flex size-[var(--cell-size)] items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      showOutsideDays={showOutsideDays}
      style={cellSizeStyle}
      {...props}
    />
  );
}

type CalendarDayButtonProps = ComponentProps<typeof DayButton>;

function CalendarDayButton({
  className: dayButtonClassName,
  day,
  modifiers,
  ...dayButtonProps
}: CalendarDayButtonProps) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused === true) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      className={cn(
        // Base styles
        'size-[var(--cell-size)] rounded-full p-0 text-xs font-normal',
        'transition-colors duration-75 ease-linear',
        'hover:bg-contrast-100',
        // Range end
        'data-[range-end=true]:rounded-full',
        'data-[range-end=true]:bg-[var(--calendar-selected-button-background,hsl(var(--primary)))]',
        'data-[range-end=true]:text-[var(--calendar-selected-text,hsl(var(--foreground)))]',
        // Range middle
        'data-[range-middle=true]:rounded-none',
        'data-[range-middle=true]:bg-[var(--calendar-selected-background,hsl(var(--primary)/.25))]',
        'data-[range-middle=true]:before:content-[""]',
        'data-[range-middle=true]:before:absolute',
        'data-[range-middle=true]:before:-z-10',
        'data-[range-middle=true]:before:inset-0',
        'data-[range-middle=true]:before:bg-[var(--calendar-selected-background,hsl(var(--primary)))]',
        'data-[range-middle=true]:before:rounded-full',
        'data-[range-middle=true]:before:opacity-0',
        'data-[range-middle=true]:before:transition-opacity',
        'data-[range-middle=true]:before:duration-75',
        'data-[range-middle=true]:before:ease-linear',
        'data-[range-middle=true]:hover:before:opacity-100',
        // Range start
        'data-[range-start=true]:rounded-full',
        'data-[range-start=true]:bg-[var(--calendar-selected-background,hsl(var(--primary)))]',
        'data-[range-start=true]:text-[var(--calendar-selected-text,hsl(var(--foreground)))]',
        // Selected single
        'data-[selected-single=true]:bg-[var(--calendar-selected-background,hsl(var(--primary)))]',
        'data-[selected-single=true]:text-[var(--calendar-selected-text,hsl(var(--foreground)))]',
        // Focused day (group)
        'group-data-[focused=true]/day:relative',
        'group-data-[focused=true]/day:z-10',
        'group-data-[focused=true]/day:outline-1',
        'group-data-[focused=true]/day:outline-foreground',
        'group-data-[focused=true]/day:ring-0',
        // Outside day (group)
        'group-data-[outside=true]/day:text-[var(--calendar-text,hsl(var(--foreground)/0.4))]',
        'group-data-[outside=true]/day:hover:text-[var(--calendar-text,hsl(var(--foreground)/1))]',
        // Selected day (group)
        'group-data-[selected=true]/day:text-foreground',
        'group-data-[selected=true]/day:hover:text-foreground',
        // Disabled day (group)
        'group-data-[disabled=true]/day:opacity-40',
        'group-data-[disabled=true]/day:pointer-events-none',
        'group-data-[disabled=true]/day:cursor-not-allowed',
        defaultClassNames.day,
        dayButtonClassName,
      )}
      data-day={day.date.toLocaleDateString()}
      data-range-end={modifiers.range_end === true}
      data-range-middle={modifiers.range_middle === true}
      data-range-start={modifiers.range_start === true}
      data-selected-single={
        modifiers.selected === true &&
        modifiers.range_start !== true &&
        modifiers.range_end !== true &&
        modifiers.range_middle !== true
      }
      ref={ref}
      {...dayButtonProps}
    />
  );
}
