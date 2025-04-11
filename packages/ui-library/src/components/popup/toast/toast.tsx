import global from '../../common/styles/global.module.scss';
import styles from '../popup.module.scss';
import cls from '@utils/conditionalClass';
import type {ToastProps} from './types';
import React, {useEffect, useRef} from 'react';

export function Toast(props: ToastProps) {
  const {
    children,
    dark = false,
    horizontalAlign,
    onClose,
    open,
    timeout,
    type,
    verticalAlign
  } = props;
  
  if (!open) return null;
  
  const ref = useRef<HTMLDivElement | null>(null);

  setTimeout(() => {
    return onClose();
  }, timeout);
  
  useEffect(() => {
    ref.current?.style.setProperty('--top', `${horizontalAlign}px`);
  },[]);
  
  return (
    <div className={cls([styles.popup, styles[verticalAlign], styles[horizontalAlign], styles[type], dark && global.dark])} ref={ref}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}