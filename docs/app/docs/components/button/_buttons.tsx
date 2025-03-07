'use client';
import styles from '@/styles/styles.module.scss';
import {Button} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultButtons(){
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={'filled'} dark={dark}>Filled</Button>
      <Button variant={'outlined'} dark={dark}>Outlined</Button>
      <Button variant={'text'} dark={dark}>Text</Button>
    </div>
  );
}

export function Buttons({variant}: {variant: 'filled' | 'outlined' | 'text'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Button variant={variant} dark={dark}>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
      <Button variant={variant} dark={dark} disabled>Disabled</Button>
      <Button variant={variant} dark={dark} href={`#${variant}`}>Link</Button>
    </div>
  );
}

export function ButtonSizes() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div>
      <div className={styles.showcaseWrapper}>
        <Button variant={'filled'} dark={dark} size={'small'}>Small</Button>
        <Button variant={'filled'} dark={dark} size={'medium'}>Medium</Button>
        <Button variant={'filled'} dark={dark} size={'large'}>Large</Button>
      </div>

      <div className={styles.showcaseWrapper}>
        <Button variant={'outlined'} dark={dark} size={'small'}>Small</Button>
        <Button variant={'outlined'} dark={dark} size={'medium'}>Medium</Button>
        <Button variant={'outlined'} dark={dark} size={'large'}>Large</Button>
      </div>

      <div className={styles.showcaseWrapper}>
        <Button variant={'text'} dark={dark} size={'small'}>Small</Button>
        <Button variant={'text'} dark={dark} size={'medium'}>Medium</Button>
        <Button variant={'text'} dark={dark} size={'large'}>Large</Button>
      </div>
    </div>
  );
}

export function ColorButtons() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.showcaseCol}>
        <Button variant={'filled'} dark={dark}>Filled</Button>
        <Button variant={'filled'} color={'success'} dark={dark}>Success</Button>
        <Button variant={'filled'} color={'warning'} dark={dark}>Warning</Button>
        <Button variant={'filled'} color={'error'} dark={dark}>Error</Button>
        <Button variant={'filled'} color={'#37edde'} dark={dark}>Custom</Button>
        <Button variant={'filled'} color={'#9437ed'} dark={dark}>Custom</Button>
      </div>

      <div className={styles.showcaseCol}>
        <Button variant={'outlined'} dark={dark}>Outlined</Button>
        <Button variant={'outlined'} color={'success'} dark={dark}>Success</Button>
        <Button variant={'outlined'} color={'warning'} dark={dark}>Warning</Button>
        <Button variant={'outlined'} color={'error'} dark={dark}>Error</Button>
        <Button variant={'outlined'} color={'#37edde'} dark={dark}>Custom</Button>
        <Button variant={'outlined'} color={'#9437ed'} dark={dark}>Custom</Button>
      </div>

      <div className={styles.showcaseCol}>
        <Button variant={'text'} dark={dark}>Text</Button>
        <Button variant={'text'} color={'success'} dark={dark}>Success</Button>
        <Button variant={'text'} color={'warning'} dark={dark}>Warning</Button>
        <Button variant={'text'} color={'error'} dark={dark}>Error</Button>
        <Button variant={'text'} color={'#37edde'} dark={dark}>Custom</Button>
        <Button variant={'text'} color={'#9437ed'} dark={dark}>Custom</Button>
      </div>
    </div>
  );
}