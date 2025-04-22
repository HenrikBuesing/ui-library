'use client';
import {Button, Input, Notification, Toast} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

// <Toast open={open} timeout={5000} alignment={{vertical: 'bottom', horizontal: 'left'}} onClose={() => {setOpen(false)}} dark={dark}>
//   {/*Testing toast message*/}
//   <Notification type={'info'} variant={'filled'}>Testing toast message</Notification>
// </Toast>

export default function ToastDefault() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setOpen(true)}>Show toast</Button>
      
      <Toast open={open} timeout={5000} onClose={() => {setOpen(false)}} dark={dark}>
        Toast message
      </Toast>
    </div>
  );
}

export function ToastTimeout() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('3000');

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setOpen(true)}>Show toast</Button>
      <Input label={'Duration'} variant={'outlined'} value={value} onChange={(event) => setValue(event.target.value)}/>

      <Toast open={open} timeout={5000} onClose={() => {setOpen(false)}} dark={dark}>
        Toast message
      </Toast>
    </div>
  );
}