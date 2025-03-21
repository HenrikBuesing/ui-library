import {beforeEach, describe, expect, type Mock, test, vi} from 'vitest';
import {fireEvent, render} from '@testing-library/react';
import type {RadioOption} from './types';
import React, {useState} from 'react';
import {RadioGroup} from './radioGroup';

let fn: Mock<(...args: string[]) => string>;

beforeEach(() => {
  fn = vi.fn();
});

const optionsA: RadioOption[] = [
  {label: 'Foo', value: 'foo'},
  {label: 'Bar', value: 'bar'},
  {label: 'Baz', value: 'baz'}
];

const optionsB: RadioOption[] = [
  {label: 'Foo', value: 'foo', disabled: true},
  {label: 'Bar', value: 'bar'},
  {label: 'Baz', value: 'baz'}
];

describe('general', () => {
  test('should render radioGroup (all options enabled)', () => {
    const {container} = render(<RadioGroup options={optionsA} selected={''} onChange={() => fn}/>);

    const options = container.getElementsByClassName('checkWrapper');
    expect(options.length).toEqual(3);

    const inputs = container.getElementsByTagName('input');
    expect(inputs[0].value).toEqual('foo');
    expect(inputs[1].value).toEqual('bar');
    expect(inputs[2].value).toEqual('baz');

    const labels = container.getElementsByTagName('label');
    expect(labels[0].textContent).toEqual('Foo');
    expect(labels[1].textContent).toEqual('Bar');
    expect(labels[2].textContent).toEqual('Baz');
  });

  test('should render radioGroup (first option disabled)', () => {
    const {container} = render(<RadioGroup options={optionsB} selected={''} onChange={() => fn}/>);

    const options = container.getElementsByTagName('input');
    expect(options[0].disabled).toBeTruthy();
    expect(options[1].disabled).toBeFalsy();
    expect(options[2].disabled).toBeFalsy();
  });

  test('should render disabled radioGroup', () => {
    const {container} = render(<RadioGroup options={optionsB} selected={''} onChange={() => fn} disabled/>);

    const options = container.getElementsByTagName('input');
    expect(options[0].disabled).toBeTruthy();
    expect(options[1].disabled).toBeTruthy();
    expect(options[2].disabled).toBeTruthy();
  });

  test('should check different radios', () => {
    const {container} = render(<RadioSelect/>);
    const options = container.getElementsByTagName('input');

    expect(options[0].checked).toBeTruthy();

    //check via click on input
    fireEvent.click(options[1]);
    expect(options[0].checked).toBeFalsy();
    expect(options[1].checked).toBeTruthy();

    //check via click on wrapper
    const labels = container.getElementsByClassName('radio');
    fireEvent.click(labels[2]);
    expect(options[1].checked).toBeFalsy();
    expect(options[2].checked).toBeTruthy();
  });

  test('should render radioGroup with custom check color', () => {
    const {container} = render(<RadioGroup options={optionsA} selected={'foo'} onChange={() => fn} color={'red'}/>);
    const checkmarks = container.getElementsByClassName('checkmark') as HTMLCollectionOf<HTMLDivElement>;

    expect(checkmarks[0].style.backgroundColor).toEqual('red');
    expect(checkmarks[1].style.backgroundColor).toEqual('red');
    expect(checkmarks[2].style.backgroundColor).toEqual('red');
  });
});

function RadioSelect() {
  const [value, setValue] = useState('foo');

  return (
    <RadioGroup options={optionsB} selected={value} onChange={(e) => {setValue(e.target.value)}}/>
  );
}