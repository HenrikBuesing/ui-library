import React, {type ChangeEvent} from 'react';
import type {RadioGroupProps} from './types';
import cls from '@utils/conditionalClass';
import styles from '../check.module.scss';
import {Radio} from '../radio';

export function RadioGroup(props: RadioGroupProps) {
  const {
    color,
    dark = false,
    direction = 'column',
    disabled,
    name,
    onChange,
    options,
    selected,
  } = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!disabled && onChange) onChange(e);
  }

  return (
    <div className={cls([styles.radioWrapper, styles[direction]])}>
      {options.map((option, idx) =>
        <Radio
          key={idx}
          dark={dark}
          color={color}
          onChange={handleChange}
          checked={selected === option.value}
          disabled={disabled ?? option.disabled}
          name={name}
          {...option}
        >
          {option.label}
        </Radio>
      )}
    </div>
  );
}