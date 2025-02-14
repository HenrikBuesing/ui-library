import global from '@common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import type {InputProps} from './types';
import style from './input.module.scss';
// import {useTheme} from '../provider';
import React from 'react';

export function Input(props: InputProps) {
  const {
    children,
    helpText,
    id,
    label,
    variant,
    ...inputProps
  } = props;

  const ID = id ?? generateKey();
  // const {theme} = useTheme(); ${theme === 'dark' ? ` ${global.dark}` : ''} preparation for darkmode refactor

  return (
    <div className={`${style.inputField}`}>
      <div className={`${style.inputWrapper}${variant == 'basic' ? ` ${style.basic}` : ` ${style.outlined}`}`}>
        <input 
          id={ID} 
          className={`${style.input} ${global.fontMedium}${children ? ` ${style.iconInput}` : ''}`} 
          placeholder={''} 
          {...inputProps}
        />
        
        <fieldset className={style.fieldset} aria-hidden={true}>
          <legend className={style.legend}>
            <span className={style.labelText}>{label}</span>
          </legend>
        </fieldset>

        <label htmlFor={ID} className={style.label}>
          <span className={style.labelText}>{label}</span>
        </label>

        {children && <div className={style.icon}>{children}</div>}
      </div>

      {helpText && <div className={style.helper}>{helpText}</div>}
    </div>
  );
}