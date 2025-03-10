'use client';
import styles from '@/styles/styles.module.scss';
import {Checkbox} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function DefaultCheck(){
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [checked, setChecked] = useState(true);

  return (
    <div className={styles.showcaseWrapper}>
      <Checkbox checked={checked} onChange={setChecked} dark={dark}/>
      <Checkbox disabled dark={dark}/>
      <Checkbox checked disabled dark={dark}/>
    </div>
  );
}