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
    icon,
    type,
    variant
  } = props;
  
  return (
    <div className={cls([styles.notification, styles[variant], type && styles[type], dark && global.dark])}>
      {icon &&
        <div className={styles.icon}>
          {icon}
        </div>
      }
      
      <div className={global.fontMedium}>
        {children}
      </div>

      {action &&
        <div className={styles.action}>
          {action}
        </div>
      }
    </div>
  );
}