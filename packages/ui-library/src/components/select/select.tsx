import React, {type KeyboardEvent, useEffect, useMemo, useRef, useState} from 'react';
import global from '../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
import styles from './select.module.scss';
import cls from '@utils/conditionalClass';
import type {SelectProps} from './types';
import {Option} from './option';
import {useId} from 'react';

export function Select(props: SelectProps) {
  const {
    dark,
    disabled,
    onChange,
    openPosition = 'bottom',
    options,
    placeholder,
    value,
    width
  } = props;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  useAddAttribution(svgRef);

  const flatOptions = useMemo(() => {
    return options.flatMap(items => 'options' in items ? items.options.map(o => ({
      option: o,
      groupDisabled: items.disabled ?? false
    })) : [{option: items, groupDisabled: false}]);
  }, [options]);

  const selectedOption = flatOptions.find(f => f.option.value === value)?.option;

  function handleSelect(val: string) {
    onChange(val);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function openList() {
    if (disabled) return;

    const firstEnabledIndex = flatOptions.findIndex(f => !f.option.disabled && !f.groupDisabled);
    setActiveIndex(firstEnabledIndex >= 0 ? firstEnabledIndex : 0);
    setOpen(true);
  }

  function closeList() {
    setOpen(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        if (!open) {
          openList();
        } else {
          setActiveIndex(i => {
            let nextIndex = i;
            do {
              nextIndex = Math.min(nextIndex + 1, flatOptions.length - 1);
            } while (
              flatOptions[nextIndex].option.disabled ||
              flatOptions[nextIndex].groupDisabled
              );
            return nextIndex;
          });
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) {
          openList();
        } else {
          // Move to previous enabled option
          setActiveIndex(i => {
            let prevIndex = i;
            do {
              prevIndex = Math.max(prevIndex - 1, 0);
            } while (
              flatOptions[prevIndex].option.disabled ||
              flatOptions[prevIndex].groupDisabled
              );
            return prevIndex;
          });
        }
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(flatOptions.length - 1);
        break;
      case 'Enter':
      case ' ': {
        e.preventDefault();
        const {option, groupDisabled} = flatOptions[activeIndex];
        if (!option.disabled && !groupDisabled) handleSelect(option.value);
        break;
      }
      case 'Escape':
        closeList();
        break;
    }
  }

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [open]);

  return (
    <div className={cls([styles.selectWrapper, dark && global.dark])} ref={wrapperRef} style={{width: width, minWidth: width}}>
      <button
        ref={buttonRef}
        type={'button'}
        role={'combobox'}
        aria-haspopup={'listbox'}
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-option-${activeIndex}` : undefined}
        disabled={disabled}
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={onKeyDown}
        className={cls([styles.trigger, disabled && styles.disabled])}
        aria-label={selectedOption?.label ?? placeholder}
      >
        <span style={{overflow: 'hidden'}}>{selectedOption?.label ?? placeholder}</span>

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className={styles.chevron} ref={svgRef} aria-hidden>
          <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/>
        </svg>
      </button>

      <div
        role={'listbox'} id={listId}
        className={cls([styles.optionsList, open && styles.open, openPosition === 'top' ? styles.top : styles.bottom])}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        {options.map(items => {
          if ('options' in items) {
            return (
              <div key={items.label} className={styles.group}>
                <div className={styles.groupLabel}>{items.label}</div>

                {items.options.map(opt => (
                  <Option
                    key={opt.value}
                    option={opt}
                    groupDisabled={!!items.disabled}
                    activeIndex={activeIndex}
                    value={value}
                    index={flatOptions.findIndex(f => f.option === opt)}
                    onSelect={handleSelect}
                    setActiveIndex={setActiveIndex}
                    listId={listId}
                  />
                ))}
              </div>
            );
          } else {
            return (
              <Option
                key={items.value}
                option={items}
                groupDisabled={false}
                activeIndex={activeIndex}
                value={value}
                index={flatOptions.findIndex(f => f.option === items)}
                onSelect={handleSelect}
                setActiveIndex={setActiveIndex}
                listId={listId}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
