import global from '../common/styles/global.module.scss';
import generateKey from '@utils/generateKey';
import type {TextareaProps} from './types';
import cls from '@utils/conditionalClass';
import Wrapper from './internal/wrapper';
import styles from './input.module.scss';
import React from 'react';

export function Textarea(props: Omit<TextareaProps, 'placeholder'>) {
  const {
    dark,
    error,
    helpText,
    id,
    label,
    resize = 'both',
    required,
    ...inputProps
  } = props;

  const ID = id ?? generateKey();
  const helpId = helpText ? generateKey() : undefined;

  return (
    <Wrapper dark={dark} error={error} helpText={helpText} id={ID} label={label} required={required} isTextarea>
      <textarea
        id={ID}
        className={cls([styles.input, styles.textarea, styles[resize], global.fontMedium])}
        placeholder={''}
        required={required}
        {...inputProps}
        aria-describedby={helpId}
      />
    </Wrapper>
  );
}