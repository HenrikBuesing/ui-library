'use client';
import {Button, Dialog, DialogContent, DialogControls, DialogTitle} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function Content() {
  return (
    <DialogContent>Dialog content</DialogContent>
  );
}

export function DialogContentBasic() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setIsVisible(true)}>Show Dialog</Button>
      
      <Dialog size={'small'} open={isVisible} onCancel={() => setIsVisible(false)} dark={dark}>
        <DialogTitle>Title</DialogTitle>
        
        <DialogContent>
          Dialog content
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} onClick={() => {setIsVisible(false)}}>Close</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogDivider() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setIsVisible(true)}>Show Dialog</Button>

      <Dialog size={'small'} open={isVisible} onCancel={() => setIsVisible(false)} dark={dark}>
        <DialogTitle>Title</DialogTitle>

        <DialogContent divider>
          <span>The dialog content is separated from the title and the controls</span>
          <p>Additional dialog context</p>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} onClick={() => {setIsVisible(false)}}>Close</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogAC() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => setIsVisible(true)}>Show Dialog</Button>

      <Dialog size={'small'} describedby={'dialog-content'} open={isVisible} onCancel={() => setIsVisible(false)} dark={dark}>
        <DialogTitle>Title</DialogTitle>

        <DialogContent id={'dialog-content'}>
          Dialog content
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} onClick={() => {setIsVisible(false)}}>Close</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}