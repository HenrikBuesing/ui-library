import global from '../../common/styles/global.module.scss';
import React, {isValidElement, useRef} from 'react';
import {Notification} from '../../notification';
import cls from '@utils/conditionalClass';
import styles from '../popup.module.scss';
import type {ToastProps} from './types';

export function Toast(props: ToastProps) {
  const {
    alignment,
    children,
    dark = false,
    onClose,
    open,
    timeout,
  } = props;

  if (!open) return null;

  const isNotification = isValidElement(children) && children.type === Notification;
  const ref = useRef<HTMLDivElement | null>(null);

  setTimeout(() => {
    return onClose();
  }, timeout);

  function setAlignment() {
    const h = alignment.horizontal, v = alignment.vertical;
    
    return h === 'center' && v === 'center' ? [styles.centerXY] : [
      h === 'center' ? styles.centerX : styles[h],
      v === 'center' ? styles.centerY : styles[v]
    ];
  }
  
  return (
    <div 
      className={cls([
        styles.popup,
        global.fontMedium,
        dark && global.dark,
        !isNotification && styles.content,
        ...setAlignment(),
      ])}
      ref={ref}
    >
      <div role={'status'}>{children}</div>
    </div>
  );
}