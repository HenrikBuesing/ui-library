import global from '@common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import styles from './checkbox.module.scss';
import type {CheckboxProps} from './types';
import cls from '@utils/conditionalClass';
import check from '../check.module.scss';
import React from 'react';

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
    id,
    label,
    toggleCheck,
    ...other
  } = props;

  const ID = id ?? generateKey();

  function handleCheck() {
    if (!disabled) toggleCheck(!checked);
  }

  return (
    <div className={`${check.checkWrapper} ${global.fontMedium}`}>
      <div className={cls([styles.checkbox, check.check, disabled ? global.notAllowed : global.pointer, dark && check.dark])} onClick={handleCheck}>
        <input type={'checkbox'} checked={checked} disabled={disabled} onChange={handleCheck} id={ID} {...other}/>
        <div className={cls([check.checkmark, dark && check.dark])} style={{backgroundColor: color}}/>
      </div>
      <label htmlFor={ID} className={cls([styles.checkLabel, dark && styles.dark])}>
        {children ?? label}
      </label>
    </div>
  );
}