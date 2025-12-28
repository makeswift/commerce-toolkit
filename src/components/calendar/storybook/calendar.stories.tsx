import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar, type CalendarProps } from '@/components/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A date picker calendar component built on top of react-day-picker. Supports single date, multiple dates, and date range selection.

## CSS Variables

\`\`\`css
:root {
  --calendar-font-family: var(--font-family-body);
  --calendar-light-focus: var(--foreground);
  --calendar-light-border: var(--contrast-100);
  --calendar-light-text: var(--foreground);
  --calendar-light-background: var(--background);
  --calendar-light-button-border-hover: var(--contrast-200);
  --calendar-light-selected-button-background: var(--primary);
  --calendar-light-selected-button-text: var(--foreground);
  --calendar-light-selected-middle-button-background: transparent;
  --calendar-light-text-disabled: var(--contrast-300);
  --calendar-light-range-background: var(--primary-highlight);
  --calendar-dark-focus: var(--background);
  --calendar-dark-border: var(--contrast-500);
  --calendar-dark-text: var(--background);
  --calendar-dark-background: var(--foreground);
  --calendar-dark-button-border-hover: var(--contrast-400);
  --calendar-dark-selected-button-background: var(--primary);
  --calendar-dark-selected-button-text: var(--foreground);
  --calendar-dark-selected-middle-button-background: transparent;
  --calendar-dark-text-disabled: var(--contrast-300);
  --calendar-dark-range-background: color-mix(in oklab, var(--primary), white 60%);
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
      options: ['single', 'multiple', 'range'],
      description: 'The selection mode for the calendar',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Whether to show days from adjacent months',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the calendar',
    },
  },
};

export default meta;

type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());

    return <Calendar mode="single" onSelect={setSelected} selected={selected} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Single date selection mode. Click on a day to select it.',
      },
    },
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return <Calendar mode="range" onSelect={setRange} selected={range} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Range selection mode. Click to select a start date, then click again to select an end date.',
      },
    },
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const today = new Date();
    const [selected, setSelected] = useState<Date[] | undefined>([
      today,
      new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000),
      new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000),
    ]);

    return <Calendar mode="multiple" onSelect={setSelected} selected={selected} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode. Click on multiple days to select them individually.',
      },
    },
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    const today = new Date();

    return (
      <Calendar
        disabled={{ before: today }}
        mode="single"
        onSelect={setSelected}
        selected={selected}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Past dates can be disabled using the `disabled` prop with date matchers.',
      },
    },
  },
};
