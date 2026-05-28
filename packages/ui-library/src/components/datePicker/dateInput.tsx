import global from '../common/styles/global.module.scss';
import React, {useEffect, useState} from 'react';
import {Input, InputDecorator} from '../input';
import {useDatePicker} from './useDatePicker';
import styles from './datePicker.module.scss';
import type {DatePickerProps} from './types';
import CalendarPopup from './calendarPopup';
import cls from '@utils/conditionalClass';

export function DateInput(props: DatePickerProps) {
  const {
    ariaLabels = {calendar: 'Date picker', next: 'Next month', previous: 'Previous month'},
    dark = false,
    dateFormat = {year: 'numeric', month: '2-digit', day: '2-digit'},
    disabled,
    placeholder,
    locale,
    onChange,
    value,
  } = props;

  const picker = useDatePicker(props);
  
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  function handleDateChange(date: Date) {
    setInputValue(date.toLocaleDateString(locale, dateFormat));
    
    picker.selectDate(date);
  }

  function handleCalendarPopup() {
    if (disabled) return;
    if (!picker.open) commitInput();

    picker.toggleCalendar();
  }

  function parseDate(value: string) {
    const parts = value.split('.');

    if (parts.length !== 3) return null;

    const [day, month, year] = parts.map(Number);

    if (!day || !month || !year) return null;

    const date = new Date(year, month - 1, day);

    // invalid date protection
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }

    return date;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsEditing(true);

    const next = e.target.value;

    setInputValue(next);
  }

  function commitInput() {
    const parsed = parseDate(inputValue);

    if (!parsed || picker.isDayDisabled(parsed)) {
      setInputValue(value ? value.toLocaleDateString(locale, dateFormat) : '');

      setIsEditing(false);
      return;
    }

    onChange(parsed);

    // picker.setView(parsed);
    picker.setFocusedDate(parsed);

    setInputValue(parsed.toLocaleDateString(locale, dateFormat));

    setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing) return;

    if (!value) {
      setInputValue('');
      return;
    }

    setInputValue(
      value.toLocaleDateString(locale, dateFormat)
    );
  }, [value, locale, dateFormat, isEditing]);

  return (
    <div className={cls([styles.datePicker, picker.open && styles.active, value && styles.value, dark && global.dark])} ref={picker.ref}>
      <Input
        label={placeholder}
        variant={'outlined'}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={commitInput}
        onKeyDown={e => {if (e.key === 'Enter') commitInput()}}
      >
        <InputDecorator onClick={handleCalendarPopup}>ee</InputDecorator>
      </Input>

      <CalendarPopup {...picker} ariaLabels={ariaLabels} value={value} locale={locale} handleDateChange={handleDateChange}/>
    </div>
  );
}