'use client';

import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { type DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import * as CalendarPrimitive from '@/components/calendar';
import { cn } from '@/lib';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --calendar-font: var(--font-body);
 *   --calendar-fill: var(--background);
 *   --calendar-text-primary:  var(--text-primary);
 *   --calendar-fill-selected: var(--brand);
 *   --calendar-text-selected: var(--text-primary);
 * }
 * ```
 */
export type CalendarProps = ComponentProps<typeof DayPicker> & {
  prevIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  nextIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  dropdownIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  formatters,
  components,
  prevIcon,
  nextIcon,
  dropdownIcon,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  const cellSizeStyle: CSSProperties & { '--cell-size': string } = {
    '--cell-size': '40px',
  };

  return (
    <DayPicker
      captionLayout={captionLayout}
      className={cn(
        'group/calendar rounded-2xl bg-[--calendar-fill,var(--background)] p-3 font-[--calendar-font,var(--font-body)] text-[--calendar-text-primary,var(--text-primary)] shadow-lg shadow-black/10 ring-1 ring-black/5',
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
          'focus-primary inline-flex size-[--cell-size] cursor-default items-center justify-center rounded-full text-[--calendar-text-primary,var(--text-primary)] transition-colors duration-75 ease-linear hover:bg-[--fill-hover] aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          'focus-primary inline-flex size-[--cell-size] cursor-default items-center justify-center rounded-full text-[--calendar-text-primary,var(--text-primary)] transition-colors duration-75 ease-linear hover:bg-[--fill-hover] aria-disabled:cursor-not-allowed aria-disabled:opacity-25',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative rounded-lg border border-[--border] transition-colors duration-75 ease-linear',
          // Hover state
          'hover:bg-[--fill-hover]',
          // Focus-visible state
          'focus-visible:border-[--border-focus-secondary]',
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
          'inline-flex size-[--cell-size] flex-1 select-none items-center justify-center text-xs font-semibold',
          defaultClassNames.weekday,
        ),
        week: cn('mt-1 flex w-full', defaultClassNames.week),
        week_number_header: cn(
          'size-[--cell-size] select-none',
          defaultClassNames.week_number_header,
        ),
        week_number: cn('select-none text-xs', defaultClassNames.week_number),
        day: cn(
          'group/day relative z-0 size-[--cell-size] select-none p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-full',
          props.showWeekNumber === true
            ? '[&:nth-child(2)[data-selected=true]_button]:rounded-l-full'
            : '[&:first-child[data-selected=true]_button]:rounded-l-full',
          defaultClassNames.day,
        ),
        range_start: cn(
          'rounded-l-full bg-[color-mix(in_oklch,var(--calendar-fill-selected,var(--brand))_25%,transparent)]',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'rounded-r-full bg-[color-mix(in_oklch,var(--calendar-fill-selected,var(--brand))_25%,transparent)]',
          defaultClassNames.range_end,
        ),
        today: cn(
          'data-[selected-single=true]:before:ring-0',
          'before:content-[""]',
          'before:absolute',
          'before:-z-10',
          'before:inset-0',
          'before:ring-1',
          'before:ring-foreground/15',
          'before:ring-inset',
          'before:rounded-full',
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
        Chevron: ({ className: chevronClassName, orientation }) => {
          if (orientation === 'left') {
            return (
              <CalendarPrimitive.PrevIcon asChild={prevIcon?.asChild} className={chevronClassName}>
                {prevIcon?.children}
              </CalendarPrimitive.PrevIcon>
            );
          }

          if (orientation === 'right') {
            return (
              <CalendarPrimitive.NextIcon asChild={nextIcon?.asChild} className={chevronClassName}>
                {nextIcon?.children}
              </CalendarPrimitive.NextIcon>
            );
          }

          return (
            <CalendarPrimitive.DropdownIcon
              asChild={dropdownIcon?.asChild}
              className={chevronClassName}
            >
              {dropdownIcon?.children}
            </CalendarPrimitive.DropdownIcon>
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...weekNumberProps }) => {
          return (
            <td {...weekNumberProps}>
              <div className="flex size-[--cell-size] items-center justify-center text-center">
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
        'size-[--cell-size] rounded-full p-0 text-xs font-normal transition-colors duration-75 ease-linear',
        // Hover state
        'hover:bg-[--fill-hover]',
        // Range end
        'data-[range-end=true]:rounded-full',
        'data-[range-end=true]:bg-[--calendar-fill-selected,var(--brand)]',
        'data-[range-end=true]:text-[--calendar-text-selected,var(--text-primary)]',
        // Range middle
        'data-[range-middle=true]:rounded-none',
        'data-[range-middle=true]:bg-[color-mix(in_oklch,var(--calendar-fill-selected,var(--brand))_25%,transparent)]',
        'data-[range-middle=true]:before:content-[""]',
        'data-[range-middle=true]:before:absolute',
        'data-[range-middle=true]:before:-z-10',
        'data-[range-middle=true]:before:inset-0',
        'data-[range-middle=true]:before:bg-[--calendar-fill-selected,var(--brand)]',
        'data-[range-middle=true]:before:rounded-full',
        'data-[range-middle=true]:before:opacity-0',
        'data-[range-middle=true]:before:transition-opacity',
        'data-[range-middle=true]:before:duration-75',
        'data-[range-middle=true]:before:ease-linear',
        'data-[range-middle=true]:hover:before:opacity-100',
        // Range start
        'data-[range-start=true]:rounded-full',
        'data-[range-start=true]:bg-[--calendar-fill-selected,var(--brand)]',
        'data-[range-start=true]:text-[--calendar-text-selected,var(--text-primary)]',
        // Selected single
        'data-[selected-single=true]:bg-[--calendar-fill-selected,var(--brand)]',
        'data-[selected-single=true]:text-[--calendar-text-selected,var(--text-primary)]',
        // Focused day (group)
        'group-data-[focused=true]/day:relative',
        'group-data-[focused=true]/day:z-10',
        'group-data-[focused=true]/day:outline-2',
        'group-data-[focused=true]/day:outline-offset-2',
        'group-data-[focused=true]/day:outline-[--border-focus-primary]',
        // Outside day (group)
        'group-data-[outside=true]/day:text-[color-mix(in_oklch,var(--calendar-text-primary,var(--text-primary))_40%,transparent))]',
        'group-data-[outside=true]/day:hover:text-[--calendar-text-primary,var(--foreground)]',
        // Selected day (group)
        'group-data-[selected=true]/day:text-[--calendar-text-selected,var(--text-primary)]',
        'group-data-[selected=true]/day:hover:text-[--calendar-text-selected,var(--text-primary)]',
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
