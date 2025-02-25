import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import React, {useState} from 'react';
import {Button} from './button';

describe('general', () => {
  test('should render button using label property', () => {
    render(<Button variant={'text'} label={'Test Label'}/>);

    const button = screen.getByText('Test Label');

    expect(button.textContent).toBeDefined();
    expect(button.children).toHaveLength(0);
  });

  test('should render button using children', () => {
    render(<Button variant={'text'}><span data-testid='child'>Hello World</span></Button>);

    const child = screen.getByTestId('child');

    expect(child).toBeDefined();
    expect(child.textContent).toEqual('Hello World');
  });

  test('should render small button', () => {
    render(<Button variant={'text'} label={'small'} size={'small'}/>);

    const button = screen.getByText('small');

    expect(button.className).toMatch(/\bsmall\b/);
    expect(button.className).toMatch(/\bfontSmall\b/);
  });

  test('should render medium button', () => {
    render(<Button variant={'text'} label={'medium'} size={'medium'}/>);

    const button = screen.getByText('medium');

    expect(button.className).toMatch(/\bmedium\b/);
    expect(button.className).toMatch(/\bfontMedium\b/);
  });

  test('should render large button', () => {
    render(<Button variant={'text'} label={'large'} size={'large'}/>);

    const button = screen.getByText('large');

    expect(button.className).toMatch(/\blarge\b/);
    expect(button.className).toMatch(/\bfontLarge\b/);
  });

  test('should render dark button', () => {
    render(<Button variant={'text'} label={'dark'} dark={true}/>);

    const button = screen.getByText('dark');

    expect(button.className).toMatch(/\bdark\b/);
  });

  test('should render disabled button', () => {
    render(<Button variant={'text'} label={'disabled'} disabled={true}/>);

    const button = screen.getByText('disabled');

    expect(button.className).toMatch(/\bnotAllowed\b/);
    expect(button.className).not.toMatch(/\bpointer\b/)
    expect((button as HTMLButtonElement).disabled).toBeTruthy();
  });

  test('should set count to 1 (onClick)', () => {
    render(<ButtonClickEvent/>);

    const count = screen.getByTestId('count');
    const button = screen.getByText('counter');

    fireEvent.click(button);

    expect(count.textContent).toEqual('1');
  });

  test('should throw error when using unknown size', () => {
    expect(() => {
      // @ts-expect-error -> test using unsupported size
      render(<Button variant={'text'} label={'text'} size={'unknown size'}/>)
    }).toThrowError(`<Button> received an unsupported size. Expected 'small', 'medium' or 'large', but got: unknown size`);
  });
});

describe('variants', () => {
  test('should render primary button', () => {
    render(<Button variant={'primary'} label={'primary'} color={'success'}/>);

    const button = screen.getByText('primary');

    expect(button.className).toMatch(/\bprimary\b/);
  });

  test('should render secondary button', () => {
    render(<Button variant={'secondary'} label={'secondary'}/>);

    const button = screen.getByText('secondary');

    expect(button.className).toMatch(/\bsecondary\b/);
  });

  test('should render outline button', () => {
    render(<Button variant={'outline'} label={'outline'} color={'success'}/>);

    const button = screen.getByText('outline');

    expect(button.className).toMatch(/\boutline\b/);
  });

  test('should render text button', () => {
    render(<Button variant={'text'} label={'text'}/>);

    const button = screen.getByText('text');

    expect(button.className).toMatch(/\btext\b/);
  });
});

describe('color options', () => {
  test('should render success', () => {
    render(<Button variant={'primary'} label={'success'} color={'success'}/>);

    const button = screen.getByText('success');

    expect(button.className).toMatch(/\bsuccess\b/);
    expect(button.style.backgroundColor).toEqual('');
  });

  test('should render warning', () => {
    render(<Button variant={'primary'} label={'warning'} color={'warning'}/>);

    const button = screen.getByText('warning');

    expect(button.className).toMatch(/\bwarning\b/);
    expect(button.style.backgroundColor).toEqual('');
  });

  test('should render error', () => {
    render(<Button variant={'primary'} label={'error'} color={'error'}/>);

    const button = screen.getByText('error');

    expect(button.className).toMatch(/\berror\b/);
    expect(button.style.backgroundColor).toEqual('');
  });

  test('should render blue (custom color)', () => {
    render(<Button variant={'primary'} label={'custom'} color={'#3143c1'}/>);
    const button = screen.getByText('custom');

    // result returns rgb so the provided hex has to be converted to compare
    const rgb = `rgb(${parseInt('31', 16)}, ${parseInt('43', 16)}, ${parseInt('c1', 16)})`;

    expect(button.style.backgroundColor).toBeDefined();
    expect(button.style.backgroundColor).toEqual(rgb);

    expect(button.style.color).toBeDefined();
    expect(button.style.color).toEqual('rgb(255, 255, 255)');
  });

  test('should render blue outline (custom color)', () => {
    render(<Button variant={'outline'} label={'custom'} color={'#3143c1'}/>);
    const button = screen.getByText('custom');

    // result returns rgb so the provided hex has to be converted to compare
    const rgb = `rgb(${parseInt('31', 16)}, ${parseInt('43', 16)}, ${parseInt('c1', 16)})`;

    expect(button.style.color).toBeDefined();
    expect(button.style.color).toEqual(rgb);

    expect(button.style.border).toBeDefined();
    expect(button.style.border).toEqual('#3143c1');
  });

  test('should render secondary', () => {
    render(<Button variant={'secondary'} label={'secondary'}/>);

    const button = screen.getByText('secondary');

    expect(button.style.backgroundColor).toEqual('');
    expect(button.className).not.toMatch(/\bsuccess\b/);
    expect(button.className).not.toMatch(/\bwarning\b/);
    expect(button.className).not.toMatch(/\berror\b/);
  });

  test('should render text', () => {
    render(<Button variant={'text'} label={'text'}/>);

    const button = screen.getByText('text');

    expect(button.style.backgroundColor).toEqual('');
    expect(button.className).not.toMatch(/\bsuccess\b/);
    expect(button.className).not.toMatch(/\bwarning\b/);
    expect(button.className).not.toMatch(/\berror\b/);
  });
});

function ButtonClickEvent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-testid='count'>{count}</div>

      <Button variant={'text'} label={'counter'} onClick={() => setCount(1)}/>
    </>
  );
}
