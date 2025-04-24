import React, {isValidElement, useEffect, useRef, useState} from 'react';
import global from '../../common/styles/global.module.scss';
import {Notification} from '../../notification';
import getAlignment from '../util/alignment';
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
  const [isOpen, setIsOpen] = useState(false);

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

  function setAlignment(){
    if (!alignment) return;

    return getAlignment(alignment);
  }

  return isOpen ?
    <div
      className={cls([
        styles.popup,
        global.fontMedium,
        dark && global.dark,
        !isNotification && styles.content,
        alignment && styles.position,
        setAlignment()
      ])}
      ref={ref}
      id={id}
    >
      <div role={'status'}>{children}</div>
    </div> : null;
}