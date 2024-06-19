import React, {ComponentPropsWithoutRef} from 'react';
import './input.scss';

interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
  checked     : boolean;
  label       : string;
  onCheck     : (value: boolean) => void;
}

export function CustomCheckBox(props: ICustomCheckbox) {
  const {
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
          <div className={'uil-checkmark'}/>
        </label>

        <span>{label}</span>
      </div>
    </>
  );
}