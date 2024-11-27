import React from 'react';
import generateKey from 'utils/generateKey';
import type {CheckboxProps} from "./types";
import global from '@common/styles/global.module.scss';
import styles from './checkbox.module.scss';
import check from '../check.module.scss';

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
  const cursorClass = disabled ? global.notAllowed : global.pointer;

  function handleCheck() {
    if (!disabled) toggleCheck(!checked);
  }

  return (
    <div className={`${check.checkWrapper} ${global.fontMedium}`}>
      <div className={`${styles.checkbox} ${cursorClass} ${check.check}${dark ? ` ${check.dark}` : ''}`} onClick={handleCheck}>
        <input type={'checkbox'} checked={checked} disabled={disabled} onChange={handleCheck} id={ID} {...other}/>
        <div className={`${check.checkmark}${dark ? ` ${check.dark}` : ''}`} style={{backgroundColor: color}}/>
      </div>

      <label htmlFor={ID} className={`${cursorClass} ${styles.checkLabel} ${dark ? styles.dark : ''}`}>
        {children ?? label}
      </label>
    </div>
  );
}