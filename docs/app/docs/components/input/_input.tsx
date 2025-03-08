'use client';
import {Input, InputDecorator} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function InputVariants() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'Outlined'} variant={'outlined'} dark={dark}/>
      <Input label={'Basic'} variant={'basic'} dark={dark}/>
    </div>
  );
}

export function InputAttributes({variant}: {variant: 'basic' | 'outlined'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'Required'} variant={variant} dark={dark} required/>
      <Input label={'Disabled'} variant={variant} dark={dark} disabled/>
      <Input label={'Number'} variant={variant} dark={dark} type={'number'}/>
      <Input label={'Password'} variant={variant} dark={dark} type={'password'}/>
    </div>
  );
}

export function InputHelp() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'Outlined'} variant={'outlined'} dark={dark} helpText={'Input with help text'}/>
      <Input label={'Basic'} variant={'basic'} dark={dark} helpText={'Input with help text'}/>
    </div>
  );
}

export function InputHelpEmpty() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'With helpText'} variant={'outlined'} dark={dark} helpText={'Input with help text'}/>
      <Input label={'Empty helpText'} variant={'outlined'} dark={dark} helpText={' '}/>
    </div>
  );
}

export function InputError({variant}: {variant: 'basic' | 'outlined'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'Error'} variant={variant} error dark={dark} helpText={' '} defaultValue={'Lorem ipsum'}/>
      <Input label={'Error'} variant={variant} error dark={dark} helpText={'Error message'} defaultValue={'Lorem ipsum'}/>
    </div>
  );
}

export function InputDeco({variant}: {variant: 'basic' | 'outlined'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Input label={variant.charAt(0).toUpperCase() + variant.slice(1)} variant={variant} dark={dark}>
        <InputDecorator>
          <svg width={20} height={20} fill={'#222222'}>
            <use href={'/icons/eye-solid.svg#eye'}/>
          </svg>
        </InputDecorator>
      </Input>
      <Input label={variant.charAt(0).toUpperCase() + variant.slice(1)} variant={variant} dark={dark} defaultValue={'hello-world'}>
        <InputDecorator>
          .com
        </InputDecorator>
      </Input>
    </div>
  );
}