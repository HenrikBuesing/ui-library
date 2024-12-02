import {beforeEach, expect, test, vi, type Mock} from "vitest";
import {fireEvent, render, renderHook, screen} from "@testing-library/react";
import {useClickOutsideRef} from "@hooks/clickOutside";
import React from "react";

let fn: Mock<(...args: any[]) => any>;

beforeEach(() => {
  fn = vi.fn();
});

test('should create ref', () => {
  const {result} = renderHook(() => useClickOutsideRef(fn));

  expect(result.current).toBeDefined();
  expect(result.current.current).toBeNull();
});

test('should run callback func', () => {
  render(<TestUsage/>);

  const outside = screen.getByTestId('outside');
  
  fireEvent.click(outside);
  
  expect(fn).toHaveBeenCalled();
});

test('should not run callback func', () => {
  render(<TestUsage/>);

  const inside = screen.getByTestId('inside');

  fireEvent.click(inside);

  expect(fn).not.toHaveBeenCalled();
});

function TestUsage() {
  const ref = useClickOutsideRef<HTMLDivElement>(fn);
  
  return (
    <div>
      <div data-testid='outside'>outside</div>
      
      <div ref={ref}>
        <span data-testid='inside'>inside</span>
      </div>
    </div>
  );
}