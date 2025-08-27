import type {TablePaginationProps} from './types';
import React, {type ChangeEvent, useState} from 'react';

export function TablePagination(props: TablePaginationProps) {
  const {
    activePage,
    dark,
    entries,
    nextButton,
    onChange,
    prevButton,
    rowsSelection
  } = props;

  const rows = rowsSelection ?? [10, 25, 50, 100];

  const [rowCount, setRowCount] = useState(rows[0]);
  const [currentRows, setCurrentRows] = useState(0);

  function handleRowCountChange(event: ChangeEvent<HTMLSelectElement>) {
    setRowCount(Number(event.target.value));
    // TODO update current visible rows
  }

  return (
    <nav>
      <label form={'row-select'}>rows per page</label>
      <select id={'row-select'} value={rowCount} onChange={handleRowCountChange}>
        {rows.map((row, idx) =>
          <option key={idx} value={row}>{row}</option>
        )}
      </select>

      <p>{currentRows} of {entries}</p>
    </nav>
  );
}