import global from '../common/styles/global.module.scss';
import React, {type CSSProperties} from 'react';
import type {TextareaProps} from './types';
import cls from '@utils/conditionalClass';
import Wrapper from './internal/wrapper';
import styles from './input.module.scss';
import {useStableId} from '@utils/getId';

export function Textarea(props: Omit<TextareaProps, 'placeholder'>) {
  const {
    dark = false,
    error = false,
    helpText,
    id,
    label,
    resize = 'both',
    required,
    ...inputProps
  } = props;

  const ID = id ?? useStableId();
  const helpId = helpText ? useStableId() : undefined;
  const style = {
    '--uil-textarea-resize': resize,
    ...inputProps.style
  } as CSSProperties;

  return (
    <Wrapper dark={dark} error={error} helpId={helpId} helpText={helpText} id={ID} label={label} required={required} isTextarea>
      <textarea
        id={ID}
        className={cls([styles.input, styles.textarea, global.fontMedium])}
        placeholder={''}
        required={required}
        {...inputProps}
        aria-describedby={helpId}
        style={style}
      />
    </Wrapper>
  );
}