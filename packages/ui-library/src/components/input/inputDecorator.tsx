import global from '@common/styles/global.module.scss';
import type {InputDecoratorProps} from './types';
import React, {isValidElement} from 'react';
import cls from '@utils/conditionalClass';
import style from './input.module.scss';
import {Icon} from '../icon';

// TODO add click handler
// TODO hover effect when input has value
export function InputDecorator(props: InputDecoratorProps) {
  const {
    children,
    onFocus,
    position
  } = props;

  if (typeof children !== 'string' && (!isValidElement(children) || children.type !== Icon && children.type !== 'img' && children.type !== 'svg')) {
    throw new Error(`<InputDecorator> received an invalid child. Expected a string, <Icon />, <img>, or <svg>, but got: ${isValidElement(children) ? String(children.type) : typeof children}.`);
  }

  return (
    <div className={cls([style.decorator, global.fontSmall, position === 'left' ? style.left : style.right, onFocus ? style.focus : style.visible])}>
      {children}
    </div>
  );
}