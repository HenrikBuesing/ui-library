import {afterEach, describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import {Dialog} from './dialog';
import React from 'react';
import {DialogTitle} from "./dialogTitle";
import { DialogContent } from './dialogContent';
import {DialogControls} from "./dialogControls";

describe('dialog', () => {
  afterEach(() => {
    document.body.style = '';
  });
  
  test('should render dialog', () => {
    render(<Dialog open={true}><div>test content</div></Dialog>);

    const backdrop = document.body.getElementsByClassName('backdrop')[0];
    expect(backdrop).toBeDefined();

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog).toBeDefined();

    expect(document.body.style.paddingRight).toEqual('15px');
    expect(document.body.style.overflow).toEqual('hidden');
  });

  test('should not render dialog', () => {
    render(<Dialog open={false}><div>test content</div></Dialog>);

    const backdrop = document.body.getElementsByClassName('backdrop')[0];
    expect(backdrop).not.toBeDefined();

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog).not.toBeDefined();
  });

  test('should render dialog with aria attributes', () => {
    render(<Dialog open={true} labelledby={'label'} describedby={'content'} ariaModal={true}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0] as HTMLDialogElement;
    
    expect(dialog.ariaModal).toBeTruthy();
    expect(dialog.getAttribute('aria-labelledby')).toEqual('label');
    expect(dialog.getAttribute('aria-describedby')).toEqual('content');
  });

  test('should render dialog with z-index', () => {
    render(<Dialog open={true} zIndex={5}><div>test content</div></Dialog>);

    const backdrop = document.body.getElementsByClassName('backdrop')[0] as HTMLDivElement;
    expect(backdrop.style.zIndex).toEqual('5');

    const dialog = document.body.getElementsByClassName('dialog')[0] as HTMLDialogElement;
    expect(dialog.style.zIndex).toEqual('6');
  });

  test('should render dialog in dark mode', () => {
    render(<Dialog open={true} dark={true}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\bdark\b/);
  });

  test('should render small dialog', () => {
    render(<Dialog open={true} size={'small'}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\bsmall\b/);
  });

  test('should render medium dialog', () => {
    render(<Dialog open={true} size={'medium'}><div>test content</div></Dialog>);

    const dialog = document.body.getElementsByClassName('dialog')[0];
    expect(dialog.className).toMatch(/\bmedium\b/);
  });

  test('should render large dialog', () => {
    render(<Dialog open={true} size={'large'}><div>test content</div></Dialog>);

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
    const {container} = render(<DialogTitle color={'default'}>Title</DialogTitle>);

    const title = container.getElementsByClassName('title')[0];
    expect(title.className).match(/\bdefault\b/);
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