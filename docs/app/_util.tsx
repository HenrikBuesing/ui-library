'use client';
import {Details} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React, {ReactNode} from 'react';

export function Detail({children}: {children: ReactNode}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <Details summary={'Expand code'} dark={dark} divider>
      {children}
    </Details>
  );
}