'use client';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import {Tag} from '@hbuesing/ui-library';
import React from 'react';

export default function Tags() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Tag variant={'filled'} label={'Info tag'} color={'info'} dark={dark}/>
    </div>
  );
}

export function TagVariant() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Tag variant={'filled'} label={'Filled tag'} color={'info'} dark={dark}/>

      <Tag variant={'outlined'} label={'Outlined tag'} color={'info'} dark={dark}/>
    </div>
  );
}

export function TagElevation() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Tag variant={'filled'} label={'Elevated'} color={'info'} elevated dark={dark}/>
      
      <Tag variant={'outlined'} label={'Elevated'} color={'info'} elevated dark={dark}/>
    </div>
  );
}

export function TagSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <>
      <div className={styles.showcaseWrapper}>
        <Tag variant={'filled'} label={'Small tag'} color={'info'} size={'small'} dark={dark}/>
        <Tag variant={'filled'} label={'Medium tag'} color={'info'} size={'medium'} dark={dark}/>
        <Tag variant={'filled'} label={'Large tag'} color={'info'} size={'large'} dark={dark}/>
      </div>

      <div className={styles.showcaseWrapper}>
        <Tag variant={'outlined'} label={'Small tag'} color={'info'} size={'small'} dark={dark}/>
        <Tag variant={'outlined'} label={'Medium tag'} color={'info'} size={'medium'} dark={dark}/>
        <Tag variant={'outlined'} label={'Large tag'} color={'info'} size={'large'} dark={dark}/>
      </div>
    </>
  );
}

export function TagColor() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.showcaseCol}>
        <Tag label={'Info'} variant={'filled'} color={'info'} dark={dark}/>
        <Tag label={'Info'} variant={'outlined'} color={'info'} dark={dark}/>
      </div>

      <div className={styles.showcaseCol}>
        <Tag label={'Success'} variant={'filled'} color={'success'} dark={dark}/>
        <Tag label={'Success'} variant={'outlined'} color={'success'} dark={dark}/>
      </div>

      <div className={styles.showcaseCol}>
        <Tag label={'Warning'} variant={'filled'} color={'warning'} dark={dark}/>
        <Tag label={'Warning'} variant={'outlined'} color={'warning'} dark={dark}/>
      </div>

      <div className={styles.showcaseCol}>
        <Tag label={'Error'} variant={'filled'} color={'error'} dark={dark}/>
        <Tag label={'Error'} variant={'outlined'} color={'error'} dark={dark}/>
      </div>

      <div className={styles.showcaseCol}>
        <Tag label={'Custom'} variant={'filled'} color={'#c322a7'} dark={dark}/>
        <Tag label={'Custom'} variant={'outlined'} color={'#c322a7'} dark={dark}/>
      </div>

      <div className={styles.showcaseCol}>
        <Tag label={'Custom'} variant={'filled'} color={'#63d5c5'} dark={dark}/>
        <Tag label={'Custom'} variant={'outlined'} color={'#63d5c5'} dark={dark}/>
      </div>
    </div>
  );
}

export function ClickTag() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Tag label={'Clickable tag'} variant={'filled'} color={'info'} dark={dark} onClick={() => {alert('tag clicked')}}/>
    </div>
  );
}