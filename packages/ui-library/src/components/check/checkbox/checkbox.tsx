import global from '@common/styles/global.module.scss';
import React, {type ChangeEvent} from 'react';
import generateKey from '@utils/generateKey';
import type {CheckboxProps} from './types';
import cls from '@utils/conditionalClass';
import styles from '../check.module.scss';

export function Checkbox(props: CheckboxProps) {
  const {
    checked,
    children,
    color,
    dark,
    disabled,
    onChange,
    ...other
  } = props;

  const ID = other.id ?? generateKey();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!disabled && onChange) onChange(e);
  }

  function handleClick() {
    const input: HTMLInputElement = document.querySelector(`#${ID}`)!;
    input.click();
  }

  return (
    <div className={cls([styles.checkWrapper, dark && global.dark])}>
      <div className={cls([styles.check, styles.box])} onClick={handleClick}>
        <input type={'checkbox'} checked={checked} onChange={handleChange} id={ID} disabled={disabled} {...other}/>
        <div className={cls([styles.checkmark])} style={disabled ? undefined : {backgroundColor: color}}/>
      </div>

      {children &&
        <label htmlFor={ID} className={`${global.fontMedium} ${styles.label}`}>
          {children}
        </label>
      }
    </div>
  );
}