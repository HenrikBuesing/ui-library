import type {BaseProps} from '../common/types';

export type DatePickerProps = BaseProps & {
  onChange: (date: Date | null) => void;
  placeholder: string;
  value: Date | null;
  ariaLabels?: AriaLabels;
  dateFormat?: Intl.DateTimeFormatOptions;
  defaultDate?: Date;
  disabled?: boolean;
  locale?: string;
  max?: Date;
  min?: Date;
  weekStart?: 'mon' | 'sun';
};

export type AriaLabels = {
  calendar?: string;
  next?: string;
  previous?: string;
}

export type CalendarDay = {
  date: Date;
  currentMonth: boolean;
  disabled: boolean;
}