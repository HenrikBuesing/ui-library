import React, {useState} from 'react';
import {render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {Checkbox} from "./Checkbox";

describe('general', () => {
  test('should render checkbox using label prop', () => {
    render(<BasicCheckbox/>);

    const label = screen.getByText('checkbox');
    expect(label).toBeDefined();
    expect(label.children).toHaveLength(0);
  });

  test('should render checkbox using children', () => {
    render(<CheckboxChildren/>);

    const child = screen.getByTestId('child');
    expect(child).toBeDefined();
    expect(child.textContent).toEqual('Hello world');
  });
});

function BasicCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} toggleCheck={setChecked} label={'checkbox'}/>
  );
}

function CheckboxChildren() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} toggleCheck={setChecked}>
      <div data-testid='child'>Hello world</div>
    </Checkbox>
  );
}