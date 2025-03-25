import global from '@common/styles/global.module.scss';
import cls from '@utils/conditionalClass';
import styles from './dialog.module.scss';
import type {DialogProps} from './types';
import {createPortal} from 'react-dom';
import {Backdrop} from '../backdrop';
import React from 'react';

export function Dialog(props: DialogProps) {
  const {
    ariaModal,
    children,
    dark = false,
    describedby,
    labelledby,
    onClickBackdrop,
    open,
    scroll = false,
    width,
    zIndex
  } = props;

  if (!open) {
    if (typeof document !== 'undefined') {
      document.body.style.paddingRight = 'initial';
      document.body.style.overflow = 'initial';
    }
    return null;
  }

  if (!scroll) {
    document.body.style.paddingRight = '15px';
    document.body.style.overflow = 'hidden';
  }

  return createPortal(
    <>
      <Backdrop open={open} onClick={onClickBackdrop} zIndex={zIndex}/>
      
      <dialog
        aria-describedby={describedby}
        aria-labelledby={labelledby}
        aria-modal={ariaModal}
        autoFocus
        className={cls([styles.dialog, dark && global.dark, width && styles[width]])}
        open
        style={{zIndex: zIndex && zIndex + 1}}
      >
        {children}
      </dialog>
    </>,
    document.body
  );
}