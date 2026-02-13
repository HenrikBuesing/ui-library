import styles from './burger.module.scss';
import type {MenuProps} from './types';
import React from 'react';

export function MenuHeader(props: MenuProps) {
  return (
    <div className={styles.menuHeader}>{props.children}</div>
  );
}