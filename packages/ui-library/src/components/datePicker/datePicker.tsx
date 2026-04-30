import React, {useEffect, useMemo, useRef, useState} from 'react';
import type {CalendarDay, DatePickerProps} from './types';
import global from '../common/styles/global.module.scss';
import {addAttribution} from '@utils/addAttribution';
import styles from './datePicker.module.scss';
import cls from '@utils/conditionalClass';
import {useStableId} from '@utils/getId';

export function DatePicker(props: DatePickerProps) {
  const {
    ariaLabels = {calendar: 'Date picker', next: 'Next month', previous: 'Previous month'},
    dark = false,
    dateFormat = {year: 'numeric', month: '2-digit', day: '2-digit'},
    defaultDate,
    disabled,
    placeholder,
    locale,
    max,
    min,
    onChange,
    value,
    weekStart = 'mon'
  } = props;

  // prevents issues with timestamps when comparing max & min dates 
  const minDate = min ? new Date(min.getFullYear(), min.getMonth(), min.getDate()) : null;
  const maxDate = max ? new Date(max.getFullYear(), max.getMonth(), max.getDate()) : null;

  const today = new Date();
  const initialView = value ?? defaultDate ?? today
  const [view, setView] = useState(initialView);
  const [open, setOpen] = useState(false);

  const year = view.getFullYear();
  const month = view.getMonth();

  const days = useMemo(() => getCalendarDays(year, month), [year, month]);
  const weeks = Array.from({length: days.length / 7}, (_, i) => days.slice(i * 7, i * 7 + 7));
  const weekdays = useMemo(() => getWeekdayLabels(locale, weekStart), [locale, weekStart]);
  const ID = useStableId();
  const ref = useRef<HTMLDivElement>(null);

  function getCalendarDays(year: number, month: number) {
    const days: CalendarDay[] = [];
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = weekStart === 'mon' ? (firstWeekday === 0 ? 6 : firstWeekday - 1) : firstWeekday;
    const startDate = new Date(year, month, 1 - offset);
    const totalDays = Math.ceil((offset + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      days.push({
        date: date,
        currentMonth: date.getMonth() === month,
        disabled: isDayDisabled(date)
      });
    }

    return days;
  }

  function getWeekdayLabels(locale = 'default', weekStart: 'mon' | 'sun') {
    const base = new Date(2021, 7, 1); // Sunday

    const days = Array.from({length: 7}, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      return d.toLocaleDateString(locale, {weekday: 'short'});
    });

    if (weekStart === 'mon') {
      return [...days.slice(1), days[0]];
    }

    return days;
  }

  function changeMonth(offset: number) {
    setView(prev => {
      const next = new Date(prev.getFullYear(), prev.getMonth() + offset, 1);

      if (min && next < new Date(min.getFullYear(), min.getMonth(), 1)) return prev;
      if (max && next > new Date(max.getFullYear(), max.getMonth(), 1)) return prev;

      return next;
    });
  }

  function handleDateChange(date: Date) {
    onChange(date);
  }

  function isDayDisabled(date: Date) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  }

  function isSameDay(a: Date | null, b: Date | null) {
    return !!a && !!b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  }
  
  function handleCalendarPopup() {
    if (disabled) return;
    
    setOpen(!open);
  }

  useEffect(() => {
    if (!open) return setView(initialView);

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className={cls([styles.datePicker, open && styles.active, value && styles.value, dark && global.dark])} ref={ref}>
      <button
        className={styles.trigger}
        disabled={disabled}
        onClick={handleCalendarPopup}
        aria-controls={ID}
        aria-haspopup={'dialog'}
        aria-expanded={open}
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

        <div className={cls([styles.calendar, open && styles.open])} id={ID} role={'dialog'} aria-label={ariaLabels.calendar}>
          <div className={styles.controls}>
            <button className={styles.button} onClick={() => {changeMonth(-1)}} aria-label={ariaLabels.previous}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={styles.svg} ref={el => addAttribution(el)}>
                <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/>
              </svg>
            </button>

            <span>{view.toLocaleDateString(locale, {month: 'long', year: 'numeric'})}</span>
            
            <button className={styles.button} onClick={() => {changeMonth(1)}} aria-label={ariaLabels.next}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={styles.svg} ref={el => addAttribution(el)}>
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
              </svg>
            </button>
          </div>

          <table>
            <thead className={styles.calendarHeader}>
            <tr>
              {weekdays.map(day => (
                <th key={day} className={styles.item}>{day}</th>
              ))}
            </tr>
            </thead>

            <tbody className={styles.calendarDays}>
            <tr className={styles.divider}>
              <td colSpan={7}></td>
            </tr>

            {weeks.map((week, idx) => (
              <tr key={idx}>
                {week.map(day => (
                  <td key={`${day.date.getFullYear()}-${day.date.getMonth()}-${day.date.getDate()}`}>
                    <button
                      className={cls([styles.item, day.currentMonth && styles.active, isSameDay(value, day.date) && styles.selected])}
                      onClick={() => {handleDateChange(day.date)}}
                      disabled={day.disabled}
                      aria-current={isSameDay(value, day.date) ? 'date' : undefined}
                    >
                      {day.date.getDate()}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}