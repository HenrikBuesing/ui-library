import type {InputDecoratorProps, InternalDecoratorProps} from './types';
import global from '../common/styles/global.module.scss';
import cls from '@utils/conditionalClass';
import style from './input.module.scss';
import React, {type FC} from 'react';

function InputDecoratorInternal(props: InternalDecoratorProps) {
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
        disabled={props.disabled}
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

export const InputDecorator = InputDecoratorInternal as FC<InputDecoratorProps>;