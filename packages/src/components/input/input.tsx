import global from '@common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import type {InputProps} from './types';
import style from './input.module.scss';
// import {useTheme} from '../provider';
import React from 'react';

export function Input(props: Omit<InputProps, 'placeholder'>) {
  const {
    children,
    error,
    helpText,
    id,
    label,
    variant,
    ...inputProps
  } = props;

  const ID = id ?? generateKey();
  const helpId = helpText ? generateKey() : undefined;
  // const {theme} = useTheme(); ${theme === 'dark' ? ` ${global.dark}` : ''} preparation for darkmode refactor

  return (
    <div className={`${style.inputField}`}>
      <div className={`${style.inputWrapper}${variant == 'basic' ? ` ${style.basic}` : ` ${style.outlined}`}${error ? ` ${style.error}` : ''}`}>
        <input
          id={ID}
          className={`${style.input} ${global.fontMedium}`}
          placeholder={''}
          {...inputProps}
          aria-describedby={helpId}
        />

        {children && children}

        <fieldset className={style.fieldset} aria-hidden>
          <legend className={style.legend}>
            <span className={style.labelText}>{label}</span>
            <span className={`${style.labelText} ${style.asterisk}`} aria-hidden>*</span>
          </legend>
        </fieldset>

        <label htmlFor={ID} className={style.label}>
          <span className={style.labelText}>{label}</span>
          <span className={`${style.labelText} ${style.asterisk}`} aria-hidden>*</span>
        </label>
      </div>

      {helpText && <div className={`${style.helpText}${error ? ` ${style.error}` : ''}`} id={helpId}>{helpText}</div>}
    </div>
  );
}