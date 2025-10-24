import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar, type CalendarProps } from '@/components/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The color scheme of the calendar',
    },
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode of the calendar',
    },
    disabled: {
      control: 'object',
      description: 'Array of dates or date matcher to disable',
    },
  },
};

export default meta;
type Story = StoryObj<CalendarProps>;

// Color scheme stories
export const Light: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
  },
};

export const Dark: Story = {
  args: {
    colorScheme: 'dark',
    mode: 'single',
  },
};

// Mode stories
export const SingleSelection: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
  },
};

export const RangeSelection: Story = {
  args: {
    colorScheme: 'light',
    mode: 'range',
  },
};

export const MultipleSelection: Story = {
  args: {
    colorScheme: 'light',
    mode: 'multiple',
  },
};

// With disabled dates
export const WithDisabledDates: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
    disabled: [
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
      new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
    ],
  },
};

export const WithDisabledWeekends: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
    disabled: { dayOfWeek: [0, 6] }, // Disable Sundays and Saturdays
  },
};

export const WithDisabledPastDates: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
    disabled: { before: new Date() },
  },
};

// With default selected dates
export const WithDefaultSelected: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
    selected: new Date(),
  },
};

export const WithDefaultRangeSelected: Story = {
  args: {
    colorScheme: 'light',
    mode: 'range',
    selected: {
      from: new Date(),
      to: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
  },
};

// Dark mode variations
export const DarkRangeSelection: Story = {
  args: {
    colorScheme: 'dark',
    mode: 'range',
  },
};

export const DarkWithDisabledDates: Story = {
  args: {
    colorScheme: 'dark',
    mode: 'single',
    disabled: [
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
    ],
  },
};

// With custom month navigation
export const WithCustomStartMonth: Story = {
  args: {
    colorScheme: 'light',
    mode: 'single',
    defaultMonth: new Date(2025, 11, 1), // December 2025
  },
};

// Multiple months
export const MultipleMonths: Story = {
  args: {
    colorScheme: 'light',
    mode: 'range',
    numberOfMonths: 2,
  },
};

export const MultipleMonthsDark: Story = {
  args: {
    colorScheme: 'dark',
    mode: 'range',
    numberOfMonths: 2,
  },
};
