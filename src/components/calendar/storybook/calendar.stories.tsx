'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

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

export const WithDefaultMonth: Story = {
  args: {
    mode: 'single',
    colorScheme: 'light',
    defaultMonth: new Date(2024, 11, 1), // December 2024
  },
};

export const WithMinMaxDates: Story = {
  args: {
    mode: 'range',
    colorScheme: 'light',
    startMonth: new Date(),
    endMonth: new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
  },
};

export const InteractiveSingle = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className="flex flex-col gap-4">
      <Calendar mode="single" onSelect={setSelected} selected={selected} />
      {selected && (
        <p className="text-center text-sm">
          Selected: {selected.toLocaleDateString('en-US', { dateStyle: 'long' })}
        </p>
      )}
    </div>
  );
};

export const InteractiveRange = () => {
  const [range, setRange] = useState<DateRange>();

  return (
    <div className="flex flex-col gap-4">
      <Calendar mode="range" onSelect={setRange} selected={range} />
      {range?.from && (
        <div className="text-center text-sm">
          <p>From: {range.from.toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
          {range.to && <p>To: {range.to.toLocaleDateString('en-US', { dateStyle: 'long' })}</p>}
        </div>
      )}
    </div>
  );
};

export const InteractiveMultiple = () => {
  const [selected, setSelected] = useState<Date[] | undefined>([]);

  return (
    <div className="flex flex-col gap-4">
      <Calendar mode="multiple" onSelect={setSelected} selected={selected} />
      {selected && selected.length > 0 && (
        <div className="text-center text-sm">
          <p className="font-semibold">Selected {selected.length} date(s):</p>
          <ul className="mt-1">
            {selected.map((date, index) => (
              <li key={index}>{date.toLocaleDateString('en-US', { dateStyle: 'medium' })}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const BookingCalendar = () => {
  const [range, setRange] = useState<DateRange>();
  const today = new Date();
  const maxDate = new Date(today.getTime() + 180 * 24 * 60 * 60 * 1000); // 6 months ahead

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        disabled={{ before: today }}
        endMonth={maxDate}
        mode="range"
        onSelect={setRange}
        selected={range}
        startMonth={today}
      />
      {range?.from && range.to && (
        <div className="rounded-lg bg-primary-highlight p-3 text-sm">
          <p className="font-semibold">Booking Details:</p>
          <p>Check-in: {range.from.toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
          <p>Check-out: {range.to.toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
          <p className="mt-1 font-medium">
            Duration:{' '}
            {Math.ceil((range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24))} nights
          </p>
        </div>
      )}
    </div>
  );
};

export const DarkBookingCalendar = () => {
  const [range, setRange] = useState<DateRange>();
  const today = new Date();
  const maxDate = new Date(today.getTime() + 180 * 24 * 60 * 60 * 1000);

  return (
    <div className="rounded-lg bg-foreground p-6">
      <div className="flex flex-col gap-4">
        <Calendar
          colorScheme="dark"
          disabled={{ before: today }}
          endMonth={maxDate}
          mode="range"
          onSelect={setRange}
          selected={range}
          startMonth={today}
        />
        {range?.from && range.to && (
          <div className="rounded-lg bg-background/10 p-3 text-sm text-background">
            <p className="font-semibold">Booking Details:</p>
            <p>Check-in: {range.from.toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
            <p>Check-out: {range.to.toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
            <p className="mt-1 font-medium">
              Duration:{' '}
              {Math.ceil((range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24))}{' '}
              nights
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

DarkBookingCalendar.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Comparison: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-sm font-semibold">Light</h3>
        <Calendar colorScheme="light" mode="single" />
      </div>
      <div className="rounded-lg bg-foreground p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-sm font-semibold text-background">Dark</h3>
          <Calendar colorScheme="dark" mode="single" />
        </div>
      </div>
    </div>
  ),
};
