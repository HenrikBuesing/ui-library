'use client';
import styles from '@/styles/styles.module.scss';
import {Tag} from '@hbuesing/ui-library';
import React from 'react';

export default function Tags() {
  return (
    <div className={styles.showcaseWrapper}>
      <Tag variant={'filled'} label={'Filled tag'} color={'#c322a7'}/>
      <Tag variant={'outlined'} label={'Outlined tag'} color={'#c322a7'}/>
    </div>
  )
}