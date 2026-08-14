import React, {type KeyboardEvent, useEffect, useRef, useState} from 'react';
import global from '../common/styles/global.module.scss';
import {dateFormat, type DateInputProps} from './types';
import addAttribution from '@utils/addAttribution';
import {Input, InputDecorator} from '../input';
import {useDatePicker} from './useDatePicker';
import styles from './datePicker.module.scss';
import CalendarPopup from './calendarPopup';
import cls from '@utils/conditionalClass';

export function DateInput(props: DateInputProps) {
  const {
    ariaLabels = {calendar: 'Date picker', next: 'Next month', previous: 'Previous month'},
    dark = false,
    disabled,
    error = false,
    helpText,
    placeholder,
    locale,
    onChange,
    readOnly = false,
    value,
    variant = 'basic',
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
    if (disabled || readOnly) return;
    if (!picker.open) commitInput();
    
    ref.current?.focus();

    picker.toggleCalendar();
  }

  function parseDate(input: string): Date | null {
    const parts = new Intl.DateTimeFormat(locale, dateFormat)
      .formatToParts(new Date(2000, 0, 2))
      .filter(({type}) => type === 'day' || type === 'month' || type === 'year');

    const values = input.trim().split(/\D+/);

    if (values.length !== parts.length || values.some(value => !/^\d+$/.test(value))) return null;

    const {day, month, year} = Object.fromEntries(parts.map(({type}, index) => [type, Number(values[index])]));
    const date = new Date(year, month - 1, day);

    return (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) ? date : null;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsEditing(true);

    const next = e.target.value;

    setInputValue(next);
  }

  function commitInput() {
    if (!inputValue.trim()) {
      onChange(null);
      setInputValue('');
      setIsEditing(false);
      return;
    }
    
    const parsed = parseDate(inputValue);

    if (!parsed || picker.isDayDisabled(parsed)) {
      setInputValue(value ? value.toLocaleDateString(locale, dateFormat) : '');

      setIsEditing(false);
      return;
    }

    onChange(parsed);

    picker.setFocusedDate(parsed);
    picker.setView(parsed);

    setInputValue(parsed.toLocaleDateString(locale, dateFormat));

    setIsEditing(false);
  }
  
  function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      // prevent accidental form submission
      e.preventDefault();
      commitInput();
    }
  }

  useEffect(() => {
    if (isEditing) return;

    if (!value) {
      setInputValue('');
      return;
    }

    setInputValue(value.toLocaleDateString(locale, dateFormat));
  }, [value, locale, isEditing]);

  return (
    <div className={cls([styles.datePicker, picker.open && styles.active, value && styles.value, dark && global.dark])} ref={picker.ref}>
      <Input
        label={placeholder}
        variant={variant}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={commitInput}
        onKeyDown={handleEnter}
        disabled={disabled}
        helpText={helpText}
        error={error}
        onClick={() => {handleCalendarPopup()}}
        readOnly={readOnly}
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