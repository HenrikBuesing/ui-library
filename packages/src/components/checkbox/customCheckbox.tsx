import React, {ComponentPropsWithoutRef, ReactNode} from 'react';
import generateKey from 'utils/generateKey';

interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
  checked    : boolean;
  toggleCheck: (value: boolean) => void;
  checkColor?: string;
  children?  : ReactNode;
  label?     : string;
}

/**
 * @example
 * ```jsx
 * <CustomCheckbox
 *  checked={...}
 *  toggleCheck={...}
 *  label={"Check this checkbox"}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/checkbox).
 */
export function CustomCheckbox(props: ICustomCheckbox) {
  const {
    checkColor,
    checked,
    children,
    toggleCheck,
    label,
    ...checkProps
  } = props;

  const id = generateKey('check');

  return (
    <div className={'uil-check-wrapper'}>
      <div className={'uil-checkbox uil-check'} onClick={() => {toggleCheck(!checked)}}>
        <input type={'checkbox'} checked={checked} onChange={() => {toggleCheck(!checked)}} {...checkProps} id={id}/>
        <div className={'uil-checkmark'} style={{backgroundColor: checkColor}}/>
      </div>

      <label htmlFor={id} className={'uil-check-label'}>
        {children ? children : label}
      </label>
    </div>
  );
}