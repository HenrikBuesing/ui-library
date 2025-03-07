'use client';
import styles from '@/styles/styles.module.scss';
import {Button, Modal} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function DefaultModal() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);
  
  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'text'} dark={dark} onClick={() => {setShow(true)}}>Show Modal</Button>
      {show && 
        <Modal
          variant={'notification'}
          title={'Notification'}
          message={['Notification message']}
          dark={dark}
          confirmLabel={'Close'}
          confirmAction={() => {setShow(false)}}
        />
      }
    </div>
  );
} 