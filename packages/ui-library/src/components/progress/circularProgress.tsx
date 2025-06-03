import global from '../common/styles/global.module.scss';
import styles from './progress.module.scss';
import type {ProgressProps} from './types';
import {isStatus} from '@utils/checkTypes';
import cls from '@utils/conditionalClass';
import React from 'react';

export function CircularProgress(props: ProgressProps) {
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
      className={cls([styles.circularProgress, typeof value !== 'number' && styles.indeterminate, dark && global.dark])}
      role={'progressbar'}
      style={{width: size, height: size}} 
    >
      <svg viewBox={`0 0 40 40`}>
        <circle 
          className={cls([styles.spinner, statusColor && styles[color]])}
          cx={20}
          cy={20}
          fill={'none'}
          r={19}
          stroke={statusColor ? undefined : color}
          strokeDasharray={typeof value === 'number' ? '120' : undefined}
          strokeDashoffset={typeof value === 'number' ? `${1.2 * (100 - value)}px` : undefined}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}