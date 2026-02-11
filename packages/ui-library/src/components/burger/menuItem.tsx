import styles from './burger.module.scss';
import type {MenuProps} from './types';
import React from 'react';

export function MenuItem(props: MenuProps) {
  return (
    <div className={styles.menuItem}>{props.children}</div>
  );
}