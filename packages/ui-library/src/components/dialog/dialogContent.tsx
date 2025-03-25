import type {DialogContentProps} from './types';
import styles from './dialog.module.scss';
import cls from '@utils/conditionalClass';
import React from 'react';

export function DialogContent(props: DialogContentProps) {
  const {
    children,
    divider = false,
    id
  } = props;
  
  return (
    <div className={cls([styles.content, divider && styles.divider])} id={id}>
      {children}
    </div>
  );
}