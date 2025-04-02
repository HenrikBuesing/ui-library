'use client';
import {Button, Dialog, DialogContent, DialogControls, DialogTitle} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function DefaultDialog() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={isVisible} onCancel={() => {setIsVisible(false)}}>
        <DialogTitle>Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setIsVisible(false)}}>Confirm</Button>
          
          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setIsVisible(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [showSmall, setShowSmall] = useState(false);
  const [showMedium, setShowMedium] = useState(false);
  const [showLarge, setShowLarge] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShowSmall(true)}}>Small Dialog</Button>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShowMedium(true)}}>Medium Dialog</Button>
      <Button variant={'outlined'} dark={dark} onClick={() => {setShowLarge(true)}}>large Dialog</Button>

      <Dialog dark={dark} open={showSmall} size={'small'} onCancel={() => {setShowSmall(false)}}>
        <DialogTitle>Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShowSmall(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShowSmall(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>

      <Dialog dark={dark} open={showMedium} size={'medium'} onCancel={() => {setShowMedium(false)}}>
        <DialogTitle>Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShowMedium(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShowMedium(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>

      <Dialog dark={dark} open={showLarge} size={'large'} onCancel={() => {setShowLarge(false)}}>
        <DialogTitle>Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setShowLarge(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setShowLarge(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogESC() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={isVisible} disableEscapeKey>
        <DialogTitle>Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setIsVisible(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setIsVisible(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogScroll() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={isVisible} scrollable onCancel={() => {setIsVisible(false)}}>
        <DialogTitle>Simple dialog</DialogTitle>

        <DialogContent>
          <span>Dialog message</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setIsVisible(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setIsVisible(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}

export function DialogAlert() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'outlined'} dark={dark} onClick={() => {setIsVisible(true)}}>Show Dialog</Button>

      <Dialog dark={dark} open={isVisible} ariaModal labelledby={'dialog-title'} describedby={'dialog-content'}  onCancel={() => {setIsVisible(false)}}>
        <DialogTitle id={'dialog-title'}>Simple dialog</DialogTitle>

        <DialogContent>
          <span id={'dialog-content'}>This text will be used for the <q>aria-describedby</q> property</span>
          <span>Additional context</span>
        </DialogContent>

        <DialogControls>
          <Button variant={'text'} dark={dark} onClick={() => {setIsVisible(false)}}>Confirm</Button>

          <Button variant={'text'} color={'error'} dark={dark} onClick={() => {setIsVisible(false)}}>Cancel</Button>
        </DialogControls>
      </Dialog>
    </div>
  );
}