'use client';
import styles from '@/styles/styles.module.scss';
import {Radio} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultRadio() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Radio name={'showcase-1'} value={'foo'} defaultChecked dark={dark}/>
      <Radio name={'showcase-1'} value={'bar'} dark={dark}/>
      <Radio name={'showcase-1'} value={'baz'} disabled dark={dark}/>
    </div>
  );
}

export function RadioContent() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Radio name={'showcase-2'} value={'foo'} defaultChecked dark={dark}>First option</Radio>
      <Radio name={'showcase-2'} value={'bar'} dark={dark}>Second option</Radio>
      <Radio name={'showcase-2'} value={'baz'} disabled dark={dark}>Disabled option</Radio>
    </div>
  );
}

export function RadioColor() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Radio name={'foo'} value={'foo'} defaultChecked color={'red'} dark={dark}/>
      <Radio name={'abc'} value={'abc'} defaultChecked color={'#11aa33'} dark={dark}/>
      <Radio name={'bar'} value={'bar'} defaultChecked color={'rgb(181,46,213)'} dark={dark}/>
      <Radio name={'baz'} value={'baz'} defaultChecked color={'rgb(0,0,0)'} disabled dark={dark}/>
    </div>
  );
}
