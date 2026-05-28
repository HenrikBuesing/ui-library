import global from '../common/styles/global.module.scss';
import React, {useEffect, useRef, useState} from 'react';
import {Input, InputDecorator} from '../input';
import {useDatePicker} from './useDatePicker';
import styles from './datePicker.module.scss';
import type {DatePickerProps} from './types';
import CalendarPopup from './calendarPopup';
import cls from '@utils/conditionalClass';
import addAttribution from "@utils/addAttribution";

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
  const ref = useRef<HTMLInputElement>(null);

  function handleDateChange(date: Date) {
    setInputValue(date.toLocaleDateString(locale, dateFormat));
    
    picker.selectDate(date);
  }

  function handleCalendarPopup() {
    if (disabled) return;
    if (!picker.open) commitInput();
    
    ref.current?.focus();

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
        disabled={disabled}
        ref={ref}
      >
        <InputDecorator onClick={handleCalendarPopup}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.chevron} ref={el => addAttribution(el)}>
            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/>
          </svg>
        </InputDecorator>
      </Input>

      <CalendarPopup {...picker} ariaLabels={ariaLabels} value={value} locale={locale} handleDateChange={handleDateChange}/>
    </div>
  );
}