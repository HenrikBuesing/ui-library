'use client';
import {TablePagination} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultTabPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <TablePagination entries={200} dark={dark}/>
    </div>
  );
}

export function EntriesPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <TablePagination entries={500} dark={dark}/>
      <TablePagination entries={1000} dark={dark}/>
    </div>
  );
}

export function RowsPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapperCol}>
      <TablePagination entries={500} rows={[25, 50, 100]} dark={dark}/>
      <TablePagination entries={1000} rows={[50, 100, 250]} dark={dark}/>
    </div>
  );
}

export function RowLabelPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <TablePagination entries={200} dark={dark} rowLabel={'Select amount of rows to display'}/>
    </div>
  );
}

export function DescriptionPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <TablePagination entries={200} dark={dark} entriesDescription={'/'}/>
    </div>
  );
}

export function ActiveTabPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <TablePagination entries={200} dark={dark} activePage={3}/>
    </div>
  );
}

export function IconTabPagination() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  const prev = <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'} width={24} height={24}>
    <path d={'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z'}/>
  </svg>
  const next = <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'} width={24} height={24}>
    <path d={'M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z'}/>
  </svg>

  return (
    <div className={styles.showcaseWrapper}>
      <TablePagination entries={200} dark={dark} activePage={3} nextLabel={'Next'} prevLabel={'Previous'} nextButton={next} prevButton={prev}/>
    </div>
  );
}