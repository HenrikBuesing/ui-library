'use client';
import {Button, Dialog, DialogContent, DialogControls, DialogTitle} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function DefaultDialog() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShow(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={show} onCancel={() => {setShow(false)}}>
        <DialogTitle >Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShow(false)}}>Confirm</Button>
          
          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShow(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShow(true)}}>Small Dialog</Button>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShowB(true)}}>Medium Dialog</Button>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShowC(true)}}>large Dialog</Button>

      <Dialog dark={dark} open={show} size={'small'} onCancel={() => {setShow(false)}}>
        <DialogTitle >Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShow(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShow(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>

      <Dialog dark={dark} open={showB} size={'medium'} onCancel={() => {setShowB(false)}}>
        <DialogTitle >Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShowB(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShowB(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>

      <Dialog dark={dark} open={showC} size={'large'} onCancel={() => {setShowC(false)}}>
        <DialogTitle >Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShowC(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShowC(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogESC() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShow(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={show} disableEscapeKey>
        <DialogTitle >Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShow(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShow(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogScroll() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShow(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={show} scrollable onCancel={() => {setShow(false)}}>
        <DialogTitle >Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShow(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShow(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogAlert() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [show, setShow] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShow(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={show} ariaModal labelledby={'dialog-title'} describedby={'dialog-content'}  onCancel={() => {setShow(false)}}>
        <DialogTitle id={'dialog-title'}>Simple dialog</DialogTitle>

        <DialogContent>
          <span id={'dialog-content'}>This text will be used for the 'aria-describedby' property</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShow(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShow(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}