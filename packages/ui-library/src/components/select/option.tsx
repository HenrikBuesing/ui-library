import cls from '@utils/conditionalClass';
import styles from './select.module.scss';
import type {OptionProps} from './types';
import React from 'react';

export function Option(props: OptionProps) {
  const {
    activeIndex,
    groupDisabled,
    index,
    listId,
    onSelect,
    option,
    setActiveIndex,
    value,
  } = props;

  const isActive = index === activeIndex;
  const isSelected = option.value === value;
  const disabledOpt = option.disabled ?? groupDisabled;

  return (
    <div
      key={option.value}
      id={`${listId}-option-${index}`}
      role='option'
      aria-selected={isSelected}
      aria-disabled={disabledOpt || undefined}
      className={cls([styles.option, isActive && styles.active, disabledOpt && styles.disabled])}
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => {if (!disabledOpt) onSelect(option.value);}}
    >
      {option.label}
    </div>
  );
}
