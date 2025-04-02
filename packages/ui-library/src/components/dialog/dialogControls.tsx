import type {DialogControlsProps} from './types';
import styles from './dialog.module.scss';
import cls from '@utils/conditionalClass';
import React from 'react';

export function DialogControls(props: DialogControlsProps) {
  const {
    children,
    position = 'end'
  } = props;
  
  return (
    <div className={cls([styles.controls, styles[position]])}>
      {children}
    </div>
  );
}