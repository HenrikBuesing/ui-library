import global from '../common/styles/global.module.scss';
import type {CircularProgressProps} from './types';
import type {Status} from '../common/types';
import styles from './progress.module.scss';
import cls from '@utils/conditionalClass';
import React from 'react';

export function CircularProgress(props: CircularProgressProps) {
  const {
    color = 'info',
    dark,
    size = 30,
    value
  } = props;
  
  if (value && (value > 100 || value < 0)) {
    throw new Error(`invalid value. Expected 100 >= value >= 0, but got ${value}`);
  }

  const strokeDasharray = value ? `${120 * (value / 100)}px, 120px` : 'initial';
  const isCustomColor = (color !== 'info' && color !== 'success' && color !== 'warning' && color !== 'error');

  return (
    <div
      aria-valuenow={value}
      className={cls([styles.circularProgress, !value && styles.indeterminate, dark && global.dark])}
      role={'progressbar'}
      style={{width: size, height: size}} 
    >
      <svg viewBox={`0 0 40 40`}>
        <circle 
          className={cls([styles.spinner, !isCustomColor && styles[color as Status]])}
          cx={20}
          cy={20}
          fill={'none'}
          r={19}
          stroke={isCustomColor ? color : undefined}
          strokeDasharray={strokeDasharray}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}