import global from '../../common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import type {WrapperProps} from './types';
import cls from '@utils/conditionalClass';
import styles from '../input.module.scss';
import React from 'react';

// Wrapper component for input & textarea
export default function Wrapper(props: WrapperProps) {
  const {
    children,
    dark,
    error,
    helpText,
    id,
    isTextarea = false,
    label,
    required,
    variant = 'outlined',
  } = props;

  const ID = id ?? generateKey();
  const helpId = helpText ? generateKey() : undefined;
  
  return (
    <div className={cls([styles.inputField, dark && global.dark])}>
      <div className={cls([styles.inputWrapper, variant === 'basic' ? styles.basic : styles.outlined, error && styles.error])}>
        {children}

        <fieldset className={styles.fieldset} aria-hidden>
          <legend className={styles.legend}>
            <span className={styles.labelText}>{label}</span>
            {required && <span className={`${styles.labelText} ${styles.asterisk}`} aria-hidden>*</span>}
          </legend>
        </fieldset>

        <label htmlFor={ID} className={cls([styles.label, isTextarea && styles.textareaLabel])}>
          <span className={styles.labelText}>{label}</span>
          {required && <span className={`${styles.labelText} ${styles.asterisk}`} aria-hidden>*</span>}
        </label>
      </div>

      {helpText && <div className={cls([styles.helpText, error && styles.error])} id={helpId}>{helpText}</div>}
    </div>
  );
} 