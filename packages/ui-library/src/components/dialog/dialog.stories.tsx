import type {Meta, StoryObj} from '@storybook/react-vite';
import {DialogControls} from './dialogControls';
import {DialogContent} from './dialogContent';
import {DialogTitle} from './dialogTitle';
import {Dialog} from './dialog';
import React from 'react';

const meta = {
  title: 'Feedback/Dialog',
  component: Dialog,
  argTypes: {
    dark: {control: 'boolean'},
    ariaModal: {control: 'boolean'},
  },
  args: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
    open: true,
    scrollable: false,
    ariaModal: false,
    labelledby: 'dialog-header',
    children: 
      <div>
        <h2 id={'dialog-header'} style={{margin: '0'}}>Title of the dialog</h2>
        <p>Content of the dialog</p>
      </div>,
    disableEscapeKey: false,
  },
  parameters: {
    controls: {exclude: ['children', 'dark', 'describedby', 'labelledby', 'onClickBackdrop', 'scrollable']},
  }
}

export const Dark: Story = {
  args: {
    dark: true,
    open: true,
    scrollable: false,
    ariaModal: false,
    labelledby: 'dialog-header',
    children:
      <div>
        <h2 id={'dialog-header'} style={{margin: '0'}}>Title of the dialog</h2>
        <p>Content of the dialog</p>
      </div>,
    disableEscapeKey: false,
  },
  parameters: {
    controls: {exclude: ['children', 'dark', 'describedby', 'labelledby', 'onClickBackdrop', 'scrollable']},
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
}

export const Title: Story = {
  args: {
    dark: false,
    open: true,
    scrollable: false,
    ariaModal: false,
    labelledby: 'dialog-header',
    children:
      <div>
        <DialogTitle id={'dialog-header'}>Title of the dialog</DialogTitle>
        <p>Content of the dialog</p>
      </div>,
    disableEscapeKey: false,
  },
  parameters: {
    controls: {exclude: ['children', 'dark', 'describedby', 'labelledby', 'onClickBackdrop', 'scrollable']},
  }
}