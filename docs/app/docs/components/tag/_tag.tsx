'use client';
import styles from '@/styles/styles.module.scss';
import {Tag} from '@hbuesing/ui-library';
import React from 'react';

// <Tag variant={variant} label={'Large tag'} color={'#c322a7'} size={'large'}/>

export default function Tags() {
  return (
    <div className={styles.showcaseWrapper}>
      <Tag variant={'filled'} label={'Filled tag'} color={'info'}/>

      <Tag variant={'outlined'} label={'Outlined tag'} color={'info'} onDelete={() => {alert('Outlined tag')}}/>
    </div>
  );
}

export function TagSize() {
  return (
    <>
      <div className={styles.showcaseWrapper}>
        <Tag variant={'filled'} label={'Small tag'} color={'info'} size={'small'} onDelete={() => {alert('Outlined tag')}}/>
        <Tag variant={'filled'} label={'Medium tag'} color={'info'} size={'medium'} onDelete={() => {alert('Outlined tag')}}/>
        <Tag variant={'filled'} label={'Large tag'} color={'info'} size={'large'} onDelete={() => {alert('Outlined tag')}}/>
      </div>

      <div className={styles.showcaseWrapper}>
        <Tag variant={'outlined'} label={'Small tag'} color={'info'} size={'small'}/>
        <Tag variant={'outlined'} label={'Medium tag'} color={'info'} size={'medium'}/>
        <Tag variant={'outlined'} label={'Large tag'} color={'info'} size={'large'}/>
      </div>
    </>
  );
}