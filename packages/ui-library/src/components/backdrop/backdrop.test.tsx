import {describe, expect, type Mock, test, vi} from 'vitest';
import {fireEvent, render} from '@testing-library/react';
import {Backdrop} from './backdrop';
import React from 'react';

describe('general', () => {
  test('should render backdrop', () => {
    render(<Backdrop open={true}/>);
    
    const backdrop = document.body.getElementsByClassName('backdrop')[0];
    expect(backdrop).toBeDefined();
  });

  test('should render backdrop with content', () => {
    render(<Backdrop open={true}><div>test content</div></Backdrop>);

    const backdrop = document.body.getElementsByClassName('backdrop')[0].firstChild;
    
    expect(backdrop).toBeDefined();
    expect(backdrop?.textContent).toEqual('test content');
  });

  test('should not render backdrop', () => {
    render(<Backdrop open={false}/>);
    
    const backdrop = document.body.getElementsByClassName('backdrop')[0];
    expect(backdrop).not.toBeDefined();
  });

  test('should render backdrop with z-index', () => {
    render(<Backdrop open={true} zIndex={5}/>);
    
    const backdrop = document.body.getElementsByClassName('backdrop')[0] as HTMLDivElement;
    expect(backdrop.style.zIndex).toEqual('5');
  });

  test('should render backdrop with click handler', () => {
    const fn: Mock<(...args: string[]) => void> = vi.fn();

    render(<Backdrop open={true} onClick={() => {fn()}}/>);

    const backdrop = document.body.getElementsByClassName('backdrop')[0];
    fireEvent.click(backdrop);

    expect(fn).toHaveBeenCalled();
  });
});