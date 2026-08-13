import {getCalendarDays, getWeekdayLabels, isSameDay} from './util';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import type {DatePickerProps} from './types';
import {useStableId} from '@utils/getId';

export function useDatePicker(props: DatePickerProps) {
  const {
    activeView,
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
  const initialView = useMemo(() => {
    const date = value ?? activeView ?? today;

    if (min && date < min) return min;
    if (max && date > max) return max;

    return date;
  }, [value, activeView, min, max]);
  const [view, setView] = useState(initialView);
  const [open, setOpen] = useState(false);

  const year = view.getFullYear();
  const month = view.getMonth();

  const ID = useStableId();
  const days = useMemo(() => getCalendarDays(year, month, weekStart, isDayDisabled), [year, month, weekStart]);
  const weeks = Array.from({length: days.length / 7}, (_, i) => days.slice(i * 7, i * 7 + 7));
  const weekdays = useMemo(() => getWeekdayLabels(locale, weekStart), [locale, weekStart]);
  const [focusedDate, setFocusedDate] = useState(value ?? days[0].date);

  const ref = useRef<HTMLDivElement>(null);
  const dayRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const isNextDisabled = max ? new Date(year, month + 1, 1) > new Date(max.getFullYear(), max.getMonth(), 1) : false;
  const isPrevDisabled = min ? new Date(year, month - 1, 1) < new Date(min.getFullYear(), min.getMonth(), 1) : false;

  function changeMonth(offset: number) {
    setView(prev => {
      const next = new Date(prev.getFullYear(), prev.getMonth() + offset, 1);

      if (min && next < new Date(min.getFullYear(), min.getMonth(), 1)) return prev;
      if (max && next > new Date(max.getFullYear(), max.getMonth(), 1)) return prev;

      return next;
    });
  }

  function isDayDisabled(date: Date) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Tab') {
      const focusable = [
        prevRef.current,
        nextRef.current,
        dayRefs.current[focusedDate?.toDateString() || '']
      ].filter((el): el is HTMLButtonElement => {
        return !!el && !el.hasAttribute('disabled')
      });

      let currentIndex = focusable.indexOf(document.activeElement as HTMLButtonElement);
      if (currentIndex === -1) currentIndex = 0;

      if (e.shiftKey) {
        if (currentIndex === 0) {
          e.preventDefault();
          focusable[focusable.length - 1]?.focus();
        }
      } else {
        if (currentIndex === focusable.length - 1) {
          e.preventDefault();
          focusable[0]?.focus();
        }
      }

      return;
    }

    if (!focusedDate) return;

    const currentIndex = days.findIndex(d => isSameDay(d.date, focusedDate));

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (e.key) {
      case 'ArrowRight':
        nextIndex += 1;
        break;
      case 'ArrowLeft':
        nextIndex -= 1;
        break;
      case 'ArrowDown':
        nextIndex += 7;
        break;
      case 'ArrowUp':
        nextIndex -= 7;
        break;
      case 'Home': {
        nextIndex = currentIndex - (currentIndex % 7);
        break;
      }
      case 'End': {
        nextIndex = currentIndex + (6 - (currentIndex % 7));
        break;
      }
      case 'PageUp': {
        e.preventDefault();
        changeMonth(-1);
        return;
      }
      case 'PageDown': {
        e.preventDefault();
        changeMonth(1);
        return;
      }
      default:
        return;
    }

    e.preventDefault();

    nextIndex = Math.max(0, Math.min(days.length - 1, nextIndex));

    let next = days[nextIndex];

    if (next.disabled) {
      const direction = nextIndex > currentIndex ? 1 : -1;

      let i = nextIndex;
      while (i >= 0 && i < days.length) {
        if (!days[i].disabled) {
          next = days[i];
          break;
        }

        i += direction;
      }
    }

    if (!next.disabled) setFocusedDate(next.date);
  }

  function toggleCalendar() {
    setOpen(prev => !prev);
  }

  function selectDate(date: Date) {
    setOpen(false);
    onChange(date);
  }

  useEffect(() => {
    if (!open) {
      setView(initialView);
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, initialView]);

  useEffect(() => {
    if (!focusedDate) return;

    const key = focusedDate.toDateString();
    const el = dayRefs.current[key];

    el?.focus();
  }, [focusedDate]);

  useEffect(() => {
    if (!open) return;

    const firstEnabled = days.find(d => d.currentMonth && !d.disabled) ?? days.find(d => !d.disabled) ?? days[0];

    if (firstEnabled) setFocusedDate(firstEnabled.date);
  }, [open, days]);

  return {
    open,
    ID,
    view,
    days,
    weeks,
    weekdays,
    focusedDate,
    setFocusedDate,
    ref,
    prevRef,
    nextRef,
    dayRefs,
    changeMonth,
    handleKeyDown,
    isSameDay,
    isDayDisabled,
    isPrevDisabled,
    isNextDisabled,
    today,
    toggleCalendar,
    selectDate,
    setView
  };
}