'use client';
import React from 'react';
import {Button, Notification} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from "nextra-theme-docs";

export default function DefaultNotification() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <Notification variant={'filled'} type={'info'} dark={dark}>
        Notification message
      </Notification>
    </div>
  );
}

export function NotificationVariant() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <Notification variant={'filled'} type={'info'} dark={dark}>
        Notification with variant <q>filled</q>
      </Notification>

      <Notification variant={'outlined'} type={'info'} dark={dark}>
        Notification with variant <q>outlined</q>
      </Notification>
    </div>
  );
}

export function NotificationTypes({type}: {type: 'info' | 'success' | 'warning' | 'error'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <Notification variant={'filled'} type={type} dark={dark}>
        Notification message
      </Notification>

      <Notification variant={'outlined'} type={type} dark={dark}>
        Notification message
      </Notification>
    </div>
  );
}

export function NotificationCancel() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <Notification variant={'filled'} type={'info'} dark={dark} onCancel={() => {alert('close button clicked')}}>
        Notification with the predefined close button
      </Notification>

      <Notification variant={'outlined'} type={'info'} dark={dark} onCancel={() => {alert('close button clicked')}}>
        Notification with the predefined close button
      </Notification>
    </div>
  );
}

export function NotificationAction() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  const color = dark? '#FFF' : '#000';

  return (
    <div className={styles.showcaseWrapperCol}>
      <Notification
        variant={'filled'}
        type={'info'}
        dark={dark}
        action={<Button variant={'text'} size={'small'} color={'#FFF'} onClick={() => {alert('action clicked')}}>Close</Button>}
      >
        Notification with a custom close button
      </Notification>

      <Notification
        variant={'outlined'}
        type={'info'}
        dark={dark}
        action={<Button variant={'text'} size={'small'} color={color} onClick={() => {alert('action clicked')}}>Close</Button>}
      >
        Notification with a custom close button
      </Notification>
    </div>
  );
}