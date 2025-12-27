import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowLeftIcon, ArrowRightIcon, ChevronsUpDownIcon } from 'lucide-react';
import * as React from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar } from '@/components/calendar';

function addDays(date: Date, days: number): Date {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  return result;
}

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);

  result.setMonth(result.getMonth() + months);

  return result;
}

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Calendar component provides a date picker built on top of [react-day-picker](https://react-day-picker.js.org/). It supports single date selection, date ranges, and multiple date selection.

## CSS Variables

The following CSS variables can be used to customize the Calendar component:

\`\`\`css
:root {
  --calendar-font-family: var(--font-family-body);
  --calendar-focus: var(--brand);
  --calendar-text: var(--foreground);
  --calendar-background: var(--background);
  --calendar-selected-background: var(--brand);
  --calendar-selected-text: var(--foreground);
  --calendar-text-disabled: var(--contrast-300);
}
\`\`\`

## Selection Modes

The component supports three selection modes:
- \`single\` (default) - Select a single date
- \`range\` - Select a date range with start and end dates
- \`multiple\` - Select multiple individual dates

## Caption Layouts

The \`captionLayout\` prop controls how month/year navigation is displayed:
- \`label\` (default) - Shows month and year as text
- \`dropdown\` - Shows dropdowns for month and year selection
- \`dropdown-months\` - Shows dropdown for month only
- \`dropdown-years\` - Shows dropdown for year only

## Custom Icons

The Calendar component exposes icon primitives that can be customized using the \`asChild\` pattern:
- \`prevIcon\` - Previous month navigation icon
- \`nextIcon\` - Next month navigation icon
- \`dropdownIcon\` - Dropdown chevron icon (when using dropdown caption layout)

## Icon Primitives

The following icon primitives are available for composable usage:

\`\`\`tsx
import * as CalendarPrimitive from '@/components/calendar';

<CalendarPrimitive.PrevIcon />
<CalendarPrimitive.NextIcon />
<CalendarPrimitive.DropdownIcon />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'range', 'multiple'],
      description: 'The selection mode for the calendar',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Layout of the month/year caption',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days from adjacent months',
    },
    showWeekNumber: {
      control: 'boolean',
      description: 'Show week numbers',
    },
    numberOfMonths: {
      control: 'number',
      description: 'Number of months to display',
    },
    prevIcon: {
      description: 'Custom previous navigation icon with asChild support',
    },
    nextIcon: {
      description: 'Custom next navigation icon with asChild support',
    },
    dropdownIcon: {
      description: 'Custom dropdown chevron icon with asChild support',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * The default Calendar displays a single month with single date selection.
 */
export const Default: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return <Calendar mode="single" onSelect={setSelected} selected={selected} />;
  },
};

/**
 * Range selection allows users to select a start and end date.
 */
export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 5),
    });

    return <Calendar mode="range" onSelect={setRange} selected={range} />;
  },
};

/**
 * Multiple selection allows users to select multiple individual dates.
 */
export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date[] | undefined>([
      new Date(),
      addDays(new Date(), 2),
      addDays(new Date(), 5),
    ]);

    return <Calendar mode="multiple" onSelect={setSelected} selected={selected} />;
  },
};

/**
 * Display dropdown selectors for quick month and year navigation.
 */
export const WithDropdowns: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        captionLayout="dropdown"
        endMonth={addMonths(new Date(), 12)}
        mode="single"
        onSelect={setSelected}
        selected={selected}
        startMonth={addMonths(new Date(), -12)}
      />
    );
  },
};

/**
 * Display multiple months side by side for easier range selection.
 */
export const MultipleMonths: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 10),
    });

    return <Calendar mode="range" numberOfMonths={2} onSelect={setRange} selected={range} />;
  },
};

/**
 * Show week numbers alongside the calendar days.
 */
export const WithWeekNumbers: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return <Calendar mode="single" onSelect={setSelected} selected={selected} showWeekNumber />;
  },
};

/**
 * Disable specific dates to prevent selection.
 */
export const DisabledDates: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>();

    // Disable weekends and dates in the past
    const disabledDays = [
      { before: new Date() },
      { dayOfWeek: [0, 6] }, // Sunday and Saturday
    ];

    return (
      <Calendar disabled={disabledDays} mode="single" onSelect={setSelected} selected={selected} />
    );
  },
};

/**
 * Hide days from adjacent months for a cleaner look.
 */
export const HideOutsideDays: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar mode="single" onSelect={setSelected} selected={selected} showOutsideDays={false} />
    );
  },
};

/**
 * Use custom icons for navigation by leveraging the `asChild` pattern.
 * This allows you to substitute your own icon components.
 */
export const CustomIcons: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        nextIcon={{
          asChild: true,
          children: <ArrowRightIcon absoluteStrokeWidth strokeWidth={1.5} />,
        }}
        onSelect={setSelected}
        prevIcon={{
          asChild: true,
          children: <ArrowLeftIcon absoluteStrokeWidth strokeWidth={1.5} />,
        }}
        selected={selected}
      />
    );
  },
};

/**
 * Customize the dropdown icon when using dropdown caption layouts.
 */
export const CustomDropdownIcon: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        captionLayout="dropdown"
        dropdownIcon={{
          asChild: true,
          children: <ChevronsUpDownIcon absoluteStrokeWidth strokeWidth={1.5} />,
        }}
        endMonth={addMonths(new Date(), 12)}
        mode="single"
        onSelect={setSelected}
        selected={selected}
        startMonth={addMonths(new Date(), -12)}
      />
    );
  },
};
