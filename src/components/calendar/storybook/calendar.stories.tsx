'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

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
      description: 'The selection mode of the calendar',
    },
  },
};

export default meta;
type Story = StoryObj<CalendarProps>;

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
  decorators: [
    (Story: ComponentType) => (
      <div className="rounded-lg bg-foreground p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const SingleSelection: Story = {
  args: {
    mode: 'single',
    colorScheme: 'light',
  },
};

export const RangeSelection: Story = {
  args: {
    mode: 'range',
    colorScheme: 'light',
  },
};

export const MultipleSelection: Story = {
  args: {
    mode: 'multiple',
    colorScheme: 'light',
  },
};

export const WithDisabledDates: Story = {
  args: {
    mode: 'single',
    colorScheme: 'light',
    disabled: [
      new Date(),
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
    ],
  },
};

export const WithDisabledPastDates: Story = {
  args: {
    mode: 'single',
    colorScheme: 'light',
    disabled: { before: new Date() },
  },
};

export const WithDisabledFutureDates: Story = {
  args: {
    mode: 'single',
    colorScheme: 'light',
    disabled: { after: new Date() },
  },
};
