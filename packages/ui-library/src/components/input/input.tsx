import global from '../common/styles/global.module.scss';
import {InputDecorator} from './inputDecorator';
import React, {isValidElement} from 'react';
import {useStableId} from '@utils/getId';
import Wrapper from './internal/wrapper';
import styles from './input.module.scss';
import type {InputProps} from './types';

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

  const ID = id ?? useStableId();
  const helpId = helpText ? useStableId() : undefined;

  return (
    <Wrapper dark={dark} error={error} helpId={helpId} helpText={helpText} id={ID} label={label} required={required} variant={variant}>
      <input
        id={ID}
        className={`${styles.input} ${global.fontMedium}`}
        placeholder={''}
        required={required}
        {...inputProps}
        aria-describedby={helpId}
      />

      {children}
    </Wrapper>
  );
}