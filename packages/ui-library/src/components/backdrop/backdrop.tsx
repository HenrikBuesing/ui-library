import styles from './backdrop.module.scss';
import type {BackdropProps} from './types';
import {createPortal} from 'react-dom';
import React from 'react';

export function Backdrop(props: BackdropProps) {
  const {
    children,
    onClick,
    open,
    zIndex
  } = props;

  if (!open) return null;
  
  return createPortal(
    <div className={styles.backdrop} style={{zIndex: zIndex}} onClick={onClick}>
      {children}
    </div>,
    document.body
  );
}