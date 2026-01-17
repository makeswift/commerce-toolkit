import type { Meta, StoryObj } from '@storybook/react-vite';
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
A date picker component built on [react-day-picker](https://react-day-picker.js.org/). Supports single date, date range, and multiple date selection.

## CSS Variables

\`\`\`css
:root {
  --calendar-font: var(--font-body);
  --calendar-fill: var(--background);
  --calendar-text-primary: var(--text-primary);
  --calendar-fill-selected: var(--brand);
  --calendar-text-selected: var(--text-primary);
}
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
      description: 'Selection mode: `single`, `range`, or `multiple`',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Caption layout for month/year navigation',
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
      control: false,
      description: 'Custom previous navigation icon with `asChild` support',
    },
    nextIcon: {
      control: false,
      description: 'Custom next navigation icon with `asChild` support',
    },
    dropdownIcon: {
      control: false,
      description: 'Custom dropdown chevron icon with `asChild` support',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());

    return <Calendar mode="single" onSelect={setSelected} selected={selected} />;
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 5),
    });

    return <Calendar mode="range" onSelect={setRange} selected={range} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `mode="range"` to allow selection of a start and end date.',
      },
    },
  },
};

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
  parameters: {
    docs: {
      description: {
        story:
          'Use `captionLayout="dropdown"` for quick month/year navigation. Set `startMonth` and `endMonth` to define the selectable range.',
      },
    },
  },
};

export const MultipleMonths: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 10),
    });

    return <Calendar mode="range" numberOfMonths={2} onSelect={setRange} selected={range} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `numberOfMonths` to display multiple months side by side.',
      },
    },
  },
};
