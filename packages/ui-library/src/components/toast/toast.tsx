import React, {useEffect, useRef, useImperativeHandle, forwardRef, type ForwardedRef} from 'react';
import {fadeDuration, type ToastProps, type ToastRef} from './types';
import global from '../common/styles/global.module.scss';
import addAttribution from '@utils/addAttribution';
import cls from '@utils/conditionalClass';
import styles from './toast.module.scss';

function ToastComponent(props: ToastProps, ref: ForwardedRef<ToastRef>) {
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
  const closingRef = useRef(false);

  function close() {
    if (closingRef.current) return;

    closingRef.current = true;

    toastRef.current?.classList.replace(styles.fadeIn, styles.fadeOut);

    setTimeout(closeCallback, fadeDuration);
  }

  useImperativeHandle(ref, () => ({close}));

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      toastRef.current?.classList.add(styles.fadeIn);
    });

    if (timeout === 'persistent') return () => clearTimeout(fadeInTimer);

    const fadeTimer = setTimeout(close, timeout);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeTimer);
    };
  }, [timeout]);

  return (
    <div
      className={cls([styles.toast, variant && styles[variant], global.fontMedium, dark && global.dark])}
      id={id}
      ref={toastRef}
      role={'status'}
    >
      {message}

      {action && <div>{action}</div>}

      {dismissible &&
        <button className={styles.closeButton} onClick={close} type={'button'}>
          <svg ref={el => addAttribution(el)} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 384 512'}>
            <path
              d={'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'}/>
          </svg>
        </button>
      }
    </div>
  );
}

export const Toast = forwardRef(ToastComponent);