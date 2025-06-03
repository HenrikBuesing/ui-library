import global from '../common/styles/global.module.scss';
import styles  from './progress.module.scss';
import type {ProgressProps} from './types';
import {isStatus} from '@utils/checkTypes';
import cls from '@utils/conditionalClass';
import React from 'react';

export function LinearProgress(props: ProgressProps) {
  const {
    color = 'info',
    dark,
    size,
    value
  } = props;

  if (typeof value === 'number' && (value > 100 || value < 0)) {
    throw new Error(`invalid value. Expected 100 >= value >= 0, but got ${value}`);
  }

  const statusColor = isStatus(color);
  
  return (
    <div
      aria-valuenow={value}
      className={cls([styles.linearProgress, statusColor ? styles[color] : styles.custom, dark && global.dark])}
      role={'progressbar'}
      style={{height: size}}
    >
      <div 
        className={cls([styles.progressBar, typeof value !== 'number' && styles.first, statusColor && styles[color]])}
        style={{backgroundColor: statusColor ? undefined : color, right: typeof value === 'number' ? `${100 - value}%` : undefined}}
      />

      {typeof value !== 'number' &&
        <div
          className={cls([styles.progressBar, styles.second, statusColor && styles[color]])}
          style={{backgroundColor: statusColor ? undefined : color}}
        />
      }
    </div>
  );
}