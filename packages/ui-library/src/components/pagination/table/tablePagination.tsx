import React, {type ChangeEvent, useRef, useState} from 'react';
import global from '../../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
import pagination from '../pagination.module.scss';
import styles from './tablePagination.module.scss';
import type {TablePaginationProps} from './types';
import generateKey from '@utils/generateKey';
import cls from '@utils/conditionalClass';

export function TablePagination(props: TablePaginationProps) {
  const {
    activePage = 1,
    dark = false,
    entries,
    entriesDescription = 'of',
    nextButton,
    nextLabel = 'Go to next page',
    onChange,
    prevButton,
    prevLabel = 'Go to previous page',
    rowLabel = 'Rows per page',
    rows = [10, 25, 50, 100]
  } = props;

  const id = generateKey();
  
  const nextRef = useRef<SVGSVGElement>(null);
  const prevRef = useRef<SVGSVGElement>(null);

  useAddAttribution(nextRef);
  useAddAttribution(prevRef);
  
  const [count, setCount] = useState(rows[0]);
  const pages = Math.ceil(entries / count);
  const [page, setPage] = useState(activePage > pages ? pages : activePage < 0 ? 1 : activePage);
  
  const start = count * (page - 1) + 1;
  const end = count * page;

  function handleRowCountChange(event: ChangeEvent<HTMLSelectElement>) {
    setCount(Number(event.target.value));
    
    handlePageChange(1);
  }
  
  function handlePageChange(newPage: number) {
    setPage(newPage);
    onChange?.(newPage, count);
  }

  return (
    <nav className={cls([pagination.pagination, styles.pagination, dark && global.dark])}>
      <label htmlFor={id}>{rowLabel}</label>
      <select id={id} className={styles.select} value={count} onChange={handleRowCountChange}>
        {rows.map((row, idx) =>
          <option key={idx} value={row}>{row}</option>
        )}
      </select>

      <p>{start}-{end > entries ? entries : end} {entriesDescription} {entries}</p>

      <div className={styles.controls}>
        <button className={pagination.button} onClick={() => {handlePageChange(page - 1)}} disabled={page <= 1} aria-label={nextLabel}>
          {prevButton ??
            <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 320 512'} className={pagination.svg} ref={nextRef}>
              <path d={'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'}/>
            </svg>
          }
        </button>

        <button className={pagination.button} onClick={() => {handlePageChange(page + 1)}} disabled={page >= pages} aria-label={prevLabel}>
          {nextButton ??
            <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 320 512'} className={pagination.svg} ref={prevRef}>
              <path d={'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'}/>
            </svg>
          }
        </button>
      </div>
    </nav>
  );
}