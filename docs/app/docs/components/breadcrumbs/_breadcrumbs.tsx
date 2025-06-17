'use client';
import {Breadcrumbs} from '@hbuesing/ui-library';
import styles from '@/styles/styles.module.scss';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function BreadcrumbsDefault() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div className={styles.showcaseWrapper}>
      <Breadcrumbs dark={dark}>
        <a href={'/docs'}>Documentation</a>
        <a href={'/docs/components'}>Components</a>
        <span>Breadcrumbs</span>
      </Breadcrumbs>
    </div>
  );
}

export function BreadcrumbHighlight() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Breadcrumbs dark={dark} highlightLast>
        <a href={'/docs'}>Documentation</a>
        <a href={'/docs/components'}>Components</a>
        <span>Breadcrumbs</span>
      </Breadcrumbs>
    </div>
  );
}

export function BreadcrumbSeparator() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill={'#787878'}>
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg>

  return (
    <div className={styles.showcaseWrapperCol}>
      <Breadcrumbs dark={dark} separator={'-'}>
        <a href={'/docs'}>Documentation</a>
        <a href={'/docs/components'}>Components</a>
        <span>Breadcrumbs</span>
      </Breadcrumbs>

      <Breadcrumbs dark={dark} separator={icon}>
        <a href={'/docs'}>Documentation</a>
        <a href={'/docs/components'}>Components</a>
        <span>Breadcrumbs</span>
      </Breadcrumbs>
    </div>
  );
}

export function BreadcrumbHidden({custom} : {custom?: boolean}) {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={styles.showcaseWrapper}>
      <Breadcrumbs dark={dark} beforeCollapse={custom ? 3 : 1} afterCollapse={custom ? 1 : 2}>
        <span>Documentation</span>
        <span>Foo</span>
        <span>Bar</span>
        <span>Lorem</span>
        <span>Ipsum</span>
        <span>Components</span>
        <span>Breadcrumbs</span>
      </Breadcrumbs>
    </div>
  );
}