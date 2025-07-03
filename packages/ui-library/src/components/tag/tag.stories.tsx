import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Tag} from './tag';
import React from 'react';

const meta = {
  title: 'Data-Display/Tag',
  component: Tag,
  argTypes: {
    dark: {control: 'boolean'},
    color: {control: 'select', options: ['info', 'success', 'warning', 'error', '#7f2bcf', '#39dddd']},
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    dark: false,
    label: 'Testing tag',
    color: 'info',
    elevated: false,
  },
  parameters: {
    controls: {exclude: ['variant', 'dark', 'children', 'onClick', 'deleteIcon', 'onDelete']}
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    dark: false,
    label: 'Testing tag',
    color: 'info',
    elevated: false,
  },
  parameters: {
    controls: {exclude: ['variant', 'dark', 'children', 'onClick', 'deleteIcon', 'onDelete']}
  }
};

export const Dark: Story = {
  args: {
    variant: 'filled',
    dark: true,
    label: 'Testing tag',
    color: 'info',
    elevated: false,
  },
  parameters: {
    controls: {exclude: ['dark', 'children', 'onClick', 'deleteIcon', 'onDelete']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};

export const Clickable: Story = {
  args: {
    variant: 'filled',
    dark: false,
    label: 'Testing tag',
    color: 'info',
    elevated: false,
    onClick: fn()
  },
  parameters: {
    controls: {exclude: ['children', 'onClick', 'deleteIcon', 'onDelete']}
  }
};

export const Deletable: Story = {
  args: {
    variant: 'filled',
    dark: false,
    label: 'Testing tag',
    color: 'info',
    elevated: false,
    onDelete: fn()
  },
  parameters: {
    controls: {exclude: ['children', 'onClick', 'deleteIcon', 'onDelete']}
  }
};

const del = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={16} height={16} fill={'#000000'}>
  <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
</svg>

export const DeleteIcon: Story = {
  args: {
    variant: 'filled',
    dark: false,
    label: 'Testing tag',
    color: 'info',
    elevated: false,
    onDelete: fn(),
    deleteIcon: del
  },
  parameters: {
    controls: {exclude: ['children', 'onClick', 'deleteIcon', 'onDelete']}
  }
};