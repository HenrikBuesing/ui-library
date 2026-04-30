import type {BaseProps} from '../common/types';

export type DatePickerProps = BaseProps & {
  onChange: (date: Date | null) => void;
  placeholder: string;
  value: Date | null;
  dateFormat?: Intl.DateTimeFormatOptions;
  defaultDate?: Date;
  disabled?: boolean;
  locale?: string;
  max?: Date;
  min?: Date;
  weekStart?: 'mon' | 'sun';
};

export type CalendarDay = {
  date: Date;
  currentMonth: boolean;
  disabled: boolean;
}