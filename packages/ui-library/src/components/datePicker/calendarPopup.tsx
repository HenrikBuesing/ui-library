import addAttribution from '@utils/addAttribution';
import type {DatePickerPopupProps} from './types';
import styles from './datePicker.module.scss';
import cls from '@utils/conditionalClass';
import React from 'react';

export default function CalendarPopup(props: DatePickerPopupProps) {
  return (
    <div className={cls([styles.calendar, props.open && styles.open])} id={props.ID} role={'dialog'} aria-label={props.ariaLabels.calendar} onKeyDown={props.handleKeyDown}>
      <div className={styles.controls}>
        <button className={styles.button} ref={props.prevRef} disabled={props.isPrevDisabled} onClick={() => {props.changeMonth(-1)}} aria-label={props.ariaLabels.previous}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={styles.svg} ref={el => addAttribution(el)}>
            <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/>
          </svg>
        </button>

        <span>{props.view.toLocaleDateString(props.locale, {month: 'long', year: 'numeric'})}</span>

        <button className={styles.button} ref={props.nextRef} disabled={props.isNextDisabled} onClick={() => {props.changeMonth(1)}} aria-label={props.ariaLabels.next}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={styles.svg} ref={el => addAttribution(el)}>
            <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
          </svg>
        </button>
      </div>

      <table>
        <thead className={styles.calendarHeader}>
        <tr>
          {props.weekdays.map(day => (
            <th key={day} className={styles.item}>{day}</th>
          ))}
        </tr>
        </thead>

        <tbody className={styles.calendarDays}>
        <tr className={styles.divider}>
          <td colSpan={7}></td>
        </tr>

        {props.weeks.map((week, idx) => (
          <tr key={idx}>
            {week.map(day => (
              <td key={`${day.date.getFullYear()}-${day.date.getMonth()}-${day.date.getDate()}`}>
                <button
                  className={cls([styles.item, day.currentMonth && styles.active, props.isSameDay(props.value, day.date) && styles.selected, props.isSameDay(props.today, day.date) && styles.today])}
                  onClick={() => {props.handleDateChange(day.date)}}
                  disabled={day.disabled}
                  aria-current={props.isSameDay(props.value, day.date) ? 'date' : undefined}
                  tabIndex={props.isSameDay(props.focusedDate, day.date) ? 0 : -1}
                  ref={el => {props.dayRefs.current[`${day.date.toDateString()}`] = el}}
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
  );
}