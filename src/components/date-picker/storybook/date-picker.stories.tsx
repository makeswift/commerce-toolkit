import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarIcon } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import { Calendar } from '@/components/calendar';
import { DatePicker } from '@/components/date-picker/date-picker';
import * as DatePickerPrimitive from '@/components/date-picker/primitives';
import { Input } from '@/components/input';

// Wrapper component for stories to avoid complex type issues
interface DatePickerStoryProps {
  children?: ReactNode;
}

function DatePickerStory({ children, ...props }: DatePickerStoryProps) {
  return <DatePickerPrimitive.Root {...props}>{children}</DatePickerPrimitive.Root>;
}

const meta: Meta<typeof DatePickerStory> = {
  title: 'Components/DatePicker',
  component: DatePickerStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A date picker component that combines an input field with a calendar popover for selecting dates.

## CSS Variables

The DatePicker uses the Input and Calendar components internally, which support theming through CSS variables:

### Input Variables

\`\`\`css
:root {
  --input-light-background: var(--background);
  --input-light-text: var(--foreground);
  --input-light-placeholder: var(--contrast-500);
  --input-light-border: var(--contrast-100);
  --input-light-focus: var(--foreground);
  --input-light-border-error: var(--error);
}
\`\`\`

### Calendar Variables

\`\`\`css
:root {
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

The \`DatePicker\` component provides a controlled API with \`selected\` and \`onCalendarSelect\` props:

\`\`\`tsx
import { DatePicker } from '@/components/date-picker/date-picker';
import { useState } from 'react';

function MyComponent() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <DatePicker
      selected={date}
      onCalendarSelect={setDate}
      placeholder="Select a date"
    />
  );
}
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as DatePicker from '@/components/date-picker';
import { Calendar } from '@/components/calendar';
import { Input } from '@/components/input';
import { CalendarIcon } from 'lucide-react';

<DatePicker.Root>
  <DatePicker.Trigger asChild>
    <Input
      placeholder="MM/DD/YYYY"
      prepend={<CalendarIcon className="h-5 w-5" strokeWidth={1} />}
      readOnly
      value={date ? Intl.DateTimeFormat().format(date) : ''}
    />
  </DatePicker.Trigger>
  <DatePicker.Portal>
    <DatePicker.Content align="start" sideOffset={8}>
      <Calendar mode="single" selected={date} onCalendarSelect={setDate} />
    </DatePicker.Content>
  </DatePicker.Portal>
</DatePicker.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return <DatePicker onCalendarSelect={setDate} placeholder="Select a date" selected={date} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'The default DatePicker with placeholder text.',
      },
    },
  },
};

export const WithInitialDate: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return <DatePicker onCalendarSelect={setDate} selected={date} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'DatePicker initialized with the current date.',
      },
    },
  },
};

export const DisabledDays: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    // Disable weekends and past dates
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // Weekends
      { before: new Date() }, // Past dates
    ];

    return (
      <DatePicker
        disabledDays={disabledDays}
        onCalendarSelect={setDate}
        placeholder="Select a weekday"
        selected={date}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `disabledDays` to prevent selection of specific dates. This example disables weekends and past dates.',
      },
    },
  },
};

export const Controlled: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <DatePicker onCalendarSelect={setDate} selected={date} />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected:</span>{' '}
          <span className="text-foreground">
            {date ? Intl.DateTimeFormat().format(date) : 'None'}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-brand hover:bg-brand/90 rounded-lg px-3 py-2 text-sm font-medium text-background transition-colors"
            onClick={() => setDate(new Date())}
            type="button"
          >
            Today
          </button>
          <button
            className="rounded-lg bg-contrast-200 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-contrast-300"
            onClick={() => setDate(undefined)}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `selected` and `onSelect` for controlled state management. The parent component manages the selected date.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    const formattedDate = date ? Intl.DateTimeFormat().format(date) : undefined;

    return (
      <DatePickerPrimitive.Root>
        <DatePickerPrimitive.Trigger asChild>
          <Input
            placeholder="MM/DD/YYYY"
            prepend={<CalendarIcon className="h-5 w-5" strokeWidth={1} />}
            readOnly
            type="text"
            value={formattedDate ?? ''}
          />
        </DatePickerPrimitive.Trigger>
        <DatePickerPrimitive.Portal>
          <DatePickerPrimitive.Content align="start" sideOffset={8}>
            <Calendar mode="single" onSelect={setDate} selected={date} />
          </DatePickerPrimitive.Content>
        </DatePickerPrimitive.Portal>
      </DatePickerPrimitive.Root>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Using the primitive components directly for full control over the date picker structure.',
      },
    },
  },
};

export const BookingDate: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    // Disable past dates
    const disabledDays = { before: new Date() };

    return (
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Delivery Date</label>
        <DatePicker
          disabledDays={disabledDays}
          onCalendarSelect={setDate}
          placeholder="Select delivery date"
          selected={date}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'DatePicker for selecting a delivery or booking date in e-commerce checkout flows.',
      },
    },
  },
};
