import global from '@common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import type {CheckboxProps} from './types';
import cls from '@utils/conditionalClass';
import check from '../check.module.scss';
import React, {type ChangeEvent} from 'react';

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
    const input = document.querySelector(`#${ID}`) as HTMLInputElement;
    input.click();
  }

  return (
    <div className={cls([check.checkWrapper, dark && global.dark])}>
      <div className={cls([check.check, check.box])} onClick={handleClick}>
        <input type={'checkbox'} checked={checked} onChange={handleChange} id={ID} disabled={disabled} {...other}/>
        <div className={cls([check.checkmark])} style={{backgroundColor: color}}/>
      </div>

      {children &&
        <label htmlFor={ID} className={global.fontMedium}>
          {children}
        </label>
      }
    </div>
  );
}