import {beforeEach, describe, expect, type Mock, test, vi} from 'vitest';
import {fireEvent, render} from '@testing-library/react';
import {Modal} from './modal';
import React from 'react';

let fn: Mock<(...args: string[]) => string>;
let fnC: Mock<(...args: string[]) => string>;

beforeEach(() => {
  fn = vi.fn();
  fnC = vi.fn();
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
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message', 'testing', 'foo']} confirmAction={fn} confirmLabel={'confirm label'}/>);

    const content = container.getElementsByClassName('content');
    expect(content).toBeDefined();
    
    const text = content[0].getElementsByTagName('p');

    expect(text.length).toEqual(3);
    expect(text[0].textContent).toEqual('test message');
    expect(text[1].textContent).toEqual('testing');
    expect(text[2].textContent).toEqual('foo');
  });

  test('should render theme', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm'} theme={'error'} dark={true}/>);
    
    const header = container.getElementsByClassName('header');
    expect(header[0].className).to.include('error');
  });
  
  test('should render dark mode', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm'} theme={'error'} dark={true}/>);

    const modal = container.getElementsByClassName('modal');
    expect(modal[0].className).to.include('dark');
  });

  test('should execute confirm action', () => {
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm label'}/>);

    const button = container.getElementsByTagName('button')[0];

    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  test('should not execute confirm action (undefined func)', () => {
    // @ts-expect-error -> test undefined function
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={undefined} confirmLabel={'confirm label'}/>);

    const button = container.getElementsByTagName('button')[0];

    fireEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
  });
  
  test('should render notification with timeout', () => {
    vi.useFakeTimers();
    const {container} = render(<Modal variant={'notification'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm label'} timeout={500}/>);
    
    const progressWrapper = container.getElementsByClassName('progressWrapper');
    expect(progressWrapper).toBeDefined();
    
    vi.advanceTimersByTime(100);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(400);
    expect(fn).toHaveBeenCalled()
  });
  
  test('should render question', () => {
    const {container} = render(<Modal variant={'question'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm'} cancelLabel={'cancel'} cancelAction={fnC}/>);

    const buttonWrapper = container.getElementsByClassName('buttonWrapper');
    expect(buttonWrapper[0].children.length).toEqual(2);

    const confirm = buttonWrapper[0].firstChild;
    expect(confirm?.textContent).toEqual('confirm');

    const cancel = buttonWrapper[0].children[1];
    expect(cancel?.textContent).toEqual('cancel');
  });
  
  test('should execute cancel action', () => {
    const {container} = render(<Modal variant={'question'} title={'Notify'} message={['test message']} confirmAction={fn} confirmLabel={'confirm'} cancelLabel={'cancel'} cancelAction={fnC}/>);
    const buttonWrapper = container.getElementsByClassName('buttonWrapper');
    const cancel = buttonWrapper[0].children[1];
    
    fireEvent.click(cancel);
    expect(fnC).toHaveBeenCalled();
  });

  test('should render custom content', () => {
    const {container} = render(<Modal title={'custom content'}><div>Hello world</div></Modal>);
    const content = container.getElementsByClassName('content');
    
    expect(content[0]).toBeDefined();
    expect(content[0].firstChild?.textContent).toEqual('Hello world');

    const buttonWrapper = content[0].getElementsByClassName('buttonWrapper');
    expect(buttonWrapper[0]).not.toBeDefined();
  });
});