import React, {isValidElement, useEffect, useMemo, useRef, useState} from 'react';
import global from '../../common/styles/global.module.scss';
import {Notification} from '../../notification';
import cls from '@utils/conditionalClass';
import styles from '../popup.module.scss';
import type {ToastProps} from './types';

export function Toast(props: ToastProps) {
  const {
    alignment,
    children,
    dark = false,
    id,
    onClose,
    open,
    timeout,
  } = props;

  const isNotification = isValidElement(children) && children.type === Notification;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    let fadeTimer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;
    
    if (open) {
      setIsOpen(true);

      fadeTimer = setTimeout(() => {
        if (ref.current) ref.current.classList.add(styles.fadeOut);

        removeTimer = setTimeout(() => {
          setIsOpen(false);
          onClose?.();
        }, 500);
      }, timeout);
    } else {
      setIsOpen(false);
    }
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    }
  }, [open, timeout, onClose]);

  const alignmentClasses = useMemo(() => {
    if (!alignment) return [null];

    const h = alignment.horizontal, v = alignment.vertical;

    return h === 'center' && v === 'center' ? [styles.centerXY] : [
      h === 'center' ? styles.centerX : styles[h],
      v === 'center' ? styles.centerY : styles[v]
    ];
  }, [alignment]);

  return (
    <>
      {isOpen &&
        <div
          className={cls([
            styles.popup,
            global.fontMedium,
            dark && global.dark,
            !isNotification && styles.content,
            alignment && styles.position,
            ...alignmentClasses,
          ])}
          ref={ref}
          id={id}
        >
          <div role={'status'}>{children}</div>
        </div>
      }
    </>
  );
}