import global from '../common/styles/global.module.scss';
import {InputDecorator} from './inputDecorator';
import generateKey from '@utils/generateKey';
import React, {isValidElement} from 'react';
import cls from '@utils/conditionalClass';
import type {InputProps} from './types';
import styles from './input.module.scss';

export function Input(props: Omit<InputProps, 'placeholder'>) {
  const {
    children,
    dark,
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

  return (
    <div className={cls([styles.inputField, dark && global.dark])}>
      <div className={cls([styles.inputWrapper, variant === 'basic' ? styles.basic : styles.outlined, error && styles.error])}>
        <input
          id={ID}
          className={`${styles.input} ${global.fontMedium}`}
          placeholder={''}
          required={required}
          {...inputProps}
          aria-describedby={helpId}
        />

        {children && children}

        <fieldset className={styles.fieldset} aria-hidden>
          <legend className={styles.legend}>
            <span className={styles.labelText}>{label}</span>
            {required && <span className={`${styles.labelText} ${styles.asterisk}`} aria-hidden>*</span>}
          </legend>
        </fieldset>

        <label htmlFor={ID} className={styles.label}>
          <span className={styles.labelText}>{label}</span>
          {required && <span className={`${styles.labelText} ${styles.asterisk}`} aria-hidden>*</span>}
        </label>
      </div>

      {helpText && <div className={cls([styles.helpText, error && styles.error])} id={helpId}>{helpText}</div>}
    </div>
  );
}