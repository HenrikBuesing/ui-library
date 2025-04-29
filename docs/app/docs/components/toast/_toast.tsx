'use client';
import {Button, ToastProvider, useToastContext, ToastOptions} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {ReactNode} from 'react';

export function SimpleToast({options}: {options?: ToastOptions}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const {queueToast} = useToastContext();

  return (
    <div className={styles.showcaseWrapperCol}>
      <Button variant={'outlined'} dark={dark} onClick={() => {queueToast('Toast notification', options)}}>
        Show toast
      </Button>
    </div>
  );
}

function ToastVariant() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const {queueToast} = useToastContext();
  
  function addToasts() {
    queueToast('Default toast');
    queueToast('Info toast', {variant: 'info'});
    queueToast('Success toast', {variant: 'success'});
    queueToast('Warning toast', {variant: 'warning'});
    queueToast('Error toast', {variant: 'error'});
  }

  return (
    <div className={styles.showcaseWrapperCol}>
      <Button variant={'outlined'} dark={dark} onClick={() => {addToasts()}}>
        Show toast
      </Button>
    </div>
  );
}

export default function Provider({children}: {children: ReactNode}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <ToastProvider dark={dark}>
      {children}
    </ToastProvider>
  );
}

export function ProviderAlign({children}: {children: ReactNode}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <ToastProvider alignment={{vertical: 'top', horizontal: 'right'}} dark={dark}>
      {children}
    </ToastProvider>
  );
}

export function ProviderVariant() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <ToastProvider dark={dark} limit={5} timeout={7000}>
      <ToastVariant/>
    </ToastProvider>
  );
}

export function TestButton() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const {closeToast} = useToastContext();
  
  return (
    <Button variant={'text'} dark={dark} onClick={() => closeToast()}>Close</Button>
  );
}

export function alerting() {
  alert('toast callback')
}