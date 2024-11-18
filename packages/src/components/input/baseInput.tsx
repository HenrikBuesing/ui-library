import React, {ComponentPropsWithoutRef} from 'react';
import {Icon} from 'components/icon/icon';
import style from './input.module.scss';
import global from '../global.module.scss';

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
    <label className={style.inputWrapper} htmlFor={inputProps.id}>
      <input
        className={`${style.input} ${global.fontMedium}`}
        onChange={(e) => {valueChanged(e.target.value)}}
        placeholder={label}
        style={{color: inputColor}}
        {...inputProps}
      />

      {iconSrc &&
        <div className={style.icon} onClick={toggle}>
          <Icon type={'svg'} src={iconSrc} width={24} height={24} color={iconColor}/>
        </div>
      }

      <span className={`${style.label} ${global.fontMedium}`} style={{color: inputColor}}>{label}</span>
    </label>
  );
}