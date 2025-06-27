import type {Meta, StoryObj} from '@storybook/react-vite';
import {Details} from './details';
import React from 'react';

const meta = {
  title: 'Data-Display/Details',
  component: Details,
  argTypes: {
    dark: {control: 'boolean'},
    summary: {control: 'text'},
    iconPosition: {control: 'select', options: ['start', 'end']}
  },
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    summary: 'Lorem Ipsum test text',
    children: <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>,
    dark: false,
    divider: false,
    iconPosition: 'start'
  },
  parameters: {
    controls: {exclude: ['dark', 'icon']}
  }
}

export const Dark: Story = {
  args: {
    summary: 'Lorem Ipsum test text',
    children: <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>,
    dark: true,
    divider: false,
    iconPosition: 'start'
  },
  parameters: {
    controls: {exclude: ['dark', 'icon']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
}

const plusIcon = <svg width={12} height={12} style={{marginRight: '.75rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
</svg>;

export const Icon: Story = {
  args: {
    summary: 'Lorem Ipsum test text',
    children: <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>,
    dark: false,
    divider: false,
    iconPosition: 'start',
    icon: plusIcon
  },
  parameters: {
    controls: {exclude: ['icon']}
  }
}