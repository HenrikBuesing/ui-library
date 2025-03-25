'use client';
import {Button, Dialog, DialogContent, DialogControls, DialogTitle} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function DefaultModal() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'text'} dark={dark} onClick={() => {setShow(true)}}>Show Modal</Button>

      <Dialog dark={dark} open={show} labelledby={'dialog-title'} width={'s'} zIndex={35} onClickBackdrop={() => {setShow(false)}}>
        {/*<DialogTitle id={'dialog-title'}>Title testing</DialogTitle>*/}
        <DialogTitle id={'dialog-title'} color={'default'}>Title testing</DialogTitle>
        {/*<DialogTitle id={'dialog-title'} color={'success'}>Title testing</DialogTitle>*/}
        {/*<DialogTitle id={'dialog-title'} color={'warning'}>Title testing</DialogTitle>*/}
        {/*<DialogTitle id={'dialog-title'} color={'error'}>Title testing</DialogTitle>*/}
        
        <DialogContent divider>
          <span>Modal content</span>
          <span>Modal content</span>
          <span>Modal content testiopodnfg poamspomsd pom podsda posmdpdsm po psodm</span>
        </DialogContent>
        
        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShow(false)}}>Confirm</Button>
          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShow(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
} 