'use client';
import styles from '@/styles/styles.module.scss';
import {Textarea} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultTextarea() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Textarea label={'Textarea'} rows={1} dark={dark}/>
    </div>
  );
}

export function TextareaResize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Textarea label={'Textarea'} rows={5} cols={50} resize={'none'} dark={dark}/>
    </div>
  );
}

export function TextAreaValidate() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Textarea label={'Textarea'} rows={1} cols={75} resize={'vertical'} error helpText={'Additional information about the textarea or error'} defaultValue={'Error'} dark={dark}/>
    </div>
  )
}