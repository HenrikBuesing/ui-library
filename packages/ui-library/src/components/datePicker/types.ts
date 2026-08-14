import type {RefObject, KeyboardEvent} from 'react';
import type {BaseProps} from '../common/types';

export const dateFormat: Intl.DateTimeFormatOptions = {year: 'numeric', month: '2-digit', day: '2-digit'};

export type DatePickerProps = BaseProps & {
  onChange: (date: Date | null) => void;
  placeholder: string;
  value: Date | null;
  activeView?: Date;
  ariaLabels?: AriaLabels;
  dateFormat?: Intl.DateTimeFormatOptions;
  defaultDate?: Date;
  disabled?: boolean;
  locale?: string;
  max?: Date;
  min?: Date;
  variant?: 'outlined' | 'basic';
  weekStart?: 'mon' | 'sun';
};

export type DateInputProps = Omit<DatePickerProps, 'dateFormat'> & {
  helpText?: string;
  readOnly?: boolean;
  error?: boolean;
}

export type AriaLabels = {
  calendar: string;
  next: string;
  previous: string;
}

export type CalendarDay = {
  date: Date;
  currentMonth: boolean;
  disabled: boolean;
}

export type DatePickerPopupProps = {
  ariaLabels: AriaLabels;
  changeMonth: (offset: number) => void;
  ID: string;
  isNextDisabled: boolean;
  isSameDay: (a: Date | null, b: Date | null) => boolean;
  isPrevDisabled: boolean;
  dayRefs: RefObject<Record<string, HTMLButtonElement | null>>;
  focusedDate: Date | null;
  handleDateChange: (date: Date) => void;
  handleKeyDown: (e: KeyboardEvent) => void;
  locale: string | undefined;
  nextRef: RefObject<HTMLButtonElement | null>;
  open: boolean;
  prevRef: RefObject<HTMLButtonElement | null>;
  today: Date;
  value: Date | null;
  view: Date;
  weeks: CalendarDay[][];
  weekdays: string[];
};