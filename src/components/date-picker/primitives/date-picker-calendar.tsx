import { Calendar } from '@/components/calendar';
import type { CalendarProps } from '@/components/calendar';

export type DatePickerCalendarProps = CalendarProps;

export function DatePickerCalendar({ ...props }: DatePickerCalendarProps) {
  return <Calendar data-slot="date-picker-calendar" {...props} />;
}
