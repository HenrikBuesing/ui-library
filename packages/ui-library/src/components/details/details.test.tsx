import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import {Details} from './details';
import React from 'react';

describe('general', () => {
  test('should render details', () => {
    const {container} = render(<Details summary={'Testing'}>Hello World</Details>);

    const detail = container.getElementsByClassName('details');
    expect(detail).toBeDefined();
  });

  test('should render details in dark mode', () => {
    const {container} = render(<Details summary={'Testing'} dark>Hello World</Details>);

    const detail = container.getElementsByClassName('details dark');
    expect(detail).toBeDefined();
  });
});