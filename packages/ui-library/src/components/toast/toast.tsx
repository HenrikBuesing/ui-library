import global from '../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
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
  const svgRef = useRef<SVGSVGElement>(null);

  useAddAttribution(svgRef);
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
          <svg ref={svgRef} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 384 512'}>
            <path d={'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'}/>
          </svg>
        </button>
      }

      {action && <div>{action}</div>}
    </div>
  );
}