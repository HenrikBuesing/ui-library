import global from '../../common/styles/global.module.scss';
import React, {useEffect, useRef, useState} from 'react';
import useAddAttribution from '@utils/addAttribution';
import pagination from '../pagination.module.scss';
import styles from './pagePagination.module.scss';
import type {PaginationProps} from './types';
import cls from '@utils/conditionalClass';

export function Pagination(props: PaginationProps) {
  const {
    activePage = 1,
    ariaLabels,
    boundary = 1,
    dark = false,
    disablePrevButton = false,
    disableNextButton = false,
    disableFirstButton = false,
    disableLastButton = false,
    firstButton,
    lastButton,
    nextButton,
    onChange,
    pages,
    prevButton,
    siblings = 1
  } = props;
  
  if (boundary <= 0 || boundary > pages) {
    throw new Error(`<Pagination/> received an invalid boundary. Expected boundary to be greater than 0 and smaller or equal to pages (${pages}), but got: ${boundary}`);
  }
  
  if (activePage < 1 || activePage > pages) {
    throw new Error(`<Pagination/> activePage out of bounds. Expected activePage to be greater than 0 and smaller or equal to pages (${pages}), but got: ${activePage}`);
  }
  
  const [page, setPage] = useState(activePage);
  
  // https://github.com/mui/material-ui/blob/93c97482531a02b700c264844aeea809e5acf935/packages/mui-material/src/usePagination/usePagination.js
  const pageStart = Math.max(Math.min(page - siblings, pages - boundary - siblings * 2 - 1), boundary + 2);
  const pageEnd = Math.min(Math.max(page + siblings, boundary + siblings * 2 + 2), pages - boundary - 1);
  const items = [...new Set([
    ...range(1, boundary),
    ...(pageStart > boundary + 2 ? ['ellipsis-a'] : boundary < pages - boundary ? [boundary + 1] : []),
    ...range(pageStart, pageEnd),
    ...(pageEnd < (pages - boundary - 1) ? ['ellipsis-b'] : pages - boundary > boundary ? [pages - boundary] : []),
    ...range(pages - boundary + 1, pages)
  ])];
  const refs = [
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
  ];
  refs.forEach(useAddAttribution);
  
  function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({length}, (_,  idx) => start + idx);
  }
  
  function handlePageChange(newPage: number) {
    setPage(newPage);
    onChange?.(newPage);
  }

  useEffect(() => {
    setPage(activePage);
  }, [activePage]);
  
  return (
    <nav className={cls([dark && global.dark])}>
      <ul className={cls([pagination.pagination, styles.pagination])}>
        {!disableFirstButton && 
          <li className={styles.item}>
            <button
              className={pagination.button}
              onClick={() => {handlePageChange(1)}}
              disabled={page <= 1}
              aria-label={ariaLabels?.first ?? 'Go to first page'}
            >
              {firstButton ??
                <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'} ref={refs[0]} className={pagination.svg}>
                  <path d={'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z'}/>
                </svg>
              }
            </button>
          </li>
        }
        
        {!disablePrevButton && 
          <li className={styles.item}>
            <button
              className={pagination.button}
              onClick={() => {handlePageChange(page - 1)}}
              disabled={page <= 1}
              aria-label={ariaLabels?.prev ?? 'Go to previous page'}
            >
              {prevButton ??
                <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 320 512'} ref={refs[1]} className={pagination.svg}>
                  <path d={'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'}/>
                </svg>
              }
            </button>
          </li>
        }

        {items.map((item, idx) => (
          <li key={idx} className={styles.item}>
            {typeof item === 'number' ? 
              <button 
                className={cls([page === item && pagination.active, pagination.button])}
                onClick={() => {handlePageChange(item)}}
                aria-label={ariaLabels?.page ? `${ariaLabels.page} ${item}` : `Go to page ${item}`}
              >
                {item}
              </button> :
              <svg className={styles.dots} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
                <circle cx={4} cy={14} r={1}/>
                <circle cx={12} cy={14} r={1}/>
                <circle cx={20} cy={14} r={1}/>
              </svg>
            }
          </li>
        ))}
        
        {!disableNextButton && 
          <li className={styles.item}>
            <button
              className={pagination.button}
              onClick={() => {handlePageChange(page + 1)}}
              disabled={page >= pages}
              aria-label={ariaLabels?.next ?? 'Go to next page'}
            >
              {nextButton ??
                <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 320 512'} ref={refs[2]} className={pagination.svg}>
                  <path d={'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'}/>
                </svg>
              }
            </button>
          </li>
        }
        
        {!disableLastButton && 
          <li className={styles.item}>
            <button 
              className={pagination.button}
              onClick={() => {handlePageChange(pages)}}
              disabled={page >= pages}
              aria-label={ariaLabels?.last ?? 'Go to last page'}
            >
              {lastButton ??
                <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'} ref={refs[3]} className={pagination.svg}>
                  <path d={'M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z'}/>
                </svg>
              }
            </button>
          </li>
        }
      </ul>
    </nav>
  );
}