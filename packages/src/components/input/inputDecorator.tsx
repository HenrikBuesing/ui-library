import global from '@common/styles/global.module.scss';
import type {InputDecoratorProps} from './types';
import style from './input.module.scss';
import React from 'react';

export function InputDecorator(props: InputDecoratorProps) {
  const {
    children,
    onFocus,
    position
  } = props;

  return (
    <div className={`${style.decorator} ${global.fontSmall}${position === 'left' ? ` ${style.left}` : ` ${style.right}`} ${onFocus ? style.focus : style.visible}`}>
      {children}
    </div>
  );
}