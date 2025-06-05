'use client';
import styles from '@/styles/styles.module.scss';
import {Switch} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultSwitch() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Switch dark={dark}/>
      <Switch dark={dark} disabled/>
      <Switch defaultChecked dark={dark}/>
      <Switch defaultChecked dark={dark} disabled/>
    </div>
  );
}

export function SwitchSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Switch dark={dark} size={'small'}/>
      <Switch dark={dark} size={'medium'}/>
      <Switch dark={dark} size={'large'}/>
    </div>
  );
}

export function ColorSwitch() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Switch defaultChecked dark={dark} color={'info'}/>
      <Switch defaultChecked dark={dark} color={'success'}/>
      <Switch defaultChecked dark={dark} color={'warning'}/>
      <Switch defaultChecked dark={dark} color={'error'}/>
      <Switch defaultChecked dark={dark} color={'mediumpurple'}/>
      <Switch defaultChecked dark={dark} color={'#0f7488'}/>
    </div>
  );
}