import global from '../common/styles/global.module.scss';
import type {DialogTitleProps} from './types';
import styles from './dialog.module.scss';
import cls from '@utils/conditionalClass';
import React from 'react';

export function DialogTitle(props: DialogTitleProps) {
  const {
    children,
    color,
    id
  } = props;
  
  return (
    <div className={cls([styles.title, color && styles[color], global.fontLarge])} id={id}>
      {children}
    </div>
  );
}