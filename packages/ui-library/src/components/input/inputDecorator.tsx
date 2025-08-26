import global from '../common/styles/global.module.scss';
import type {InputDecoratorProps} from './types';
import cls from '@utils/conditionalClass';
import style from './input.module.scss';
import React from 'react';

export function InputDecorator(props: InputDecoratorProps) {
  const {
    children,
    onFocus,
    position
  } = props;

  return (
    <div
      className={cls([
        style.decorator,
        global.fontSmall,
        position === 'start' ? style.start : style.end,
        onFocus ? style.onFocus : style.visible
      ])}
    >
      {children}
    </div>
  );
}