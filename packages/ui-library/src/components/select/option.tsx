import cls from '@utils/conditionalClass';
import styles from './select.module.scss';
import type {OptionProps} from './types';
import React from 'react';

export function Option(props: OptionProps) {
  const {
    activeIndex,
    disabled,
    index,
    listId,
    onSelect,
    option,
    setActiveIndex,
    value,
  } = props;

  const isActive = index === activeIndex;
  const isSelected = option.value === value;

  return (
    <div
      key={option.value}
      id={`${listId}-option-${index}`}
      role='option'
      aria-selected={isSelected}
      aria-disabled={disabled}
      className={cls([styles.option, isActive && styles.active, disabled && styles.disabled])}
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => {if (!disabled) onSelect(option.value);}}
    >
      {option.label}
    </div>
  );
}
