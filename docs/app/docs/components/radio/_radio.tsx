'use client';
import styles from '@/styles/styles.module.scss';
import {Checkbox, Radio} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultRadio(){
    const {theme} = useTheme();
    const dark = theme === 'dark';

    return (
      <div className={styles.showcaseWrapper}>
          <Radio options={[{name: 'Foo', value: 'foo'}, {name: 'Bar', value: 'bar'}]} selected={'bar'} selectionChanged={() => {}}/>
      </div>
    );
}