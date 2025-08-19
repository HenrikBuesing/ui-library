import {describe, expect, test, vi} from 'vitest';
import {fireEvent, render} from '@testing-library/react';
import {Pagination} from './pagination';
import React from 'react';

describe('general', () => {
  test('should render pagination component', () => {
    const {container} = render(<Pagination pages={3}/>);
    const pagination = container.getElementsByClassName('pagination')[0];

    expect(pagination).toBeDefined();
    expect(pagination.children.length).toEqual(7);
  });

  test('should render dark mode pagination', () => {
    const {container} = render(<Pagination dark pages={3}/>);
    const pagination = container.getElementsByClassName('dark')[0];

    expect(pagination).toBeDefined();
  });

  test('should render pagination with disabled controls', () => {
    const {container} = render(<Pagination pages={3} disableFirstButton disableLastButton disableNextButton disablePrevButton/>);
    const pagination = container.getElementsByClassName('pagination')[0];

    expect(pagination.children.length).toEqual(3);
  });

  test('should render pagination component with ellipsis', () => {
    const {container} = render(<Pagination pages={9} activePage={5}/>);
    const dots = container.getElementsByClassName('dots');

    expect(dots).toBeDefined();
    expect(dots.length).toEqual(2);
  });

  test('should render pagination with onChange handler', () => {
    const fn = vi.fn();
    
    const {container} = render(<Pagination pages={3} onChange={fn}/>);
    const pagination = container.getElementsByClassName('pagination')[0];
    const last = pagination.lastChild as HTMLLIElement
    
    fireEvent.click(last.lastChild as HTMLButtonElement);
    
    expect(fn).toHaveBeenCalled();
  });
  
  test('should throw error invalid boundary', () => {
    expect(() => {
      render(<Pagination pages={3} boundary={5}/>);
    }).toThrowError('<Pagination/> received an invalid boundary. Expected boundary to be greater than 0 and smaller or equal to pages (3), but got: 5');
  });

  test('should throw error invalid active page', () => {
    expect(() => {
      render(<Pagination pages={3} activePage={-2}/>);
    }).toThrowError('<Pagination/> activePage out of bounds. Expected activePage to be greater than 0 and smaller or equal to pages (3), but got: -2');
  });

  test('should render pagination with aria-labels', () => {
    const labels = {
      first: 'test first',
      last: 'test last',
      next: 'test next',
      prev: 'test prev',
      page: 'test page',
    };
    
    const {container} = render(<Pagination pages={3} ariaLabels={labels}/>);
    const pagination = container.getElementsByClassName('pagination')[0];
    const first = (pagination.firstChild as HTMLLIElement).firstChild as HTMLButtonElement;
    const last = (pagination.lastChild as HTMLLIElement).firstChild as HTMLButtonElement;
    const next = (pagination.children[5] as HTMLLIElement).firstChild as HTMLButtonElement;
    const prev = (pagination.children[1] as HTMLLIElement).firstChild as HTMLButtonElement;
    const page = (pagination.children[2] as HTMLLIElement).firstChild as HTMLButtonElement;

    expect(first.ariaLabel).toEqual(labels.first);
    expect(last.ariaLabel).toEqual(labels.last);
    expect(next.ariaLabel).toEqual(labels.next);
    expect(prev.ariaLabel).toEqual(labels.prev);
    expect(page.ariaLabel).toEqual(`${labels.page} 1`);
  });
});