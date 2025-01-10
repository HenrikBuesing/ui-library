import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import {Modal} from './modal';
import React from 'react';

describe('general', () => {
  test('should render notification', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={() => {}} confirmLabel={'confirm label'}/>);
    
    const header = container.querySelector('.header');
    expect(header?.textContent).toEqual('Notify');
    
    const content = container.querySelector('.content');
    const text = content.querySelectorAll('p');

    expect(text.length).toEqual(1);
    expect(text[0]?.textContent).toEqual('test message');
    
    const buttonWrapper = content.querySelector('.buttonWrapper');
    expect(buttonWrapper?.children.length).toEqual(1);
    
    const button = buttonWrapper.firstChild as HTMLButtonElement;
    expect(button.textContent).toEqual('confirm label');
  });
  
  test('should render notification with multiple messages', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message', 'testing', 'foo']} confirmAction={() => {}} confirmLabel={'confirm label'}/>);

    const content = container.querySelector('.content');
    const text = content.querySelectorAll('p');

    expect(text.length).toEqual(3);
    expect(text[0]?.textContent).toEqual('test message');
    expect(text[1]?.textContent).toEqual('testing');
    expect(text[2]?.textContent).toEqual('foo');
  });
  
  test('should render notification with timeout', () => {});
  
  test('should render question', () => {});
  
  test('should execute confirm action', () => {});
  
  test('should execute confirm action after timeout', () => {});
  
  test('should execute cancel action', () => {});

  test('should render custom content', () => {});
  
  test('should render custom content and timeout', () => {});
  
  test('should execute confirm action (custom content and timeout)', () => {});
});