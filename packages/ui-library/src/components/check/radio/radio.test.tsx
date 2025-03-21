import {fireEvent, render} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import React, {useState} from 'react';
import {Radio} from './radio';

describe('general', () => {
  test('should render radio', () => {
    const {container} = render(<Radio/>);
    
    const input = container.getElementsByTagName('input')[0];
    expect(input).toBeDefined();
    expect(input.type).toEqual('radio');
  });

  test('should render radio with content', () => {
    const {container} = render(<Radio>test radio content</Radio>);

    const label = container.getElementsByTagName('label')[0];
    expect(label).toBeDefined();
    expect(label.textContent).toEqual('test radio content');
  });

  test('should render radio with custom color', () => {
    const {container} = render(<Radio color={'red'}/>);

    const checkmark = container.getElementsByClassName('checkmark radioCheck')[0] as HTMLDivElement;
    expect(checkmark.style.backgroundColor).toEqual('red');
  });

  test('should render dark mode radio', () => {
    const {container} = render(<Radio dark/>);

    const wrapper = container.getElementsByClassName('checkWrapper dark')[0];
    expect(wrapper).toBeDefined();
  });

  test('should render disabled radio', () => {
    const {container} = render(<Radio disabled/>);

    const input = container.getElementsByTagName('input')[0];
    expect(input.disabled).toBeTruthy();

    const checkmark = container.getElementsByClassName('checkmark radioCheck')[0] as HTMLDivElement;
    expect(checkmark.style.backgroundColor).toEqual('');
  });
  
  test('should check radio', () => {
    const {container} = render(<RadioSelect/>);

    const input = container.getElementsByTagName('input')[0];
    const radio = container.getElementsByClassName('check radio')[0];

    fireEvent.click(radio);
    expect(input.checked).toBeTruthy();
  });
});

function RadioSelect() {
  const [value, setValue] = useState(false);

  return (
    <Radio checked={value} onChange={() => {setValue(true)}}/>
  );
}