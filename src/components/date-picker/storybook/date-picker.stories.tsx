import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarDays } from 'lucide-react';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { DatePicker, type DatePickerProps } from '@/components/date-picker';
import * as DatePickerPrimitive from '@/components/date-picker/primitives';

function addDays(date: Date, days: number): Date {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  return result;
}

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A date picker component that combines an input field with a calendar popover. Built on top of Radix UI Popover and react-day-picker.

## CSS Variables

The DatePicker uses CSS variables from the Input and Calendar components:

\`\`\`css
:root {
  /* Input styling */
  --input-light-background: var(--background);
  --input-light-border: var(--contrast-100);
  --input-light-focus: var(--foreground);
  --input-light-border-error: var(--error);
  --input-light-text: var(--foreground);
  --input-light-placeholder: var(--contrast-500);
  --input-light-icon: var(--contrast-400);

  /* Calendar styling */
  --calendar-font-family: var(--font-family-body);
  --calendar-light-focus: var(--foreground);
  --calendar-light-border: var(--contrast-100);
  --calendar-light-text: var(--foreground);
  --calendar-light-background: var(--background);
  --calendar-light-button-border-hover: var(--contrast-200);
  --calendar-light-selected-button-background: var(--brand);
  --calendar-light-selected-button-text: var(--foreground);
  --calendar-light-text-disabled: var(--contrast-300);
}
\`\`\`

## Usage

### High-Level Component

The \`DatePicker\` component provides a simple API for single date selection:

\`\`\`tsx
import { DatePicker } from '@/components/date-picker';

const [date, setDate] = useState<Date | undefined>();

<DatePicker
  id="date-field"
  name="date"
  selected={date}
  onCalendarSelect={setDate}
  placeholder="Select a date"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as DatePicker from '@/components/date-picker';

<DatePicker.Root>
  <DatePicker.Trigger asChild>
    <DatePicker.Input
      id="date-field"
      name="date"
      placeholder="MM/DD/YYYY"
      prependIcon={{
        asChild: true,
        children: <DatePicker.Icon />,
      }}
      readOnly
    />
  </DatePicker.Trigger>
  <DatePicker.Portal>
    <DatePicker.Content align="start" sideOffset={8}>
      <DatePicker.Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    </DatePicker.Content>
  </DatePicker.Portal>
</DatePicker.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'The id attribute for the input element',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the input element',
    },
    selected: {
      control: false,
      description: 'The currently selected date',
    },
    onCalendarSelect: {
      control: false,
      description: 'Callback fired when a date is selected',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when no date is selected',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    disabledDays: {
      control: false,
      description: 'Dates that cannot be selected',
    },
    icon: {
      control: false,
      description: 'Custom icon configuration with asChild and children props',
    },
  },
  decorators: [(Story: ComponentType) => <Story />],
};

export default meta;
type Story = StoryObj<DatePickerProps>;

/**
 * The default DatePicker displays an input with a calendar icon that opens a calendar popover.
 */
export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());

    return (
      <DatePicker
        id="date-default"
        name="date"
        onCalendarSelect={setSelected}
        placeholder="Select a date"
        selected={selected}
      />
    );
  },
};

/**
 * A DatePicker with no initial value shows the placeholder text.
 */
export const WithPlaceholder: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();

    return (
      <DatePicker
        id="date-placeholder"
        name="date"
        onCalendarSelect={setSelected}
        placeholder="Choose your date"
        selected={selected}
      />
    );
  },
};

/**
 * Customize the icon using the `icon` prop with `asChild` to render your own icon component.
 */
export const CustomIcon: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());

    return (
      <DatePicker
        icon={{ asChild: true, children: <CalendarDays /> }}
        id="date-custom-icon"
        name="date"
        onCalendarSelect={setSelected}
        placeholder="Select a date"
        selected={selected}
      />
    );
  },
};

/**
 * Disable specific dates to prevent selection, such as past dates or weekends.
 */
export const DisabledDates: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();

    // Disable past dates and weekends
    const disabledDays = [{ before: new Date() }, { dayOfWeek: [0, 6] }];

    return (
      <DatePicker
        disabledDays={disabledDays}
        id="date-disabled"
        name="date"
        onCalendarSelect={setSelected}
        placeholder="Select a weekday"
        selected={selected}
      />
    );
  },
};

/**
 * Limit date selection to a specific range by disabling dates outside the range.
 */
export const DateRange: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();

    // Only allow dates within the next 30 days
    const disabledDays = [{ before: new Date() }, { after: addDays(new Date(), 30) }];

    return (
      <DatePicker
        disabledDays={disabledDays}
        id="date-range"
        name="date"
        onCalendarSelect={setSelected}
        placeholder="Next 30 days only"
        selected={selected}
      />
    );
  },
};

/**
 * Use the primitive components directly for full customization control.
 */
export const ComposableAnatomy: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    const formattedDate = selected ? Intl.DateTimeFormat().format(selected) : '';

    return (
      <DatePickerPrimitive.Root>
        <DatePickerPrimitive.Trigger asChild>
          <DatePickerPrimitive.Input
            id="date-composable"
            name="date"
            placeholder="MM/DD/YYYY"
            prependIcon={{
              asChild: true,
              children: <DatePickerPrimitive.Icon />,
            }}
            readOnly
            value={formattedDate}
          />
        </DatePickerPrimitive.Trigger>
        <DatePickerPrimitive.Portal>
          <DatePickerPrimitive.Content align="start" sideOffset={8}>
            <DatePickerPrimitive.Calendar
              mode="single"
              onSelect={setSelected}
              selected={selected}
            />
          </DatePickerPrimitive.Content>
        </DatePickerPrimitive.Portal>
      </DatePickerPrimitive.Root>
    );
  },
};
