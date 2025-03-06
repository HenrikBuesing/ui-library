'use client';
import {Icon, Input, InputDecorator} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function Deco() {
  return (
    <div className={styles.showcaseWrapper}>
      <InputDecorator>
        Decorator without the input component
      </InputDecorator>
    </div>
  );
}

export function DecoContent({variant}: {variant: 'outlined' | 'basic'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'String'} variant={variant} dark={dark}>
        <InputDecorator>
          Text
        </InputDecorator>
      </Input>

      <Input label={'Image Element'} variant={variant} dark={dark}>
        <InputDecorator>
          <img src={'/icons/eye-solid.png'} alt={'input icon'} width={20} height={18}/>
        </InputDecorator>
      </Input>

      <Input label={'SVG Element'} variant={variant} dark={dark}>
        <InputDecorator>
          <svg width={20} height={20}>
            <use href={'/icons/eye-solid.svg#eye'}/>
          </svg>
        </InputDecorator>
      </Input>

      <Input label={'Icon Element'} variant={variant} dark={dark}>
        <InputDecorator>
          <Icon type={'svg'} src={'/icons/eye-solid.svg#eye'} width={20} height={20}/>
        </InputDecorator>
      </Input>
    </div>
  );
}

export function DecoPosition({variant}: {variant: 'outlined' | 'basic'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Input label={variant.charAt(0).toUpperCase() + variant.slice(1)} variant={variant} dark={dark}>
        <InputDecorator position={'left'}>
          left
        </InputDecorator>
      </Input>

      <Input label={variant.charAt(0).toUpperCase() + variant.slice(1)} variant={variant} dark={dark}>
        <InputDecorator position={'right'}>
          right
        </InputDecorator>
      </Input>
    </div>
  );
}

export function DecoHidden() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Input label={'Outlined'} variant={'outlined'} dark={dark}>
        <InputDecorator onFocus>
          <Icon type={'svg'} src={'/icons/eye-solid.svg#eye'} width={20} height={20}/>
        </InputDecorator>
      </Input>

      <Input label={'Basic'} variant={'basic'} dark={dark}>
        <InputDecorator onFocus>
          <Icon type={'svg'} src={'/icons/eye-solid.svg#eye'} width={20} height={20}/>
        </InputDecorator>
      </Input>
    </div>
  );
}