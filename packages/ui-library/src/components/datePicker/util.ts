import type {CalendarDay} from './types';

export function isSameDay(a: Date | null, b: Date | null) {
  return !!a && !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

export function getWeekdayLabels(locale = 'default', weekStart: 'mon' | 'sun' = 'mon') {
  const base = new Date(2021, 7, 1);

  const days = Array.from({length: 7}, (_, i) => {
    const d = new Date(base);

    d.setDate(base.getDate() + i);

    return d.toLocaleDateString(locale, {weekday: 'short'});
  });

  if (weekStart === 'mon') return [...days.slice(1), days[0]];

  return days;
}

export function getCalendarDays(year: number, month: number, weekStart: 'mon' | 'sun', isDayDisabled: (date: Date) => boolean): CalendarDay[] {
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