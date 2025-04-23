'use client';
import {Button, Input, Notification, PopupProvider, Toast, usePopupContext} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function ToastDefault() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setOpen(true)}>Show toast</Button>
      
      <Toast id={'simple-toast'} open={open} timeout={5000} onClose={() => {setOpen(false)}} alignment={{vertical: 'bottom', horizontal: 'left'}} dark={dark}>
        Toast message
      </Toast>
    </div>
  );
}

export function ToastTimeout() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(3000);

  return (
    <div className={styles.showcaseWrapperCol}>
      <div style={{width:'25%'}}>
        <Input 
          label={'Duration'}
          variant={'basic'}
          type={'number'}
          min={0}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          id={'timeout-duration'}
          dark={dark}
        />
      </div>
      
      <Button variant={'outlined'} dark={dark} onClick={() => {setOpen(true)}}>
        Show toast
      </Button>

      <Toast id={'toast-timer'} open={open} timeout={value} onClose={() => {setOpen(false)}} alignment={{vertical: 'bottom', horizontal: 'left'}} dark={dark}>
        Timeout: {value}
      </Toast>
    </div>
  );
}

export function ToastContent() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setOpen(true)}>Show toast</Button>

      <Toast id={'toast-content'} open={open} timeout={5000} alignment={{vertical: 'bottom', horizontal: 'left'}} onClose={() => {setOpen(false)}} dark={dark}>
        <Notification type={'success'} variant={'filled'}>Success notification</Notification>
      </Toast>
    </div>
  );
}

export function Stack() {
  return (
    <PopupProvider alignment={{vertical: 'bottom', horizontal: 'left'}}>
      <StackItem/>
    </PopupProvider>
  );
}

function StackItem() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const {addPopup} = usePopupContext();

  function addToast() {
    addPopup([
      {open: true, timeout: 3000, onClose: () => {}, children: '3 second timeout', dark, id: Math.random().toString()},
      {open: true, timeout: 4000, onClose: () => {}, children: '4 second timeout', dark, id: Math.random().toString()},
      {open: true, timeout: 5000, onClose: () => {}, children: '5 second timeout', dark, id: Math.random().toString()},
      {open: true, timeout: 6000, onClose: () => {}, children: '6 second timeout', dark, id: Math.random().toString()},
    ]);
  }

  return (
    <div className={styles.showcaseWrapperCol}>
      <Button variant={'outlined'} dark={dark} onClick={() => {addToast()}}>
        Show toast stack
      </Button>
    </div>
  );
}