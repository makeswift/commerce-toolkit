import type { ReactNode } from 'react';

import type { CalendarProps } from '@/components/calendar';
import * as DatePickerPrimitive from '@/components/date-picker';

export interface DatePickerProps {
  disabledDays?: CalendarProps['disabled'];
  selected: Date | undefined;
  onCalendarSelect: (date: Date | undefined) => void;
  placeholder?: string;
  required?: boolean;
  id: string;
  name: string;
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export function DatePicker({
  disabledDays,
  onCalendarSelect,
  placeholder = 'MM/DD/YYYY',
  required = false,
  selected,
  id,
  name,
  icon,
}: DatePickerProps) {
  const formattedDate = selected ? Intl.DateTimeFormat().format(selected) : undefined;

  return (
    <DatePickerPrimitive.Root>
      <DatePickerPrimitive.Trigger asChild>
        <DatePickerPrimitive.Input
          id={id}
          name={name}
          placeholder={placeholder}
          prependIcon={{
            asChild: true,
            children: (
              <DatePickerPrimitive.Icon asChild={icon?.asChild}>
                {icon?.children}
              </DatePickerPrimitive.Icon>
            ),
          }}
          readOnly
          required={required}
          type="text"
          value={formattedDate ?? ''}
        />
      </DatePickerPrimitive.Trigger>
      <DatePickerPrimitive.Portal>
        <DatePickerPrimitive.Content align="start" sideOffset={8}>
          <DatePickerPrimitive.Calendar
            disabled={disabledDays}
            mode="single"
            onSelect={onCalendarSelect}
            selected={selected}
          />
        </DatePickerPrimitive.Content>
      </DatePickerPrimitive.Portal>
    </DatePickerPrimitive.Root>
  );
}
