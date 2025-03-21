import global from '@common/styles/global.module.scss';
import React, {type ChangeEvent} from 'react';
import generateKey from '@utils/generateKey';
import cls from '@utils/conditionalClass';
import styles from '../check.module.scss';
import type {RadioProps} from './types';

export function Radio(props: RadioProps) {
  const {
    checked,
    children,
    color,
    dark,
    disabled,
    id,
    name,
    onChange,
    value,
    ...other
  } = props;

  const ID = id ?? generateKey();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!disabled && onChange) onChange(e);
  }

  function handleClick() {
    const input: HTMLInputElement = document.querySelector(`#${ID}`)!;
    input.click();
  }

  return (
    <div className={cls([styles.checkWrapper, dark && global.dark])}>
      <div className={`${styles.check} ${styles.radio}`} onClick={() => {handleClick()}}>
        <input
          id={ID}
          name={name}
          type={'radio'}
          value={value}
          checked={checked}
          onChange={(e) => {handleChange(e)}}
          disabled={disabled}
          tabIndex={disabled ? -1 : (other.tabIndex ?? undefined)}
          {...other}
        />

        <div className={`${styles.checkmark} ${styles.radioCheck}`} style={disabled ? undefined : {backgroundColor: color}}/>
      </div>

      {children && <label htmlFor={ID} className={`${global.fontMedium} ${styles.label}`}>{children}</label>}
    </div>
  );
}