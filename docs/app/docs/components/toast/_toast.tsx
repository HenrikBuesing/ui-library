'use client';
import {Button, Input, Notification, ToastProvider, Toast, useToastContext, RadioGroup} from '@hbuesing/ui-library';
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
      
      <Toast id={'simple-toast'} open={open} timeout={5000} closeCallback={() => {setOpen(false)}} alignment={{vertical: 'bottom', horizontal: 'left'}} dark={dark}>
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

      <Toast id={'toast-timer'} open={open} timeout={value} closeCallback={() => {setOpen(false)}} alignment={{vertical: 'bottom', horizontal: 'left'}} dark={dark}>
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

      <Toast id={'toast-content'} open={open} timeout={5000} alignment={{vertical: 'bottom', horizontal: 'left'}} closeCallback={() => {setOpen(false)}} dark={dark}>
        <Notification type={'success'} variant={'filled'}>Success notification</Notification>
      </Toast>
    </div>
  );
}

export function ToastAlignment() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);
  const [vertical, setVertical] = useState<"top" | "center" | "bottom">('bottom');
  const [horizontal, setHorizontal] = useState<"center" | "left" | "right">('left');

  return (
    <div className={styles.showcaseWrapperCol}>
      <div>
        <span>Vertical alignment</span>
        <RadioGroup
          dark={dark}
          direction={'row'}
          name={'vertical'}
          selected={vertical}
          options={[{label: 'top', value: 'top'}, {label: 'center', value: 'center'}, {label: 'bottom', value: 'bottom'}]}
          onChange={(event) => setVertical(event.target.value as "top" | "center" | "bottom")}
        />
      </div>

      <div>
        <span>Horizontal alignment</span>
        <RadioGroup
          dark={dark}
          direction={'row'}
          name={'horizontal'}
          selected={horizontal}
          options={[{label: 'left', value: 'left'}, {label: 'center', value: 'center'}, {label: 'right', value: 'right'}]}
          onChange={(event) => setHorizontal(event.target.value as "center" | "left" | "right")}
        />
      </div>

      <div style={{marginTop: '2rem'}}>
        <Button variant={'outlined'} dark={dark} onClick={() => {setOpen(true)}}>
          Show toast
        </Button>
      </div>

      <Toast id={'toast-timer'} open={open} timeout={3000} closeCallback={() => {setOpen(false)}} alignment={{vertical: vertical, horizontal: horizontal}} dark={dark}>
        Toast with custom position
      </Toast>
    </div>
  );
}

export function ToastActions() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setOpen(true)}>Show toast</Button>

      <Toast 
        id={'toast-action'}
        open={open}
        timeout={5000}
        closeCallback={() => {setOpen(false)}}
        alignment={{vertical: 'bottom', horizontal: 'left'}}
        dark={dark}
        action={<Button color={'success'} variant={'text'} size={'small'} onClick={() => {setOpen(false)}}>Close</Button>}
      >
        Wait for the timeout or close with the close button
      </Toast>
    </div>
  );
}

export function ToastActionsNotification() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setOpen(true)}>Show toast</Button>

      <Toast id={'notify-toast'} open={open} timeout={5000} closeCallback={() => {setOpen(false)}} alignment={{vertical: 'bottom', horizontal: 'left'}} dark={dark}>
        <Notification type={'success'} variant={'filled'} onClose={() => {setOpen(false)}}>
          Wait for the timeout or close with the close button
        </Notification>
      </Toast>
    </div>
  );
}

export function Stack() {
  return (
    <ToastProvider alignment={{vertical: 'bottom', horizontal: 'left'}}>
      <StackItem/>
    </ToastProvider>
  );
}

function StackItem() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const {addToast} = useToastContext();

  function setToasts() {
    addToast([
      {open: true, timeout: 3000, closeCallback: () => {}, children: <Notification type={'info'} variant={'filled'}>Info notification</Notification>, dark, id: Math.random().toString()},
      {open: true, timeout: 4000, closeCallback: () => {}, children: <Notification type={'success'} variant={'filled'}>Success notification</Notification>, dark, id: Math.random().toString()},
      {open: true, timeout: 5000, closeCallback: () => {}, children: <Notification type={'warning'} variant={'filled'}>Warning notification</Notification>, dark, id: Math.random().toString()},
      {open: true, timeout: 6000, closeCallback: () => {}, children: <Notification type={'error'} variant={'filled'}>Error notification</Notification>, dark, id: Math.random().toString()},
    ]);
  }

  return (
    <div className={styles.showcaseWrapperCol}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setToasts()}}>
        Show toast stack
      </Button>
    </div>
  );
}