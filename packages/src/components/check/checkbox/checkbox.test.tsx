import React, {useState} from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
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

  test('should render checkbox using custom color', () => {
    const {container} = render(<ColorCheckbox/>);

    const checkmark = container.querySelector('.checkmark') as HTMLDivElement;

    expect(checkmark.style.backgroundColor).toBeDefined();
    expect(checkmark.style.backgroundColor).toEqual('red');
  });

  test('should render checkbox using dark mode', () => {
    const {container} = render(<BasicCheckbox dark={true}/>);

    const checkbox = container.querySelector('.checkbox') as HTMLDivElement;
    const label = screen.getByText('checkbox') as HTMLLabelElement;

    expect(checkbox.className).toMatch(/\bdark\b/);
    expect(label.className).toMatch(/\bdark\b/);
  });

  test('should render disabled checkbox', () => {
    const {container} = render(<BasicCheckbox disabled={true}/>);

    const input = screen.getByRole('checkbox') as HTMLInputElement;
    const checkbox = container.querySelector('.checkbox') as HTMLDivElement;

    fireEvent.click(checkbox);

    expect(input.disabled).toBeTruthy();
    expect(input.checked).toBeFalsy();
  });

  test('should check checkbox', () => {
    const {container} = render(<BasicCheckbox />);

    const input = screen.getByRole('checkbox') as HTMLInputElement;
    const checkbox = container.querySelector('.checkbox') as HTMLDivElement;

    // check with wrapper div
    fireEvent.click(checkbox);
    expect(input.checked).toBeTruthy();
    
    // uncheck with input (is visually hidden but should technically still work)
    fireEvent.click(input);
    expect(input.checked).toBeFalsy();
  });
});

function BasicCheckbox({dark, disabled} :{dark?: boolean, disabled?: boolean}) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div>{checked}</div>
      <Checkbox checked={checked} toggleCheck={setChecked} label={'checkbox'} dark={dark ?? false} disabled={disabled ?? false} />
    </>
  );
}

function ColorCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} toggleCheck={setChecked} label={'checkbox'} color={'red'}/>
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