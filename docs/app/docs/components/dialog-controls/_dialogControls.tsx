'use client';
import {Button, Dialog, DialogContent, DialogControls, DialogTitle} from '@hbuesing/ui-library';
import React, {useState} from 'react';
import {useTheme} from "nextra-theme-docs";
import styles from "@/styles/styles.module.scss";

export default function Controls() {
  return (
    <DialogControls>
      <Button variant={'filled'}>Button</Button>
    </DialogControls>
  );
}

export function DialogControlsBasic() {
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
          <Button variant={'text'} onClick={() => {setIsVisible(false)}}>Confirm</Button>
          <Button variant={'text'} color={'error'} onClick={() => {setIsVisible(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogPos({position, content}: {position: 'start' | 'end' | 'space-between', content: string}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button variant={'outlined'} dark={dark} onClick={() => setIsVisible(true)}>{position.charAt(0).toUpperCase() + position.slice(1)}</Button>

      <Dialog size={'small'} open={isVisible} onCancel={() => setIsVisible(false)} dark={dark}>
        <DialogTitle>Title</DialogTitle>

        <DialogContent>
          {content}
        </DialogContent>

        <DialogControls position={position}>
          <Button variant={'text'} onClick={() => {setIsVisible(false)}}>Confirm</Button>
          <Button variant={'text'} color={'error'} onClick={() => {setIsVisible(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </>
  );
}