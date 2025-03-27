import global from '../common/styles/global.module.scss';
import React, {useEffect, useRef} from 'react';
import cls from '@utils/conditionalClass';
import styles from './dialog.module.scss';
import type {DialogProps} from './types';

export function Dialog(props: DialogProps) {
  const {
    ariaModal,
    children,
    dark = false,
    describedby,
    labelledby,
    onCancel,
    open,
    scrollable = false,
    size,
  } = props;
  
  const dialog = useRef<HTMLDialogElement | null>(null);
  
  useEffect(() => {
    if (open) {
      if (!scrollable) {
        document.body.style.paddingRight = '15px';
        document.body.style.overflow = 'hidden';
      }

      dialog.current?.showModal();
    } else {
      if (!scrollable) {
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
      }
      
      dialog.current?.close();
    }
  }, [open]);
  
  return (
    <dialog
      ref={dialog}
      aria-describedby={describedby}
      aria-labelledby={labelledby}
      aria-modal={ariaModal}
      className={cls([styles.dialog, dark && global.dark, size && styles[size]])}
      onCancel={onCancel}
    >
      {children}
    </dialog>
  );
}