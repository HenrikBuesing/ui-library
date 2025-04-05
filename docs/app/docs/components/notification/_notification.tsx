'use client';
import React from 'react';
import {Notification} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from "nextra-theme-docs";

export default function DefaultNotification() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <Notification variant={'filled'} type={'info'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'outlined'} type={'info'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'filled'} type={'success'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'outlined'} type={'success'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'filled'} type={'warning'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'outlined'} type={'warning'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'filled'} type={'error'} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'outlined'} type={'error'} dark={dark}>
        Notification message
      </Notification>
    </div>
  );
}