import React, {type ComponentPropsWithoutRef, type ReactNode} from 'react';
import generateKey from 'utils/generateKey';
import style from './checkbox.module.scss';
import check from '../check.module.scss';
import global from '@common/global.module.scss';

interface Checkbox extends ComponentPropsWithoutRef<'input'> {
  checked    : boolean;
  toggleCheck: (value: boolean) => void;
  color?     : string;
  dark?      : boolean;
}

interface CheckLabel {
  label    : string;
  children?: never;
}

interface CheckHTML {
  label?  : never;
  children: ReactNode;
}

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
export function Checkbox(props: Checkbox & (CheckLabel | CheckHTML)) {
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
      <div className={`${style.checkbox} ${cursorClass} ${check.check} ${dark ? check.dark : ''}`} onClick={handleCheck}>
        <input type={'checkbox'} checked={checked} disabled={disabled} onChange={handleCheck} id={ID} {...other}/>
        <div className={`${check.checkmark} ${dark ? check.dark : ''}`} style={{backgroundColor: color}}/>
      </div>

      <label htmlFor={ID} className={`${cursorClass} ${style.checkLabel} ${dark ? style.dark : ''}`}>
        {children ? children : label}
      </label>
    </div>
  );
}