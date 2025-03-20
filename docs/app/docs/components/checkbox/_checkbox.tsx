'use client';
import React, {ChangeEvent, useState} from 'react';
import styles from '@/styles/styles.module.scss';
import {Checkbox} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';

export default function DefaultCheck(){
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Checkbox checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)} dark={dark}/>
      <Checkbox defaultChecked dark={dark}/>
      <Checkbox disabled dark={dark}/>
      <Checkbox defaultChecked disabled dark={dark}/>
    </div>
  );
}

export function ChecksContent() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [checked, setChecked] = useState(true);

  return (
    <div className={styles.showcaseWrapper}>
      <Checkbox checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => {setChecked(e.target.checked)}} dark={dark}>
        Checkbox content
      </Checkbox>

      <Checkbox disabled dark={dark}>
        Disabled checkbox content
      </Checkbox>
    </div>
  );
}

export function ChecksColored() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Checkbox color={'red'} defaultChecked dark={dark}/>
      <Checkbox color={'#11aa33'} defaultChecked dark={dark}/>
      <Checkbox color={'#1694d8'} defaultChecked dark={dark}/>
      <Checkbox color={'rgb(181,46,213)'} defaultChecked dark={dark}/>
      <Checkbox color={'rgb(0,0,0)'} defaultChecked disabled dark={dark}/>
    </div>
  )
}