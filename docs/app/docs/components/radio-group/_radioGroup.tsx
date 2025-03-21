'use client';
import styles from '@/styles/styles.module.scss';
import {RadioGroup, RadioOption} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React, {ChangeEvent} from 'react';

const options: RadioOption[] = [
  {label: 'Foo', value: 'foo'},
  {label: 'Bar', value: 'bar'},
  {label: 'Baz', value: 'baz'}
];

export default function DefaultGroup() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [selectedValue, setSelectedValue] = React.useState('foo');
  
  return (
    <div className={styles.showcaseWrapper}>
      <RadioGroup options={options} selected={selectedValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {setSelectedValue(e.target.value)}} dark={dark}/>
    </div>
  );
}

export function GroupDirection() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [rowValue, setRowValue] = React.useState('foo');
  const [colValue, setColValue] = React.useState('foo');

  return (
    <>
      <div className={styles.showcaseWrapper}>
        <RadioGroup name={'row'} direction={'row'} options={options} selected={rowValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {setRowValue(e.target.value)}} dark={dark}/>
      </div>
      
      <div className={styles.showcaseWrapper}>
        <RadioGroup name={'column'} direction={'column'} options={options} selected={colValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {setColValue(e.target.value)}} dark={dark}/>
      </div>
    </>
  );
}

export function GroupInactive() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  const disabled: RadioOption[] = [
    {label: 'Foo', value: 'foo'},
    {label: 'Bar', value: 'bar'},
    {label: 'Baz', value: 'baz', disabled: true},
  ];

  const [selectedValue, setSelectedValue] = React.useState('foo');

  return (
    <div className={styles.showcaseWrapper}>
      <RadioGroup options={disabled} selected={selectedValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {setSelectedValue(e.target.value)}} dark={dark}/>
      <RadioGroup options={disabled} disabled dark={dark}/>
    </div>
  );
}

export function GroupColor() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  const [selectedValue, setSelectedValue] = React.useState('foo');

  return (
    <div className={styles.showcaseWrapper}>
      <RadioGroup
        color={'#11aa33'}  
        options={options}
        selected={selectedValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {setSelectedValue(e.target.value)}}
        dark={dark}
      />

      <RadioGroup
        color={'#11aa33'}
        options={options}
        selected={'foo'}
        disabled
        dark={dark}
      />
    </div>
  );
}