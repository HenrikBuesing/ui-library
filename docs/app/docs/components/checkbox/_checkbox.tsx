'use client';
import styles from '@/styles/styles.module.scss';
import {Checkbox} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React, {ChangeEvent, useState} from 'react';

export default function DefaultCheck(){
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [checked, setChecked] = useState(true);

  return (
    <div className={styles.showcaseWrapper}>
      <Checkbox checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)} dark={dark}/>
      <Checkbox disabled dark={dark}/>
      <Checkbox defaultChecked disabled dark={dark}/>
    </div>
  );
}