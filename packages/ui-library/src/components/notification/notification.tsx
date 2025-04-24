import global from '../common/styles/global.module.scss';
import styles from './notification.module.scss';
import type {NotificationProps} from './types';
import cls from '@utils/conditionalClass';
import React from 'react';

export function Notification(props: NotificationProps) {
  const {
    action,
    children,
    dark,
    onClose,
    type,
    variant
  } = props;

  return (
    <div className={cls([styles.notification, styles[variant], styles[type], dark && global.dark])}>
      <div className={global.fontMedium}>{children}</div>

      {action && <div className={styles.action}>{action}</div>}

      {onClose &&
        <button className={cls([styles.closeButton, styles[variant]])} onClick={onClose}>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 64a16 16 0 0 1 22 0l170 166L425 64a16 16 0 1 1 23 22L278 256l170 169a16 16 0 1 1-23 23L256 280 86 449a16 16 0 1 1-22-24l169-169L64 86a16 16 0 0 1 0-22"/>
          </svg>
        </button>
      }
    </div>
  );
}