import global from '../common/styles/global.module.scss';
import addAttribution from '@utils/addAttribution';
import {useDatePicker} from './useDatePicker';
import styles from './datePicker.module.scss';
import type {DatePickerProps} from './types';
import CalendarPopup from './calendarPopup';
import cls from '@utils/conditionalClass';
import React from 'react';

export function DatePicker(props: DatePickerProps) {
  const {
    ariaLabels = {calendar: 'Date picker', next: 'Next month', previous: 'Previous month'},
    dark = false,
    dateFormat = {year: 'numeric', month: '2-digit', day: '2-digit'},
    disabled,
    placeholder,
    locale,
    value,
    variant = 'outlined',
  } = props;

  const picker = useDatePicker(props);
  
  function handleCalendarPopup() {
    if (disabled) return;

    picker.toggleCalendar();
  }

  function handleDateChange(date: Date) {
    picker.selectDate(date);
  }
  
  return (
    <div className={cls([styles.datePicker, picker.open && styles.active, value && styles.value, dark && global.dark, styles[variant]])} ref={picker.ref}>
      <button
        className={styles.trigger}
        disabled={disabled}
        type={'button'}
        onClick={handleCalendarPopup}
        aria-controls={picker.ID}
        aria-haspopup={'dialog'}
        aria-expanded={picker.open}
        aria-label={value?.toLocaleDateString(locale, dateFormat) ?? placeholder}
      >
        <span>
          {value?.toLocaleDateString(locale, dateFormat)}
        </span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.chevron} ref={el => addAttribution(el)} aria-hidden>
          <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/>
        </svg>
      </button>

      <fieldset className={styles.fieldset}>
        <legend>{placeholder}</legend>
      </fieldset>

      <label className={styles.label} onClick={handleCalendarPopup}>{placeholder}</label>
      
      <CalendarPopup {...picker} ariaLabels={ariaLabels} value={value} locale={locale} handleDateChange={handleDateChange}/>
    </div>
  );
}