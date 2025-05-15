import { DayPicker } from 'react-day-picker';

export type SelectSingleEventHandler = (day: Date | undefined) => void;

export interface BookingFormData {
  selectedDate: Date | null;
  eventType: string;
  selectedTariff: string;
  name: string;
  isUndecidedTariff: boolean;
}

export type CalendarProps = React.ComponentProps<typeof DayPicker>; 