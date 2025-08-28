import {fireEvent, render} from '@testing-library/react';
import {TablePagination} from './tablePagination';
import {describe, expect, test, vi} from 'vitest';
import React from 'react';

describe('general', () => {
  const entries = 50;
  const rows = [10, 25, 50];

  test('should render pagination', () => {
    const {container} = render(<TablePagination entries={entries} rows={rows} activePage={1}/>);
    const pagination = container.getElementsByClassName('pagination')[0];
    expect(pagination).toBeDefined();

    const prevButton = pagination.getElementsByClassName('button')[0] as HTMLButtonElement;
    expect(prevButton.disabled).toBeTruthy();

    const nextButton = pagination.getElementsByClassName('button')[1] as HTMLButtonElement;
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should update row count and call onChange', () => {
    const onChange = vi.fn();
    const {container} = render(<TablePagination entries={entries} rows={rows} onChange={onChange}/>);

    const select = container.getElementsByTagName('select')[0];
    fireEvent.change(select, {target: {value: '25'}});

    const text = container.getElementsByTagName('p')[0];
    expect(text.textContent).toEqual('1-25 of 50');

    expect(onChange).toHaveBeenCalledWith(1, 25);
  });

  test('should call onChange when clicking on buttons', () => {
    const onChange = vi.fn();
    const {container} = render(<TablePagination entries={entries} rows={rows} onChange={onChange}/>);

    const nextButton = container.getElementsByClassName('button')[1];
    fireEvent.click(nextButton);

    expect(onChange).toHaveBeenCalledWith(2, 10);

    const prevButton = container.getElementsByClassName('button')[0];
    expect(prevButton.disabled).toBeFalsy();

    fireEvent.click(prevButton);
    expect(onChange).toHaveBeenCalledWith(1, 10);
  });

  test('should render dark mode pagination', () => {
    const {container} = render(<TablePagination entries={entries} dark={true}/>);
    const nav = container.getElementsByClassName('pagination dark')[0];
    expect(nav).toBeDefined();
  });

  test('should set activePage to pages if activePage > pages', () => {
    const {container} = render(<TablePagination entries={entries} activePage={99}/>);
    const text = container.getElementsByTagName('p')[0];
    expect(text.textContent).toEqual('41-50 of 50');

    const prevButton = container.getElementsByClassName('button')[0];
    expect(prevButton.disabled).toBeFalsy();

    const nextButton = container.getElementsByClassName('button')[1];
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should set activePage to 1 if activePage < 1', () => {
    const {container} = render(<TablePagination entries={entries} activePage={0}/>);
    const text = container.getElementsByTagName('p')[0];
    expect(text.textContent).toEqual('1-10 of 50');

    const prevButton = container.getElementsByClassName('button')[0];
    expect(prevButton.disabled).toBeTruthy();
  });
});