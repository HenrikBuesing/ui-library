import {beforeEach, describe, expect, type Mock, test, vi} from 'vitest';
import {fireEvent, render} from '@testing-library/react';
import type {RadioOption} from './types';
import React, {useState} from 'react';
import {RadioGroup} from './radio';

let fn: Mock<(...args: string[]) => string>;

beforeEach(() => {
  fn = vi.fn();
});

const optionsA: RadioOption[] = [
  {name: 'Foo', value: 'foo'},
  {name: 'Bar', value: 'bar'},
  {name: 'Baz', value: 'baz'}
];

const optionsB: RadioOption[] = [
  {name: 'Foo', value: 'foo', disabled: true},
  {name: 'Bar', value: 'bar'},
  {name: 'Baz', value: 'baz'}
];

describe('general', () => {
  test('should render radio (all options enabled)', () => {
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

  test('should render radio (first option disabled)', () => {
    const {container} = render(<RadioGroup options={optionsB} selected={''} onChange={() => fn}/>);

    const options = container.getElementsByTagName('input');
    expect(options[0].disabled).toBeTruthy();
    expect(options[1].disabled).toBeFalsy();
    expect(options[2].disabled).toBeFalsy();

    const checks = container.getElementsByClassName('radio notAllowed');
    expect(checks.length).toEqual(1);
  });

  test('should render disabled radio', () => {
    const {container} = render(<RadioGroup options={optionsB} selected={''} onChange={() => fn} disabled={true}/>);

    const options = container.getElementsByTagName('input');
    expect(options[0].disabled).toBeTruthy();
    expect(options[1].disabled).toBeTruthy();
    expect(options[2].disabled).toBeTruthy();
    
    const checks = container.getElementsByClassName('radio notAllowed');
    expect(checks.length).toEqual(3);
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
  
  test('should render radio with custom check color', () => {
    const {container} = render(<RadioGroup options={optionsA} selected={'foo'} onChange={() => fn} color={'red'}/>);
    const checkmarks = container.getElementsByClassName('checkmark');
    const style = getComputedStyle(checkmarks[0]);
    
    expect(style.backgroundColor).toEqual('rgb(255, 0, 0)');
  });

  // test('should render radio in dark mode', () => {
  //   const {container} = render(<Radio options={optionsA} selected={'foo'} selectionChanged={fn} dark={true}/>);
  //   const wrapper = container.getElementsByClassName('radio');
  //
  //   expect(wrapper[0].className).to.include('dark');
  // });
});

function RadioSelect() {
  const [value, setValue] = useState('foo');
  
  return (
    <RadioGroup options={optionsB} selected={value} onChange={(e) => {setValue(e.target.value)}}/>
  );
}