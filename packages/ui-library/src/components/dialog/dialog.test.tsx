import {afterEach, beforeAll, describe, expect, test, vi} from 'vitest';
import {DialogControls} from './dialogControls';
import {DialogContent} from './dialogContent';
import {render} from '@testing-library/react';
import {DialogTitle} from './dialogTitle';
import {Dialog} from './dialog';
import React from 'react';

// currently native html dialog elements are not supported in jsdom.
// this is a workaround to test the dialog component
// open issue: https://github.com/jsdom/jsdom/issues/3294
beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

describe('dialog', () => {
  afterEach(() => {
    document.body.style = '';
  });
  
  test('should render dialog', () => {
    const {container} = render(<Dialog open={true} disableEscapeKey><div>test content</div></Dialog>);

    const dialog = container.getElementsByClassName('dialog')[0];
    expect(dialog).toBeDefined();

    expect(document.body.style.paddingRight).toEqual('15px');
    expect(document.body.style.overflow).toEqual('hidden');
  });

  test('should not render dialog', () => {
    render(<Dialog open={false} disableEscapeKey><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0] as HTMLDialogElement;
    expect(dialog.open).toEqual(false);
  });

  test('should render dialog with aria attributes', () => {
    render(<Dialog open={true} disableEscapeKey labelledby={'label'} describedby={'content'} ariaModal={true}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0] as HTMLDialogElement;
    
    expect(dialog.ariaModal).toBeTruthy();
    expect(dialog.getAttribute('aria-labelledby')).toEqual('label');
    expect(dialog.getAttribute('aria-describedby')).toEqual('content');
  });

  test('should render dialog in dark mode', () => {
    render(<Dialog disableEscapeKey open={true} dark={true}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\bdark\b/);
  });

  test('should render small dialog', () => {
    render(<Dialog disableEscapeKey open={true} size={'small'}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\bsmall\b/);
  });

  test('should render medium dialog', () => {
    render(<Dialog disableEscapeKey open={true} size={'medium'}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\bmedium\b/);
  });

  test('should render large dialog', () => {
    render(<Dialog disableEscapeKey open={true} size={'large'}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\blarge\b/);
  });
});

describe('dialog components', () => {
  test('should render dialog title', () => {
    const {container} = render(<DialogTitle>Title</DialogTitle>);
    
    const title = container.getElementsByClassName('title')[0];
    expect(title.textContent).toEqual('Title');
  });

  test('should render dialog title with id', () => {
    const {container} = render(<DialogTitle id={'test-id'}>Title</DialogTitle>);

    const title = container.getElementsByClassName('title')[0];
    expect(title.id).toEqual('test-id');
  });

  test('should render dialog title with color', () => {
    const {container} = render(<DialogTitle color={'info'}>Title</DialogTitle>);

    const title = container.getElementsByClassName('title')[0];
    expect(title.className).match(/\binfo\b/);
  });
  
  test('should render dialog content', () => {
    const {container} = render(<DialogContent>Content</DialogContent>);

    const content = container.getElementsByClassName('content')[0];
    expect(content.textContent).toEqual('Content');
  });

  test('should render dialog content with id', () => {
    const {container} = render(<DialogContent id={'test-id'}>Content</DialogContent>);

    const content = container.getElementsByClassName('content')[0];
    expect(content.id).toEqual('test-id');
  });

  test('should render dialog content with divider', () => {
    const {container} = render(<DialogContent divider>Content</DialogContent>);

    const content = container.getElementsByClassName('content')[0];
    expect(content.className).match(/\bdivider\b/);
  });

  test('should render dialog controls', () => {
    const {container} = render(<DialogControls>Controls</DialogControls>);

    const controls = container.getElementsByClassName('controls')[0];
    expect(controls.textContent).toEqual('Controls');
  });

  test('should render dialog controls with position', () => {
    const {container} = render(<DialogControls position={'space-between'}>Controls</DialogControls>);

    const controls = container.getElementsByClassName('controls')[0];
    expect(controls.className).match(/\bspace-between\b/);
  });
});