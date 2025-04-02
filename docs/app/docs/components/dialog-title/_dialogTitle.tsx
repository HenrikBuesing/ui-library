'use client';
import {Button, Dialog, DialogContent, DialogControls, DialogTitle} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function Title() {
  return (
    <DialogTitle>Dialog title</DialogTitle>
  );
};

export function DialogTitleBasic() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>
      
      <Dialog size={'small'} open={isVisible} dark={dark} onCancel={() => setIsVisible(false)}>
        <DialogTitle>Dialog title</DialogTitle>
        
        <DialogContent>Content</DialogContent>
        
        <DialogControls>
          <Button variant={'outlined'} onClick={() => {setIsVisible(false)}}>Close</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogTitleColor({color}: {color: 'success' | 'warning' | 'error' | 'info'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>

      <Dialog size={'small'} open={isVisible} dark={dark} onCancel={() => setIsVisible(false)}>
        <DialogTitle color={color}>Dialog title</DialogTitle>

        <DialogContent>Content</DialogContent>

        <DialogControls>
          <Button variant={'outlined'} onClick={() => {setIsVisible(false)}}>Close</Button>
        </DialogControls>
      </Dialog>
    </>
  )
}

export function DialogAC() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>

      <Dialog size={'small'} open={isVisible} dark={dark} labelledby={'dialog-title'} onCancel={() => setIsVisible(false)}>
        <DialogTitle id={'dialog-title'}>Dialog title</DialogTitle>

        <DialogContent>Content</DialogContent>

        <DialogControls>
          <Button variant={'outlined'} onClick={() => {setIsVisible(false)}}>Close</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}