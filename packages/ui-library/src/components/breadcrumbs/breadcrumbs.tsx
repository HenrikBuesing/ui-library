import React, {Children, type ReactNode, useState} from 'react';
import global from '../common/styles/global.module.scss';
import styles from './breadcrumbs.module.scss';
import type {BreadcrumbsType} from './types';
import cls from '@utils/conditionalClass';

export function Breadcrumbs(props: BreadcrumbsType) {
  const {
    afterCollapse = 2,
    beforeCollapse = 1,
    children,
    dark = false,
    highlightLast = false,
    maxEntries = 5,
    separator = '/'
  } = props;
  
  const allEntries = Children.toArray(children).map((entry, idx) => (
    <li className={styles.li} key={idx}>{entry}</li>
  ));
  const [expand, setExpand] = useState(false);
  
  function addSeparators(items: ReactNode[]) {
    return items.reduce<ReactNode[]>((prev, curr, idx) => {
      prev.push(curr);
      
      if (idx < items.length - 1) prev.push(<li key={`sep-${idx}`} aria-hidden>{separator}</li>);
      
      return prev;
    }, []);
  }
  
  function sliceItems() {
    if (beforeCollapse + afterCollapse >= allEntries.length) {
      console.error(`<Breadcrumbs/> received an invalid collapse configuration. Expected (beforeCollapse + afterCollapse) < allEntries, but got: ${beforeCollapse + afterCollapse} >= ${allEntries.length}.`);
      return allEntries;
    }
    
    return [
      ...allEntries.slice(0, beforeCollapse),
      <li className={styles.li} key={'hidden-entries'}>
        <button className={styles.hiddenEntries} type={'button'} onClick={() => {setExpand(true)}}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="04" cy="18" r="1"/>
            <circle cx="12" cy="18" r="1"/>
            <circle cx="20" cy="18" r="1"/>
          </svg>
        </button>
      </li>,
      ...allEntries.slice(allEntries.length - afterCollapse, allEntries.length),
    ];
  }
  
  return (
    <nav aria-label={props['aria-label']}>
      <ol className={cls([styles.breadcrumbs, highlightLast && styles.highlight, dark && global.dark])}>
        {addSeparators(expand || allEntries.length <= maxEntries ? allEntries : sliceItems())}
      </ol>
    </nav>
  );
}