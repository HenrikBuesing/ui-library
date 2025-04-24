import {fireEvent, render} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import {Notification} from './notification';
import React from 'react';

describe('general', () => {
  test('should render notification', () => {
    const {container} = render(<Notification type={'info'} variant={'filled'}>Message</Notification>);
    
    const notification = container.getElementsByClassName('notification')[0];
    expect(notification).toBeDefined();
    expect(notification.textContent).toEqual('Message');
  });

  test('should render darkmode notification', () => {
    const {container} = render(<Notification dark type={'info'} variant={'filled'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\bdark\b/);
  });

  test('should render filled notification', () => {
    const {container} = render(<Notification type={'info'} variant={'filled'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\bfilled\b/);
  });

  test('should render outlined notification', () => {
    const {container} = render(<Notification type={'info'} variant={'outlined'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\boutlined\b/);
  });

  test('should render notification with onCancel', () => {
    const fn = vi.fn();
    
    const {container} = render(<Notification type={'info'} variant={'filled'} onClose={fn}>Message</Notification>);

    const cancel = container.getElementsByClassName('closeButton')[0];
    expect(cancel).toBeDefined();

    fireEvent.click(cancel);
    expect(fn).toHaveBeenCalled();
  });

  test('should render notification with action', () => {
    const {container} = render(<Notification type={'info'} variant={'filled'} action={<div>test</div>}>Message</Notification>);

    const action = container.getElementsByClassName('action')[0];
    expect(action).toBeDefined();
    expect(action.textContent).toEqual('test');
  });

  test('should render info notification', () => {
    const {container} = render(<Notification type={'info'} variant={'filled'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\binfo\b/);
  });

  test('should render success notification', () => {
    const {container} = render(<Notification type={'success'} variant={'filled'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\bsuccess\b/);
  });

  test('should render warning notification', () => {
    const {container} = render(<Notification type={'warning'} variant={'filled'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\bwarning\b/);
  });

  test('should render error notification', () => {
    const {container} = render(<Notification type={'error'} variant={'filled'}>Message</Notification>);

    const notification = container.getElementsByClassName('notification')[0];
    expect(notification.className).toMatch(/\berror\b/);
  });
});