import global from '@common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import type {CheckboxProps} from './types';
import cls from '@utils/conditionalClass';
import check from '../check.module.scss';
import React from 'react';

// TODO update test cases

/**
 * @example
 * ```jsx
 * <Checkbox
 *  checked={...}
 *  toggleCheck={...}
 *  label={"Toggle checkbox"}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/checkbox).
 */
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

  const ID = other.id ?? (children ? generateKey() : undefined);

  function handleClick() {
    if (!disabled) onChange(!checked);
  }

  return (
    <div className={cls([check.checkWrapper, dark && global.dark])}>
      <div className={cls([check.check, check.box])} onClick={handleClick}>
        <input type={'checkbox'} checked={checked} onChange={handleClick} id={ID} disabled={disabled} {...other}/>
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