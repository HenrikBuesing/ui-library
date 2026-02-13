'use client';
import {BurgerMenu, MenuHeader, MenuItem} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultBurger({align}: {align: 'left' | 'right'}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <p>The burger menu will open on the {align} side</p>
      
      <BurgerMenu alignment={align} dark={dark}>
        <Content/>
      </BurgerMenu>
    </div>
  )
}

export function IconBurger() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  // Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.
  const open = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={32} height={32}>
    <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/>
  </svg>
  const close = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={32} height={32}>
    <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
  </svg>

  return (
    <div className={styles.showcaseWrapper}>
      <p>The burger menu will have custom icons</p>

      <BurgerMenu alignment={'right'} dark={dark} openIcon={open} closeIcon={close}>
        <Content/>
      </BurgerMenu>
    </div>
  )
}

function Content() {
  return (
    <>
      <MenuHeader>Header</MenuHeader>
      <MenuItem>Content</MenuItem>
      <MenuItem>Menu item</MenuItem>
      <MenuItem>Lorem Ipsum</MenuItem>
      
      <MenuHeader>Second header</MenuHeader>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Orders</MenuItem>

      <MenuHeader>Privacy</MenuHeader>
      <MenuItem>FAQ</MenuItem>
      <MenuItem>Privacy Policy</MenuItem>
      <MenuItem>Contact</MenuItem>
    </>
  )
}