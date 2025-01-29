import {beforeEach, describe, expect, type Mock, test, vi} from 'vitest';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {Modal} from './modal';
import React from 'react';

let fn: Mock<(...args: any[]) => any>;

beforeEach(() => {
  fn = vi.fn();
});

describe('general', () => {
  test('should render notification', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm label'}/>);
    
    const header = container.getElementsByClassName('header');
    expect(header[0].textContent).toEqual('Notify');
    
    const content = container.getElementsByClassName('content');
    expect(content[0]).toBeDefined();
    
    const text = content[0].getElementsByClassName('modalText');

    expect(text.length).toEqual(1);
    expect(text[0].textContent).toEqual('test message');
    
    const buttonWrapper = content[0].getElementsByClassName('buttonWrapper');
    expect(buttonWrapper[0].children.length).toEqual(1);
    
    const button = buttonWrapper[0].firstChild;
    expect(button?.textContent).toEqual('confirm label');
  });
  
  test('should render notification with multiple messages', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message', 'testing', 'foo']} confirmAction={() => {}} confirmLabel={'confirm label'}/>);

    const content = container.getElementsByClassName('content');
    expect(content).toBeDefined();
    
    const text = content[0].getElementsByTagName('p');

    expect(text.length).toEqual(3);
    expect(text[0].textContent).toEqual('test message');
    expect(text[1].textContent).toEqual('testing');
    expect(text[2].textContent).toEqual('foo');
  });

  test('should execute confirm action', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm label'}/>);

    const buttonWrapper = container.getElementsByClassName('buttonWrapper').item(0) as Element;
    const button = buttonWrapper.getElementsByTagName('button').item(0) as Element;

    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
  
  test('should render notification with timeout', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm label'} timeout={500}/>);
    
    const progressWrapper = container.getElementsByClassName('progressWrapper');
    expect(progressWrapper).toBeDefined();
    
    waitFor(() => {expect(fn).toHaveBeenCalled()}, {timeout: 500});
  });
  
  test('should render question', () => {});
  
  test('should execute confirm action after timeout', () => {});
  
  test('should execute cancel action', () => {});

  test('should render custom content', () => {});
  
  test('should render custom content and timeout', () => {});
  
  test('should execute confirm action (custom content and timeout)', () => {});
});