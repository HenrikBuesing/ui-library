import {fireEvent, render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, type Mock, test, vi} from 'vitest';
import React, {useState} from 'react';
import {Checkbox} from './checkbox';

let fn: Mock<(...args: boolean[]) => void>;

beforeEach(() => {
  fn = vi.fn();
});

describe('general', () => {
  test('should render checkbox', () => {
    const {container} = render(<Checkbox checked onChange={() => fn}/>);

    const wrapper = container.getElementsByClassName('checkWrapper');
    const checkbox = container.getElementsByClassName('check box');
    
    expect(wrapper[0].children.length).toEqual(1);
    expect(checkbox).toBeDefined();
  });

  test('should render checkbox with children', () => {
    render(<CheckboxChildren/>);

    const child = screen.getByTestId('child');
    expect(child).toBeDefined();
    expect(child.textContent).toEqual('Hello world');
  });

  test('should render checkbox using custom color', () => {
    const {container} = render(<ColorCheckbox/>);

    const checkmark = container.getElementsByClassName('checkmark').item(0);

    expect(checkmark?.getAttribute('style')).toEqual('background-color: red;')
  });

  test('should render checkbox using dark mode', () => {
    const {container} = render(<BasicCheckbox dark={true}/>);

    const checkbox = container.getElementsByClassName('checkWrapper').item(0);
    expect(checkbox?.className).toMatch(/\bdark\b/);
  });

  test('should render disabled checkbox', () => {
    const {container} = render(<BasicCheckbox disabled={true}/>);

    const input = container.getElementsByTagName('input').item(0);
    const checkbox = container.getElementsByClassName('check box')[0];

    fireEvent.click(checkbox);

    expect(input?.disabled).toBeTruthy();
    expect(input?.checked).toBeFalsy();
  });

  test('should check checkbox', () => {
    const {container} = render(<BasicCheckbox />);

    const input = container.getElementsByTagName('input')[0];
    const checkbox = container.getElementsByClassName('check box')[0];

    fireEvent.click(checkbox);
    expect(input.checked).toBeTruthy();
    
    fireEvent.click(checkbox);
    expect(input.checked).toBeFalsy();
  });
});

function BasicCheckbox({dark, disabled} :{dark?: boolean, disabled?: boolean}) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div>{checked}</div>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} dark={dark ?? false} disabled={disabled ?? false} />
    </>
  );
}

function ColorCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} color={'red'}/>
  );
}

function CheckboxChildren() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
      <div data-testid='child'>Hello world</div>
    </Checkbox>
  );
}