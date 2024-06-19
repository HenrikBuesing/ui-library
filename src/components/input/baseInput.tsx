import React, {ComponentPropsWithoutRef} from 'react';
import {SVG} from 'components/images/svgIcon';
import './input.scss';

export interface IBaseInput extends ComponentPropsWithoutRef<'input'> {
  label       : string;
  value       : string;
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
        className={'uil-input'}
        onChange={(e) => valueChanged(e.target.value)}
        placeholder={label}
        style={{color: inputColor}}
        {...inputProps}
      />

      {iconSrc &&
        <div className={'uil-icon'} onClick={toggle}>
          <SVG src={iconSrc} width={24} height={24} color={iconColor}/>
        </div>
      }

      <span className={'uil-label'} style={{color: inputColor}}>{label}</span>
    </label>
  );
}