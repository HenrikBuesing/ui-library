import {fireEvent, render} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import {Switch} from './switch';
import React from 'react';

describe('general', () => {
  test('should render switch', () => {
    const {container} = render(<Switch/>);
    const switcher = container.getElementsByClassName('switch')[0];

    expect(switcher).toBeDefined();
  });

  test('should render dark mode switch', () => {
    const {container} = render(<Switch dark/>);
    const switcher = container.getElementsByClassName('switch dark')[0];

    expect(switcher).toBeDefined();
  });

  test('should render small switch', () => {
    const {container} = render(<Switch size={'small'}/>);
    const switcher = container.getElementsByClassName('switch small')[0];

    expect(switcher).toBeDefined();
  });

  test('should render switch with custom color', () => {
    const {container} = render(<Switch color={'red'}/>);
    const switcher = container.getElementsByClassName('switch')[0] as HTMLDivElement;

    expect(switcher.getAttribute('style')).toEqual('--uil-switch-color: red;');
  });
  
  test('should check switch', () => {
    const fn = vi.fn();
    const {container} = render(<Switch onChange={fn}/>);
    const input = container.getElementsByTagName('input')[0];
    const thumb = container.getElementsByClassName('thumbWrapper')[0];
    
    fireEvent.click(thumb);

    expect(input.checked).toBeTruthy();
    expect(fn).toHaveBeenCalled();
  });
});