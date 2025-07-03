import type {Meta, StoryObj} from '@storybook/react-vite';
import {Accordion} from './accordion';
import {Details} from './details';
import React from 'react';

const meta = {
  title: 'Data-Display/Accordion',
  component: Accordion,
  argTypes: {
    dark: {control: 'boolean'},
    iconPosition: {control: 'select', options: ['start', 'end']}
  },
  args: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = [
  <Details key={1} summary={'Expand'}><div>Test expanded content</div></Details>,
  <Details key={2} summary={'Testing'}><div>Test expanded content</div></Details>
]

export const Default: Story = {
  args: {
    dark: false,
    divider: false,
    iconPosition: 'start',
    children: children,
    name: ''
  },
  parameters: {
    controls: {exclude: ['dark', 'icon']}
  },
}

export const Dark: Story = {
  args: {
    dark: true,
    divider: false,
    iconPosition: 'start',
    children: children,
    name: ''
  },
  parameters: {
    controls: {exclude: ['dark', 'icon']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
}

export const ExclusiveExpand: Story = {
  args: {
    dark: false,
    divider: false,
    iconPosition: 'start',
    children: children,
    name: 'exclusive'
  },
  parameters: {
    controls: {exclude: ['icon']}
  },
}