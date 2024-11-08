import React, {ComponentPropsWithoutRef, ReactNode} from 'react';
import generateKey from 'utils/generateKey';
import styles from './checkbox.module.scss';
import global from '../global.module.scss';

interface ICheckBase extends ComponentPropsWithoutRef<'input'> {
  checked    : boolean;
  toggleCheck: (value: boolean) => void;
  color?     : string;
  dark?      : boolean;
}

interface ICheckLabel {
  label    : string;
  children?: never;
}

interface ICheckHTML {
  label?  : never;
  children: ReactNode;
}

type ICheckbox = ICheckBase & (ICheckLabel | ICheckHTML);

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
export function Checkbox(props: ICheckbox) {
  const {
    checked,
    children,
    color,
    dark,
    id,
    label,
    toggleCheck,
    ...checkProps
  } = props;

  const ID = id ?? generateKey('checkbox');

  function handleCheck() {
    if (checkProps.disabled) return;

    toggleCheck(!checked);
  }

  return (
    <div className={styles.uilCheckWrapper}>
      <div className={`uil-checkbox uil-check ${dark? 'uil-dark' : ''}`} onClick={handleCheck}>
        <input type={'checkbox'} checked={checked} onChange={handleCheck} id={ID} {...checkProps}/>
        <div className={`uil-checkmark ${dark ? 'uil-dark' : ''}`} style={{backgroundColor: color}}/>
      </div>

      <label htmlFor={ID} className={`uil-check-label ${dark ? 'uil-dark' : ''}`}>
        {children ? children : label}
      </label>
    </div>
  );
}