import global from '../common/styles/global.module.scss';
import React, {useEffect, useRef} from 'react';
import cls from '@utils/conditionalClass';
import styles from './toast.module.scss';
import type {ToastProps} from './types';

export function Toast(props: ToastProps) {
  const {
    action,
    closeCallback,
    dark = false,
    dismissible,
    id,
    message,
    timeout,
    variant
  } = props;

  const toastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (toastRef.current) toastRef.current.classList.add(styles.fadeIn);
    });

    if (timeout === 'persistent') return;

    let removeTimer: NodeJS.Timeout;

    const fadeTimer = setTimeout(() => {
      if (toastRef.current) toastRef.current.classList.replace(styles.fadeIn, styles.fadeOut);

      removeTimer = setTimeout(() => {
        closeCallback();
      }, 500);
    }, timeout);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [timeout, closeCallback]);

  function handleClose() {
    if (toastRef.current) toastRef.current.classList.replace(styles.fadeIn, styles.fadeOut);

    setTimeout(() => {
      closeCallback();
    }, 500);
  }

  return (
    <div 
      className={cls([styles.toast, variant && styles[variant], global.fontMedium, dark && global.dark])}
      id={id}
      ref={toastRef}
      role={'status'}
    >
      {message}

      {dismissible &&
        <button className={styles.closeButton} onClick={handleClose}>
          <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M64 64a16 16 0 0 1 22 0l170 166L425 64a16 16 0 1 1 23 22L278 256l170 169a16 16 0 1 1-23 23L256 280 86 449a16 16 0 1 1-22-24l169-169L64 86a16 16 0 0 1 0-22'/>
          </svg>
        </button>
      }

      {action && <div>{action}</div>}
    </div>
  );
}