import React, {ComponentPropsWithoutRef} from 'react';
import './checkbox.scss';

interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
  checked     : boolean;
  label       : string;
  onCheck     : (value: boolean) => void;
  checkColor? : string;
}

export function CustomCheckBox(props: ICustomCheckbox) {
  const {
    checkColor,
    checked,
    onCheck,
    label,
    ...checkProps
  } = props;

  return (
    <>
      <div className={'uil-check-wrapper'}>
        <label className={'uil-checkbox'}>
          <input type={'checkbox'} checked={checked} onChange={() => {onCheck(!checked)}} {...checkProps}/>
          <div className={'uil-checkmark'} style={{backgroundColor: checkColor}}/>
        </label>

        <span>{label}</span>
      </div>
    </>
  );
}