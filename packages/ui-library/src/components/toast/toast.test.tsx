import {describe, expect, test} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import React, {act} from "react";
import {Toast} from "./toast";
import {ToastProvider, useToastContext} from "./toaster";

describe('toaster', () => {
  test('should generate toaster', () => {
    const {container} = render(<ToastProvider><div>Test</div></ToastProvider>);
    
    const wrapper = container.getElementsByClassName('toaster')[0];
    expect(wrapper).toBeDefined();
    expect(wrapper.children.length).toEqual(0);
  });
  
  test('should throw error', () => {
    expect(() => render(<ErrorTest />)).
    toThrow('You must wrap your component tree with <ToastProvider> in order to use the queueToast function.');
  });

  test('should render a toast when queueToast is triggered', () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    const button = screen.getByText('Show Toast');

    act(() => {
      fireEvent.click(button);
    });

    expect(screen.getByText('Toast message')).toBeDefined();
  });

  test('should apply correct alignment classes', () => {
    const { container } = render(
      <ToastProvider alignment={{horizontal: 'center', vertical: 'top'}}>
        <div>Test</div>
      </ToastProvider>
    );

    const wrapper = container.getElementsByClassName('toaster')[0];
    expect(wrapper.className).toContain('centerX');
    expect(wrapper.className).toContain('top');
  });
});

describe('toast', () => {
  test('should render toast', () => {
    const {container} = render(<Toast timeout={'persistent'} id={'toast-test'} message={'testing'} closeCallback={() => {}}/>);
    
    const toast = container.getElementsByClassName('toast')[0];
    expect(toast).toBeDefined();
  });

  test('should render toast with close button', () => {
    const {container} = render(<Toast timeout={'persistent'} id={'toast-test'} message={'testing'} closeCallback={() => {}} dismissible/>);

    const button = container.getElementsByClassName('closeButton')[0];
    expect(button).toBeDefined();
  });
});

function ErrorTest() {
  const { queueToast } = useToastContext();
  queueToast('Test toast');
  return null;
}

function TestComponent() {
  const { queueToast } = useToastContext();

  return (
    <button onClick={() => queueToast('Toast message')}>Show Toast</button>
  );
}