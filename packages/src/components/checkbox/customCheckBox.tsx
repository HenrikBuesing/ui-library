import React, {ComponentPropsWithoutRef, ReactNode} from 'react';
import './checkbox.scss';

interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
  checked     : boolean;
  label?      : string;
  onCheck     : (value: boolean) => void;
  checkColor? : string;
  children?   : ReactNode;
}

export function CustomCheckBox(props: ICustomCheckbox) {
  const {
    checkColor,
    checked,
    onCheck,
    label,
    children,
    ...checkProps
  } = props;

  return (
    <>
      <div className={'uil-check-wrapper'}>
        <label className={'uil-checkbox'}>
          <input type={'checkbox'} checked={checked} onChange={() => {onCheck(!checked)}} {...checkProps}/>
          <div className={'uil-checkmark'} style={{backgroundColor: checkColor}}/>
        </label>

        {children ? children : <span>{label}</span>}
      </div>
    </>
  );
}