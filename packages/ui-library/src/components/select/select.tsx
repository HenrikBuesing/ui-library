import React, {type KeyboardEvent, useEffect, useMemo, useRef, useState} from 'react';
import global from '../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
import type {RenderItem, SelectProps} from './types';
import styles from './select.module.scss';
import cls from '@utils/conditionalClass';
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

  const listId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useAddAttribution(svgRef);

  const renderItems = useMemo(() => {
    const items: RenderItem[] = [];

    for (const item of options) {
      if ('options' in item) {
        items.push({ type: 'group', label: item.label });

        for (const opt of item.options) {
          items.push({
            type: 'option',
            option: opt,
            groupDisabled: item.disabled ?? false,
            index: items.length
          });
        }
      } else {
        items.push({
          type: 'option',
          option: item,
          groupDisabled: false,
          index: items.length
        });
      }
    }

    return items;
  }, [options]);
  const flatOptions = renderItems.filter(i => i.type === 'option');
  const selectedOption = flatOptions.find((i) => i.option.value === value)?.option;

  function handleSelect(val: string) {
    onChange(val);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function openList() {
    if (disabled) return;

    const selectedItem = flatOptions.find(i => i.type === 'option' && i.option.value === value);

    if (selectedItem) {
      setActiveIndex(selectedItem.index);
    } else {
      const first = flatOptions.find(i => i.type === 'option' && !i.option.disabled && !i.groupDisabled);

      setActiveIndex(first ? first.index : 0);
    }

    setOpen(true);
  }

  function closeList() {
    setOpen(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();

        return !open ? openList() : setActiveIndex(i => getNextEnabledIndex(i, 1));
      case 'ArrowUp':
        e.preventDefault();

        return !open ? openList() : setActiveIndex(i => getNextEnabledIndex(i, -1));
      case 'Home': {
        e.preventDefault();

        const first = flatOptions.find(i => !i.option.disabled && !i.groupDisabled);

        if (first) setActiveIndex(first.index);

        break;
      }
      case 'End': {
        e.preventDefault();

        for (let i = renderItems.length - 1; i >= 0; i--) {
          const item = renderItems[i];
          if (item.type === 'option' && !item.option.disabled && !item.groupDisabled) {
            setActiveIndex(i);
            break;
          }
        }

        break;
      }
      case 'Enter':
      case ' ': {
        e.preventDefault();

        const activeItem = renderItems[activeIndex];
        
        if (activeItem?.type === 'option' && !activeItem.option.disabled && !activeItem.groupDisabled) {
          handleSelect(activeItem.option.value);
        }

        break;
      }
      case 'Escape':
        return closeList();
    }
  }

  function getNextEnabledIndex(start: number, direction: 1 | -1) {
    let index = start + direction;

    while (index >= 0 && index < renderItems.length) {
      const item = renderItems[index];

      if (item.type === 'option' && !item.option.disabled && !item.groupDisabled) {
        return index;
      }

      index += direction;
    }

    return start;
  }

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [open]);

  return (
    <div className={cls([styles.selectWrapper, dark && global.dark])} ref={wrapperRef} style={{width: width, minWidth: width}}>
      <button
        ref={buttonRef}
        type={'button'}
        aria-haspopup={'listbox'}
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
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

      <div id={listId} role="listbox" className={cls([styles.optionsList, open && styles.open, openPosition === 'top' ? styles.top : styles.bottom])}>
        {renderItems.map(item => {
          if (item.type === 'group') {
            return (
              <div key={`group-${item.label}`} className={styles.group}>
                <div className={styles.groupLabel}>{item.label}</div>
              </div>
            );
          }

          return (
            <Option
              key={item.option.value}
              option={item.option}
              disabled={item.groupDisabled || item.option.disabled}
              activeIndex={activeIndex}
              value={value}
              index={item.index}
              onSelect={handleSelect}
              setActiveIndex={setActiveIndex}
              listId={listId}
            />
          );
        })}
      </div>
    </div>
  );
}
