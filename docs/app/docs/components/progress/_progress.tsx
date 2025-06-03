'use client';
import {CircularProgress, LinearProgress} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import React, {useEffect, useState} from 'react';
import {useTheme} from "nextra-theme-docs";

export default function CircleDefault() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <CircularProgress dark={dark}/>
    </div>
  );
}

export function CircleSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <CircularProgress size={30} dark={dark}/>
      <CircularProgress size={50} dark={dark}/>
      <CircularProgress size={'70px'} dark={dark}/>
    </div>
  );
}

export function CircleDeterminate() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className={styles.showcaseWrapper}>
      <CircularProgress value={25} dark={dark}/>
      <CircularProgress value={50} dark={dark}/>
      <CircularProgress value={75} dark={dark}/>
      <CircularProgress value={value} dark={dark}/>
    </div>
  );
}

export function CircleColor() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <CircularProgress color={'info'} dark={dark}/>
      <CircularProgress color={'success'} dark={dark}/>
      <CircularProgress color={'warning'} dark={dark}/>
      <CircularProgress color={'error'} dark={dark}/>
      <CircularProgress color={'#ba26f8'} dark={dark}/>
    </div>
  );
}

export function LinearDefault() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <LinearProgress dark={dark}/>
    </div>
  );
}

export function LinearSize() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <LinearProgress size={3} dark={dark}/>
      <LinearProgress size={6} dark={dark}/>
      <LinearProgress size={'9px'} dark={dark}/>
    </div>
  );
}

export function LinearDeterminate() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.showcaseWrapper}>
      <LinearProgress value={25} dark={dark}/>
      <LinearProgress value={50} dark={dark}/>
      <LinearProgress value={75} dark={dark}/>
      <LinearProgress value={value} dark={dark}/>
    </div>
  );
}

export function LinearColor() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <LinearProgress color={'info'} dark={dark}/>
      <LinearProgress color={'success'} dark={dark}/>
      <LinearProgress color={'warning'} dark={dark}/>
      <LinearProgress color={'error'} dark={dark}/>
      <LinearProgress color={'#ba26f8'} dark={dark}/>
    </div>
  );
}