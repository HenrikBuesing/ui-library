import global from '@common/styles/global.module.scss';
import type {InputDecoratorProps} from './types';
import cls from '@utils/conditionalClass';
import style from './input.module.scss';
import React from 'react';

export function InputDecorator(props: InputDecoratorProps) {
  const {
    children,
    onFocus,
    onClick,
    position
  } = props;

  return (
    <div
      className={cls([
        style.decorator,
        global.fontSmall,
        position === 'left' ? style.left : style.right,
        onFocus ? style.focus : style.visible
      ])}
      onClick={onClick}
    >
      {children}
    </div>
  );
}