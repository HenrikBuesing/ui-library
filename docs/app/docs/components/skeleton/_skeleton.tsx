'use client';
import styles from '@/styles/styles.module.scss';
import {Skeleton} from '@hbuesing/ui-library';
import React from 'react';
import {useTheme} from "nextra-theme-docs";

export default function DefaultSkeleton() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapperCol}>
      <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <Skeleton width={'2rem'} height={'2rem'} rounded={'full'} dark={dark}/>
        <Skeleton width={'15rem'} dark={dark}/>
      </div>
      
      <Skeleton height={'9rem'} rounded={'light'} dark={dark}/>
      <Skeleton width={'75%'} rounded={'light'} dark={dark}/>
    </div>
  );
}

export function SkeletonSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Skeleton height={'7rem'} width={'12rem'} dark={dark}/>
      <Skeleton height={'10rem'} width={'5rem'} dark={dark}/>
    </div>
  )
}

export function SkeletonAnim() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <Skeleton width={'2rem'} height={'2rem'} rounded={'full'} dark={dark} disableAnimation/>
        <Skeleton width={'15rem'} dark={dark} disableAnimation/>
      </div>

      <Skeleton height={'9rem'} rounded={'light'} dark={dark} disableAnimation/>
      <Skeleton width={'75%'} rounded={'light'} dark={dark} disableAnimation/>
    </div>
  );
}

export function SkeletonRadius() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Skeleton height={'5rem'} width={'5rem'} dark={dark}/>
      <Skeleton height={'5rem'} width={'5rem'} rounded={'light'} dark={dark}/>
      <Skeleton height={'5rem'} width={'5rem'} rounded={'medium'} dark={dark}/>
      <Skeleton height={'5rem'} width={'5rem'} rounded={'full'} dark={dark}/>
    </div>
  );
}