import global from '../common/styles/global.module.scss';
import type {InputDecoratorProps} from './types';
import cls from '@utils/conditionalClass';
import style from './input.module.scss';
import React from 'react';

export function InputDecorator(props: InputDecoratorProps) {
  const {
    children,
    onClick,
    onFocus,
    position
  } = props;

  const classNames = cls([
    style.decorator,
    global.fontSmall,
    position === 'start' ? style.start : style.end,
    onFocus ? style.onFocus : style.visible,
    onClick && style.click,
  ]);

  if (onClick) {
    return (
      <button
        className={classNames}
        onMouseDown={(e) => {e.preventDefault()}}
        onClick={onClick}
        type={'button'}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}