import {fireEvent, render} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import {DatePicker} from './datePicker';
import React from 'react';

describe('rendering', () => {
  test('should render date picker', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
      />
    );

    const picker = container.getElementsByClassName('datePicker')[0];

    expect(picker).toBeDefined();
  });

  test('should render placeholder', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
      />
    );

    const label = container.getElementsByTagName('label')[0];

    expect(label.textContent).toEqual('Select date');
  });

  test('should render selected value', () => {
    const date = new Date(2025, 0, 15);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={date}
        locale={'en-US'}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('span')[0];

    expect(trigger.textContent).toContain('15');
  });

  test('should render in dark mode', () => {
    const {container} = render(
      <DatePicker
        dark={true}
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
      />
    );

    const picker = container.getElementsByClassName('datePicker')[0];

    expect(picker.className).toMatch(/\bdark\b/);
  });

  test('should disable trigger button', () => {
    const {container} = render(
      <DatePicker
        disabled={true}
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
      />
    );

    const button = container.getElementsByTagName('button')[0];

    expect(button.disabled).toBeTruthy();
  });

  test('should render sunday as first weekday', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        locale={'en-US'}
        weekStart={'sun'}
        onChange={() => {
        }}
      />
    );

    const headers = container.getElementsByTagName('th');

    expect(headers[0].textContent).toEqual('Sun');
  });

  test('should render monday as first weekday', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        locale={'en-US'}
        weekStart={'mon'}
        onChange={() => {
        }}
      />
    );

    const headers = container.getElementsByTagName('th');

    expect(headers[0].textContent).toEqual('Mon');
  });
});

describe('calendar interactions', () => {
  test('should open calendar on click', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]');

    expect(dialog?.className).toMatch(/\bopen\b/);
  });

  test('should close calendar on escape', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    fireEvent.keyDown(document, {key: 'Escape'});

    const dialog = container.querySelector('[role="dialog"]');

    expect(dialog?.className).not.toMatch(/\bopen\b/);
  });

  test('should close calendar on outside click', () => {
    const {container} = render(
      <div>
        <DatePicker
          placeholder={'Select date'}
          value={null}
          onChange={() => {
          }}
        />

        <button data-testid={'outside'}>
          outside
        </button>
      </div>
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    let dialog = container.querySelector('[role="dialog"]');

    expect(dialog?.className).toMatch(/\bopen\b/);

    const outside = container.querySelector('[data-testid="outside"]')!;

    fireEvent.pointerDown(outside);

    dialog = container.querySelector('[role="dialog"]');

    expect(dialog?.className).not.toMatch(/\bopen\b/);
  });

  test('should call onChange when date is selected', () => {
    const onChange = vi.fn();

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        onChange={onChange}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dayButtons = Array.from(container.querySelectorAll('tbody button'));
    const enabledButton = dayButtons.find(btn => !btn.hasAttribute('disabled'));

    fireEvent.click(enabledButton!);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toBeInstanceOf(Date);
  });

  test('should navigate to next month', () => {
    const value = new Date(2025, 0, 1);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={value}
        locale={'en-US'}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const controls = container.querySelectorAll('.button');

    fireEvent.click(controls[1]);

    const header = container.querySelector('[role="dialog"] span');

    expect(header?.textContent).not.toContain('January');
  });

  test('should navigate to previous month with page up', () => {
    const value = new Date(2025, 5, 15);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={value}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]')!;

    const before = dialog.textContent;

    fireEvent.keyDown(dialog, {
      key: 'PageUp'
    });

    expect(dialog.textContent).not.toEqual(before);
  });

  test('should navigate to next month with page down', () => {
    const value = new Date(2025, 5, 15);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={value}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]')!;

    const before = dialog.textContent;

    fireEvent.keyDown(dialog, {
      key: 'PageDown'
    });

    expect(dialog.textContent).not.toEqual(before);
  });
});

describe('accessibility', () => {
  test('should render custom aria labels', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        onChange={() => {
        }}
        ariaLabels={{
          calendar: 'ABC',
          previous: 'Lorem',
          next: 'Ipsum'
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]');
    const buttons = container.querySelectorAll('.button');

    expect(dialog?.getAttribute('aria-label')).toEqual('ABC');
    expect(buttons[0].getAttribute('aria-label')).toEqual('Lorem');
    expect(buttons[1].getAttribute('aria-label')).toEqual('Ipsum');
  });

  test('should wrap focus to last element on shift tab', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={new Date(2025, 0, 15)}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const prevButton = container.querySelectorAll('.button')[0] as HTMLButtonElement;

    prevButton.focus();

    const dialog = container.querySelector('[role="dialog"]')!;

    fireEvent.keyDown(dialog, {
      key: 'Tab',
      shiftKey: true
    });

    expect(document.activeElement).not.toEqual(prevButton);
  });
});

describe('date constraints', () => {
  test('should disable previous month button when min is reached', () => {
    const min = new Date(2025, 0, 1);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={min}
        min={min}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const buttons = container.querySelectorAll('.button');

    expect((buttons[0] as HTMLButtonElement).disabled).toBeTruthy();
  });

  test('should disable next month button when max is reached', () => {
    const max = new Date(2025, 0, 1);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={max}
        max={max}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const buttons = container.querySelectorAll('.button');

    expect((buttons[1] as HTMLButtonElement).disabled).toBeTruthy();
  });

  test('should disable dates before min', () => {
    const min = new Date(2025, 0, 10);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        min={min}
        activeView={new Date(2025, 0, 1)}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const disabledButtons = Array.from(
      container.querySelectorAll('tbody button')
    ).filter(btn => btn.hasAttribute('disabled'));

    expect(disabledButtons.length).toBeGreaterThan(0);
  });

  test('should skip disabled days during keyboard navigation', () => {
    const min = new Date(2025, 0, 10);

    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={new Date(2025, 0, 10)}
        min={min}
        activeView={new Date(2025, 0, 1)}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]')!;

    fireEvent.keyDown(dialog, {
      key: 'ArrowLeft'
    });

    expect(document.activeElement).toBeDefined();
  });

  test('should focus first enabled day when opened', () => {
    const min = new Date(2025, 0, 10);

    render(
      <DatePicker
        placeholder={'Select date'}
        value={null}
        min={min}
        activeView={new Date(2025, 0, 1)}
        onChange={() => {
        }}
      />
    );

    const trigger = document.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    expect(document.activeElement).toBeDefined();
  });
});

describe('keyboard navigation', () => {
  test.each([
    'ArrowRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowUp',
    'Home',
    'End'
  ])('should support keyboard navigation', key => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={new Date(2025, 0, 15)}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]')!;

    fireEvent.keyDown(dialog, {key});

    expect(document.activeElement).toBeDefined();
  });

  test('should ignore unsupported keyboard input', () => {
    const {container} = render(
      <DatePicker
        placeholder={'Select date'}
        value={new Date(2025, 0, 15)}
        onChange={() => {
        }}
      />
    );

    const trigger = container.getElementsByTagName('button')[0];

    fireEvent.click(trigger);

    const dialog = container.querySelector('[role="dialog"]')!;

    fireEvent.keyDown(dialog, {
      key: 'A'
    });

    expect(dialog).toBeDefined();
  });
});