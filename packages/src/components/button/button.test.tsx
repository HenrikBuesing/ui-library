import {describe, test} from 'vitest';
import {render} from '@testing-library/react';
import {Button} from './button';
import React from 'react';

describe("PrimaryButtonSuccess", () => {
  test("renders", () => {
    render(<Button variant={'primary'} color={'success'} label={'Button'}/>);
  });
});