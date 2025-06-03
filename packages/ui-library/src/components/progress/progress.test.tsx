import {CircularProgress} from './circularProgress';
import {LinearProgress} from './linearProgress';
import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import React from 'react';

describe('circularProgress', () => {
  test('should render indeterminate progress', () => {
    const {container} = render(<CircularProgress/>);
    const progress = container.getElementsByClassName('circularProgress indeterminate')[0];
    
    expect(progress).toBeDefined();
  });

  test('should render status colored progress', () => {
    const {container} = render(<CircularProgress color={'error'}/>);
    const spinner = container.getElementsByClassName('spinner error')[0];

    expect(spinner).toBeDefined();
  });

  test('should render custom colored progress', () => {
    const {container} = render(<CircularProgress color={'red'}/>);
    const spinner = container.getElementsByClassName('spinner')[0] as SVGCircleElement;

    expect(spinner.getAttribute('stroke')).toEqual('red');
  });

  test('should render determinate progress', () => {
    const {container} = render(<CircularProgress value={50}/>);
    const spinner = container.getElementsByClassName('spinner')[0];

    expect(spinner.getAttribute('stroke-dashoffset')).toEqual('60px');
  });

  test('should render dark progress', () => {
    const {container} = render(<CircularProgress dark={true}/>);
    const progress = container.getElementsByClassName('circularProgress dark')[0];

    expect(progress).toBeDefined();
  });

  test('should throw error invalid value', () => {
    expect(() => {
      render(<CircularProgress value={200}/>);
    }).toThrowError('invalid value. Expected 100 >= value >= 0, but got 200');
  });
});

describe('linearProgress', () => {
  test('should render indeterminate progress', () => {
    const {container} = render(<LinearProgress/>);
    const progressFirst = container.getElementsByClassName('progressBar first')[0];
    const progressSecond = container.getElementsByClassName('progressBar second')[0];

    expect(progressFirst).toBeDefined();
    expect(progressSecond).toBeDefined();
  });

  test('should render status colored progress', () => {
    const {container} = render(<LinearProgress color={'error'}/>);
    const progress = container.getElementsByClassName('linearProgress error')[0];

    expect(progress).toBeDefined();
  });

  test('should render custom colored progress', () => {
    const {container} = render(<LinearProgress color={'red'}/>);
    
    const progress = container.getElementsByClassName('linearProgress custom')[0];
    expect(progress).toBeDefined();

    const progressBar = container.getElementsByClassName('progressBar')[0] as HTMLDivElement;
    expect(progressBar.style.backgroundColor).toEqual('red');
  });

  test('should render determinate progress', () => {
    const {container} = render(<LinearProgress value={50}/>);
    const spinner = container.getElementsByClassName('progressBar')[0] as HTMLDivElement;

    expect(spinner.style.right).toEqual('50%');
  });

  test('should render dark progress', () => {
    const {container} = render(<LinearProgress dark={true}/>);
    const progress = container.getElementsByClassName('linearProgress dark')[0];

    expect(progress).toBeDefined();
  });

  test('should throw error invalid value', () => {
    expect(() => {
      render(<LinearProgress value={-50}/>);
    }).toThrowError('invalid value. Expected 100 >= value >= 0, but got -50');
  });
});