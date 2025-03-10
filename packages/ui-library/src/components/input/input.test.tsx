import {render, screen} from '@testing-library/react';
import {InputDecorator} from './inputDecorator';
import {describe, expect, test} from 'vitest';
import {Input} from './input';
import React from 'react';

describe('input', () => {
  test('should render outlined input', () => {
    const {container} = render(<Input label={'outlined'} variant={'outlined'}/>);

    const wrapper = container.getElementsByClassName('outlined');
    expect(wrapper).toBeDefined();

    const label = container.getElementsByClassName('label');
    expect(label.length).toEqual(1);

    expect(label[0].textContent).toEqual('outlined');
  });

  test('should render basic input', () => {
    const {container} = render(<Input label={'basic'} variant={'basic'}/>);

    const wrapper = container.getElementsByClassName('basic');
    expect(wrapper).toBeDefined();

    const label = container.getElementsByClassName('label');
    expect(label.length).toEqual(1);

    expect(label[0].textContent).toEqual('basic');
  });

  test('should render input with helpText', () => {
    const {container} = render(<Input label={'basic'} variant={'basic'} helpText={'helpText'}/>);

    const help = container.getElementsByClassName('helpText');
    expect(help[0].textContent).toEqual('helpText');

    const input = container.getElementsByClassName('input')[0] as HTMLInputElement;

    expect(input.getAttribute('aria-describedby')).toEqual(help[0].id);
  });

  test('should render input with children', () => {
    const {container} = render(
      <Input label={'basic'} variant={'basic'}>
        <InputDecorator>testing</InputDecorator>
      </Input>
    );

    const decorator = container.getElementsByClassName('decorator');
    expect(decorator).toBeDefined();
  });

  test('should render required input', () => {
    const {container} = render(<Input label={'basic'} variant={'basic'} required/>);

    const asterisk = container.getElementsByClassName('asterisk');
    expect(asterisk).toBeDefined();
  });

  test('should render disabled input', () => {
    const {container} = render(<Input label={'basic'} variant={'basic'} disabled/>);

    const input = container.getElementsByClassName('input')[0] as HTMLInputElement;
    expect(input.disabled).toBeTruthy();
  });

  test('should render error input', () => {
    const {container} = render(<Input label={'basic'} variant={'basic'} helpText={'error'} error/>);

    const wrapper = container.getElementsByClassName('inputWrapper error');
    expect(wrapper[0]).toBeDefined();

    const help = container.getElementsByClassName('helpText error');
    expect(help[0]).toBeDefined();
  });

  test('should throw error invalid children', () => {
    expect(() => {
      render(<Input label={'basic'} variant={'basic'}><div>testing</div></Input>);
    }).toThrowError('<Input> received an invalid child. Expected <InputDecorator />, but got: div.');

    expect(() => {
      // @ts-expect-error -> test using unsupported child
      render(<Input label={'basic'} variant={'basic'}>foo</Input>);
    }).toThrowError('<Input> received an invalid child. Expected <InputDecorator />, but got: string.');
  });
});

describe('InputDecorator', () => {
  test('should render decorator with string', () => {
    const {container} = render(<InputDecorator>testing</InputDecorator>);

    const decorator = container.getElementsByClassName('decorator end visible');
    expect(decorator[0]).toBeDefined();

    expect(decorator[0].children.length).toEqual(0);
    expect(decorator[0].textContent).toEqual('testing');
  });

  test('should render start-aligned decorator', () => {
    const {container} = render(<InputDecorator position={'start'}>testing</InputDecorator>);

    const decorator = container.getElementsByClassName('decorator start');
    expect(decorator[0]).toBeDefined();
  });

  test('should render decorator onFocus', () => {
    const {container} = render(<InputDecorator onFocus>testing</InputDecorator>);

    const decorator = container.getElementsByClassName('decorator end focus');
    expect(decorator[0]).toBeDefined();
  });

  test('should render decorator with icon', () => {
    render(
      <InputDecorator>
        <img alt={'test'} src={'test.png'}/>
      </InputDecorator>
    );

    const image = screen.getByAltText('test');
    expect(image).toBeDefined();
  });
});