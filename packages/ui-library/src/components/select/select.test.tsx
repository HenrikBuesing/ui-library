import {render, screen, fireEvent} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import type {SelectProps} from './types';
import React, {useState} from 'react';
import {Select} from './select';

const options: SelectProps['options'] = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'},
];

describe('Select component', () => {
  test('should render placeholder', () => {
    render(<Select value={''} onChange={() => {
    }} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox', {name: /pick a fruit/i});
    expect(button).toBeDefined();
  });

  test('should open the list when clicking the trigger', () => {
    render(<Select value={''} onChange={() => {
    }} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');
    fireEvent.click(button);

    const list = screen.getByRole('listbox');
    expect(list).toBeDefined();
    const firstOption = screen.getByText('Apple');
    expect(firstOption).toBeDefined();
  });

  test('should select an option when clicking it', () => {
    const handleChange = vi.fn();
    render(<Select value={''} onChange={handleChange} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');
    fireEvent.click(button);

    const banana = screen.getByText('Banana');
    fireEvent.click(banana);

    expect(handleChange).toHaveBeenCalledWith('banana');
  });

  test('should update selected value in a controlled wrapper', () => {
    const Controlled = () => {
      const [value, setValue] = useState('');
      return <Select value={value} onChange={setValue} options={options} placeholder='Pick a fruit'/>;
    };

    render(<Controlled/>);
    const button = screen.getByRole('combobox');

    fireEvent.click(button);
    const orange = screen.getByText('Orange');
    fireEvent.click(orange);

    expect(button.textContent).toBe('Orange');
  });

  test('should open and select first option with keyboard', () => {
    const handleChange = vi.fn();
    render(<Select value='' onChange={handleChange} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');

    fireEvent.keyDown(button, {key: 'ArrowDown'});
    fireEvent.keyDown(button, {key: 'Enter'});

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('apple');
  });

  test('should move active option with ArrowDown when open', () => {
    const handleChange = vi.fn();
    render(<Select value={''} onChange={handleChange} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');

    fireEvent.click(button);
    fireEvent.keyDown(button, {key: 'ArrowDown'});
    fireEvent.keyDown(button, {key: 'Enter'});

    expect(handleChange).toHaveBeenCalledWith('banana');
  });

  test('should skip disabled options when navigating', () => {
    const handleChange = vi.fn();
    const opts = [
      {value: 'apple', label: 'Apple', disabled: true},
      {value: 'banana', label: 'Banana'},
    ];

    render(<Select value={''} onChange={handleChange} options={opts} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');

    fireEvent.keyDown(button, {key: 'ArrowDown'});
    fireEvent.keyDown(button, {key: 'Enter'});

    expect(handleChange).toHaveBeenCalledWith('banana');
  });

  test('should navigate upwards with ArrowUp', () => {
    const handleChange = vi.fn();
    render(<Select value={''} onChange={handleChange} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');

    fireEvent.click(button);
    fireEvent.keyDown(button, {key: 'ArrowDown'});
    fireEvent.keyDown(button, {key: 'ArrowUp'});
    fireEvent.keyDown(button, {key: 'Enter'});

    expect(handleChange).toHaveBeenCalledWith('apple');
  });

  test('should close the list when clicking outside', () => {
    render(
      <div>
        <Select value={''} onChange={() => {
        }} options={options} placeholder='Pick a fruit'/>
        <button>Outside</button>
      </div>
    );

    const selectButton = screen.getByRole('combobox', {name: /pick a fruit/i});
    fireEvent.click(selectButton);

    const list = screen.getByRole('listbox');
    expect(list).toBeDefined();

    const outside = screen.getByText('Outside');
    fireEvent.pointerDown(outside);

    expect(list.getAttribute('class')?.includes('open')).toBe(false);
    expect(selectButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('should close list on Escape', () => {
    render(<Select value={''} onChange={() => {
    }} options={options} placeholder='Pick a fruit'/>);

    const button = screen.getByRole('combobox');
    fireEvent.click(button);

    expect(button.getAttribute('aria-expanded')).toBe('true');

    fireEvent.keyDown(button, {key: 'Escape'});

    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
