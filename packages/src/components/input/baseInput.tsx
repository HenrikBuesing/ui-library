import React, {ComponentPropsWithoutRef} from 'react';
import {Icon} from 'components/icon/icon';

export interface IBaseInput extends ComponentPropsWithoutRef<'input'> {
  label       : string;
  value       : string | number;
  valueChanged: (value: string) => void;
  iconColor?  : string;
  iconSrc?    : string;
  inputColor? : string;
  toggle?     : () => void;
}

export function BaseInput(props: IBaseInput) {
  const {
    iconColor,
    iconSrc,
    inputColor,
    label,
    toggle,
    valueChanged,
    ...inputProps
  } = props;


  return (
    <label className={'uil-input-wrapper'} htmlFor={inputProps.id}>
      <input
        className={'uil-input uil-font-base'}
        onChange={(e) => {valueChanged(e.target.value)}}
        placeholder={label}
        style={{color: inputColor}}
        {...inputProps}
      />

      {iconSrc &&
        <div className={'uil-icon'} onClick={toggle}>
          <Icon type={'svg'} src={iconSrc} width={24} height={24} color={iconColor}/>
        </div>
      }

      <span className={'uil-label uil-font-base'} style={{color: inputColor}}>{label}</span>
    </label>
  );
}