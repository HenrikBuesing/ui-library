import global from '@common/styles/global.module.scss';
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
    disableEscapeKey,
    labelledby,
    onCancel,
    onClickBackdrop,
    open,
    scrollable = false,
    size,
  } = props;

  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    dialog.current?.addEventListener('keydown', handleKeydown);
    dialog.current?.addEventListener('mousedown', handleClickBackdrop);
    
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

    return () => {
      dialog.current?.removeEventListener('keydown', handleKeydown);
      dialog.current?.removeEventListener('mousedown', handleClickBackdrop);
    };
  }, [open]);

  function handleKeydown(event: KeyboardEvent) {
    if (disableEscapeKey && event.key === 'Escape') {
      event.preventDefault();
    }
  }

  function handleClickBackdrop(event: MouseEvent) {
    if (onClickBackdrop && event.target === event.currentTarget) {
      onClickBackdrop();
    }
  }

  return (
    <dialog
      ref={dialog}
      aria-describedby={describedby}
      aria-labelledby={labelledby}
      aria-modal={ariaModal}
      className={cls([styles.dialog, dark && global.dark, size && styles[size]])}
      onCancel={onCancel}
      role={ariaModal ? 'alertdialog' : 'dialog'}
    >
      {children}
    </dialog>
  );
}