import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import React, {useState} from 'react';
import {Button} from './button';

describe('general', () => {
  test('should render button', () => {
    render(<Button variant={'text'}>Hello World</Button>);

    const button = screen.getByText('Hello World');
    expect(button).toBeDefined();
    expect(button.textContent).toEqual('Hello World');
  });

  test('should render rounded button', () => {
    const {container} = render(<Button variant={'text'} rounded>Hello World</Button>);

    const button = container.getElementsByClassName('button rounded')[0];
    expect(button).toBeDefined();
  });

  test('should render link button', () => {
    render(<Button variant={'text'} href={'/test'}>link</Button>);

    const button = screen.getByRole('link');

    expect(button).toBeDefined();
    expect(button.getAttribute('href')).toEqual('/test');
  });

  test('should render small button', () => {
    render(<Button variant={'text'} size={'small'}>small</Button>);

    const button = screen.getByText('small');

    expect(button.className).toMatch(/\bsmall\b/);
    expect(button.className).toMatch(/\bfontSmall\b/);
  });

  test('should render medium button', () => {
    render(<Button variant={'text'} size={'medium'}>medium</Button>);

    const button = screen.getByText('medium');

    expect(button.className).toMatch(/\bmedium\b/);
    expect(button.className).toMatch(/\bfontMedium\b/);
  });

  test('should render large button', () => {
    render(<Button variant={'text'} size={'large'}>large</Button>);

    const button = screen.getByText('large');

    expect(button.className).toMatch(/\blarge\b/);
    expect(button.className).toMatch(/\bfontLarge\b/);
  });

  test('should render dark button', () => {
    render(<Button variant={'text'} dark>dark button</Button>);

    const button = screen.getByText('dark button');
    expect(button.className).toMatch(/\bdark\b/);
  });

  test('should render disabled button', () => {
    render(<Button variant={'text'} disabled>disabled</Button>);

    const button = screen.getByText('disabled');

    expect(button.className).toMatch(/\bdisabled\b/);
    expect((button as HTMLButtonElement).disabled).toBeTruthy();
    expect(button.ariaDisabled).toBeTruthy();
    expect(button.tabIndex).toEqual(-1);
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
      render(<Button variant={'text'} size={'unknown size'}>test</Button>)
    }).toThrowError(`Error: unsupported size. Expected 'small', 'medium' or 'large', but got: unknown size`);
  });

  test('should throw error when using invalid color format', () => {
    expect(() => {
      // @ts-expect-error -> test using invalid color format
      render(<Button variant={'text'} color={'invalid'}>test</Button>)
    }).toThrowError(`<Button> received an invalid hex color format. Expected '#000' or '#000000', but got: invalid`);
  });
});

describe('variants', () => {
  test('should render filled button', () => {
    render(<Button variant={'filled'} color={'success'}>primary</Button>);

    const button = screen.getByText('primary');

    expect(button.className).toMatch(/\bfilled\b/);
  });

  test('should render outlined button', () => {
    render(<Button variant={'outlined'} color={'success'}>outline</Button>);

    const button = screen.getByText('outline');

    expect(button.className).toMatch(/\boutlined\b/);
  });

  test('should render text button', () => {
    render(<Button variant={'text'}>text</Button>);

    const button = screen.getByText('text');

    expect(button.className).toMatch(/\btext\b/);
  });
});

describe('color options', () => {
  test('should render success', () => {
    render(<Button variant={'filled'} color={'success'}>success</Button>);

    const button = screen.getByText('success');

    expect(button.className).toMatch(/\bsuccess\b/);
    expect(button.style.backgroundColor).toEqual('');
  });

  test('should render warning', () => {
    render(<Button variant={'filled'} color={'warning'}>warning</Button>);

    const button = screen.getByText('warning');

    expect(button.className).toMatch(/\bwarning\b/);
    expect(button.style.backgroundColor).toEqual('');
  });

  test('should render error', () => {
    render(<Button variant={'filled'} color={'error'}>error</Button>);

    const button = screen.getByText('error');

    expect(button.className).toMatch(/\berror\b/);
    expect(button.style.backgroundColor).toEqual('');
  });

  test('should render blue (custom color)', () => {
    render(<Button variant={'filled'} color={'#3143c1'}>custom</Button>);
    const button = screen.getByText('custom');

    expect(button.style.getPropertyValue('--uil-button-color')).toEqual('#3143c1');
    expect(button.style.getPropertyValue('--uil-button-font-color')).toEqual('#ffffff');
  });

  test('should render blue outline (custom color)', () => {
    render(<Button variant={'outlined'} color={'#3143c1'}>custom</Button>);
    const button = screen.getByText('custom');

    expect(button.style.getPropertyValue('--uil-button-color')).toEqual('#3143c1');
  });

  test('should render blue text (custom color)', () => {
    render(<Button variant={'text'} color={'#3143c1'}>custom</Button>);
    const button = screen.getByText('custom');

    expect(button.style.getPropertyValue('--uil-button-color')).toEqual('#3143c1');
  });

  test('should render default style', () => {
    render(<Button variant={'filled'}>default</Button>);

    const button = screen.getByText('default');

    expect(button.className).not.toMatch(/\bsuccess\b/);
    expect(button.className).not.toMatch(/\bwarning\b/);
    expect(button.className).not.toMatch(/\berror\b/);
  });

  test('should render text', () => {
    render(<Button variant={'text'}>text</Button>);

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

      <Button variant={'text'} onClick={() => setCount(1)}>
        counter
      </Button>
    </>
  );
}