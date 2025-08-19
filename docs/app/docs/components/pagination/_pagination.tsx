'use client';
import {AriaLabels, Pagination} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React, {useState} from 'react';

export default function DefaultPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Pagination pages={10} dark={dark}/>
    </div>
  );
}

export function PagesPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapperCol}>
      <Pagination pages={3} dark={dark}/>
      <Pagination pages={15} dark={dark}/>
    </div>
  );
}

export function ActivePage() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Pagination pages={12} activePage={6} dark={dark}/>
    </div>
  );
}

export function ChangePages() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  const [page, setPage] = useState(1);
  
  return (
    <div className={styles.showcaseWrapperCol}>
      <div>current page: {page}</div>
      <Pagination pages={10} activePage={page} onChange={setPage} dark={dark}/>
    </div>
  );
}

export function ControlsPage() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <Pagination pages={10} dark={dark} disableFirstButton disableLastButton/>
      <Pagination pages={10} dark={dark} disableNextButton disablePrevButton/>
      <Pagination pages={10} dark={dark} disableFirstButton disableLastButton disableNextButton disablePrevButton/>
    </div>
  );
}

export function IconPages() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  const first = <svg fill={dark ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path d="M556.2 541.6C544.2 546.6 530.5 543.8 521.3 534.7L352 365.3L352 512C352 524.9 344.2 536.6 332.2 541.6C320.2 546.6 306.5 543.8 297.3 534.7L128 365.3L128 512C128 529.7 113.7 544 96 544C78.3 544 64 529.7 64 512L64 128C64 110.3 78.3 96 96 96C113.7 96 128 110.3 128 128L128 274.7L297.4 105.4C306.6 96.2 320.3 93.5 332.3 98.5C344.3 103.5 352 115.1 352 128L352 274.7L521.4 105.3C530.6 96.1 544.3 93.4 556.3 98.4C568.3 103.4 576 115.1 576 128L576 512C576 524.9 568.2 536.6 556.2 541.6z"/>
  </svg>;
  const last = <svg fill={dark ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path d="M83.8 541.6C95.8 546.6 109.5 543.8 118.7 534.7L288 365.3L288 512C288 524.9 295.8 536.6 307.8 541.6C319.8 546.6 333.5 543.8 342.7 534.7L512 365.3L512 512C512 529.7 526.3 544 544 544C561.7 544 576 529.7 576 512L576 128C576 110.3 561.7 96 544 96C526.3 96 512 110.3 512 128L512 274.7L342.6 105.3C333.4 96.1 319.7 93.4 307.7 98.4C295.7 103.4 288 115.1 288 128L288 274.7L118.6 105.4C109.4 96.2 95.7 93.5 83.7 98.5C71.7 103.5 64 115.1 64 128L64 512C64 524.9 71.8 536.6 83.8 541.6z"/>
  </svg>;

  return (
    <div className={styles.showcaseWrapper}>
      <Pagination pages={10} dark={dark} firstButton={first} lastButton={last} disableNextButton disablePrevButton/>
    </div>
  );
}

export function BoundaryPages() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Pagination pages={15} activePage={7} dark={dark} boundary={3}/>
    </div>
  );
}

export function SiblingsPages() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Pagination pages={15} activePage={7} dark={dark} siblings={3}/>
    </div>
  );
}

export function AriaPages() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  const aria: AriaLabels = {
    first: 'First page',
    last: 'Last page',
    next: 'Next page',
    prev: 'Previous page',
    page: 'Page'
  };

  return (
    <div className={styles.showcaseWrapper}>
      <Pagination pages={10} dark={dark} ariaLabels={aria}/>
    </div>
  );
}