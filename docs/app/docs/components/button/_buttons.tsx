'use client';
import {useTheme} from 'nextra-theme-docs';
import {Button} from '@hbuesing/ui-library';
import React from 'react';
import styles from '@/styles/styles.module.scss';

export default function DefaultButtons(){
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showCaseWrapper}>
      <Button variant={'filled'} dark={dark}>Filled</Button>
      <Button variant={'outlined'} dark={dark}>Outlined</Button>
      <Button variant={'text'} dark={dark}>Text</Button>
    </div>
  );
}