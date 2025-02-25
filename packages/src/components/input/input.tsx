import global from '@common/styles/global.module.scss';
import {InputDecorator} from './inputDecorator';
import generateKey from '@utils/generateKey';
import React, {isValidElement} from 'react';
import cls from '@utils/conditionalClass';
import type {InputProps} from './types';
import style from './input.module.scss';
// import {useTheme} from '../provider';

export function Input(props: Omit<InputProps, 'placeholder'>) {
  const {
    children,
    error,
    helpText,
    id,
    label,
    required,
    variant,
    ...inputProps
  } = props;

  if (children && (!isValidElement(children) || children.type !== InputDecorator)) {
    throw new Error(`<Input> received an invalid child. Expected <InputDecorator />, but got: ${isValidElement(children) ? String(children.type) : typeof children}.`);
  }

  const ID = id ?? generateKey();
  const helpId = helpText ? generateKey() : undefined;
  // const {theme} = useTheme(); ${theme === 'dark' ? ` ${global.dark}` : ''} preparation for darkmode refactor

  return (
    <div className={`${style.inputField}`}>
      <div className={cls([style.inputWrapper, variant === 'basic' ? style.basic : style.outlined, error && style.error])}>
        <input
          id={ID}
          className={`${style.input} ${global.fontMedium}`}
          placeholder={''}
          required={required}
          {...inputProps}
          aria-describedby={helpId}
        />

        {children && children}

        <fieldset className={style.fieldset} aria-hidden>
          <legend className={style.legend}>
            <span className={style.labelText}>{label}</span>
            {required && <span className={`${style.labelText} ${style.asterisk}`} aria-hidden>*</span>}
          </legend>
        </fieldset>

        <label htmlFor={ID} className={style.label}>
          <span className={style.labelText}>{label}</span>
          {required && <span className={`${style.labelText} ${style.asterisk}`} aria-hidden>*</span>}
        </label>
      </div>

      {helpText && <div className={cls([style.helpText, error && style.error])} id={helpId}>{helpText}</div>}
    </div>
  );
}