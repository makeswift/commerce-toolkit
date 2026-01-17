import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { DatePicker, type DatePickerProps } from '@/components/date-picker';
import * as DatePickerPrimitive from '@/components/date-picker/primitives';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A date picker component that combines an input field with a calendar popover. Built on Radix UI Popover and react-day-picker.

## CSS Variables

The DatePicker uses CSS variables from the Input and Calendar components:

### Input Variables

\`\`\`css
:root {
  --input-fill: var(--form-fill);
  --input-fill-icon: var(--form-fill-icon);
  --input-text: var(--form-text-primary);
  --input-text-placeholder: var(--form-text-placeholder);
}
\`\`\`

### Calendar Variables

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
      description: 'Custom icon configuration with `asChild` support',
    },
  },
};

export default meta;
type Story = StoryObj<DatePickerProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A controlled date picker with a calendar icon that opens a calendar popover on click.',
      },
      source: {
        code: `
const [selected, setSelected] = useState<Date | undefined>(new Date());

<DatePicker
  id="date-default"
  name="date"
  selected={selected}
  onCalendarSelect={setSelected}
  placeholder="Select a date"
/>
        `,
      },
    },
  },
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

export const DisabledDates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `disabledDays` to prevent selection of specific dates. This example disables past dates and weekends.',
      },
      source: {
        code: `
const [selected, setSelected] = useState<Date | undefined>();

const disabledDays = [
  { before: new Date() },
  { dayOfWeek: [0, 6] }
];

<DatePicker
  id="date-disabled"
  name="date"
  selected={selected}
  onCalendarSelect={setSelected}
  placeholder="Select a weekday"
  disabledDays={disabledDays}
/>
        `,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                      | Description                                   |
|--------------------------------|-----------------------------------------------|
| \`DatePickerPrimitive.Root\`      | Popover root provider.                        |
| \`DatePickerPrimitive.Trigger\`   | Element that opens the popover.               |
| \`DatePickerPrimitive.Input\`     | Input field (wraps the Input component).      |
| \`DatePickerPrimitive.Icon\`      | Calendar icon with \`asChild\` support.       |
| \`DatePickerPrimitive.Portal\`    | Portals content to document body.             |
| \`DatePickerPrimitive.Content\`   | Popover content container with animations.    |
| \`DatePickerPrimitive.Calendar\`  | Calendar component for date selection.        |
        `,
      },
      source: {
        code: `
import * as DatePickerPrimitive from '@/components/date-picker/primitives';

const [selected, setSelected] = useState<Date | undefined>(new Date());
const formattedDate = selected ? Intl.DateTimeFormat().format(selected) : '';

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
        selected={selected}
        onSelect={setSelected}
      />
    </DatePickerPrimitive.Content>
  </DatePickerPrimitive.Portal>
</DatePickerPrimitive.Root>
        `,
      },
    },
  },
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
