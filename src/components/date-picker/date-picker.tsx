import { CalendarIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import type { CalendarProps } from '@/components/calendar';
import { Calendar } from '@/components/calendar';
import * as DatePickerPrimitive from '@/components/date-picker';
import { Input } from '@/components/input';

export type DatePickerProps = ComponentProps<typeof Input> & {
  disabledDays?: CalendarProps['disabled'];
  selected: Date | undefined;
  onCalendarSelect: (date: Date | undefined) => void;
};

export function DatePicker({
  disabledDays,
  onCalendarSelect,
  placeholder = 'MM/DD/YYYY',
  required = false,
  selected,
  ref,
  ...props
}: DatePickerProps) {
  const formattedDate = selected ? Intl.DateTimeFormat().format(selected) : undefined;

  return (
    <DatePickerPrimitive.Root>
      <DatePickerPrimitive.Trigger asChild>
        <Input
          placeholder={placeholder}
          prepend={<CalendarIcon className="h-5 w-5" strokeWidth={1} />}
          readOnly={true}
          ref={ref}
          required={required}
          type="text"
          value={formattedDate ?? ''}
          {...props}
        />
      </DatePickerPrimitive.Trigger>
      <DatePickerPrimitive.Portal>
        <DatePickerPrimitive.Content align="start" sideOffset={8}>
          <Calendar
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
