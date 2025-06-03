import {render} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {Skeleton} from './skeleton';
import React from 'react';

describe('general', () => {
  test('should render skeleton', () => {
    const {container} = render(<Skeleton/>);
    const skeleton = container.getElementsByClassName('skeleton animation')[0];
    
    expect(skeleton).toBeDefined();
  });

  test('should render skeleton with disabled animation', () => {
    const {container} = render(<Skeleton disableAnimation/>);
    const skeleton = container.getElementsByClassName('skeleton')[0];

    expect(skeleton.className).toEqual('skeleton');
  });

  test('should render rounded skeleton', () => {
    const {container} = render(<Skeleton rounded={'light'}/>);
    const skeleton = container.getElementsByClassName('skeleton light')[0];

    expect(skeleton).toBeDefined();
  });

  test('should dark mode rounded skeleton', () => {
    const {container} = render(<Skeleton dark/>);
    const skeleton = container.getElementsByClassName('skeleton dark')[0];

    expect(skeleton).toBeDefined();
  });
});