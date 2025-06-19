import type {Meta, StoryObj} from '@storybook/react-vite';
import {Breadcrumbs} from './breadcrumbs';
import React from 'react';

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    dark: {control: 'boolean'},
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {
  args: {
    afterCollapse: 2,
    beforeCollapse: 1,
    maxEntries: 5,
    dark: false,
    children: [
      <div key={1}>testing</div>,
      <div key={2}>foo</div>,
      <div key={3}>bar</div>,
      <div key={4}>baz</div>,
      <div key={5}>test</div>
    ],
    highlightLast: false,
    separator: '/',
    "aria-label": ''
  },
  parameters: {
    controls: {exclude: ['afterCollapse', 'beforeCollapse', 'children', 'dark', 'maxEntries']}
  }
}

export const Collapsed: Story = {
  args: {
    dark: false,
    children: [
      <div key={1}>testing</div>,
      <div key={2}>foo</div>,
      <div key={3}>bar</div>,
      <div key={4}>baz</div>,
      <div key={5}>test</div>,
      <div key={6}>last</div>
    ],
    highlightLast: false,
    separator: '/',
    "aria-label": ''
  },
  parameters: {
    controls: {exclude: ['afterCollapse', 'beforeCollapse', 'children', 'dark', 'maxEntries']}
  }
}

export const CustomCollapse: Story = {
  args: {
    afterCollapse: 1,
    beforeCollapse: 2,
    maxEntries: 3,
    dark: false,
    children: [
      <div key={1}>testing</div>,
      <div key={2}>foo</div>,
      <div key={3}>bar</div>,
      <div key={4}>baz</div>,
      <div key={5}>test</div>,
      <div key={6}>last</div>
    ],
    highlightLast: false,
    separator: '/',
    "aria-label": ''
  },
  parameters: {
    controls: {exclude: ['children', 'dark']}
  }
}

export const Separator: Story = {
  args: {
    afterCollapse: 2,
    beforeCollapse: 1,
    maxEntries: 5,
    dark: false,
    children: [
      <div key={1}>testing</div>,
      <div key={2}>foo</div>,
      <div key={3}>bar</div>,
      <div key={4}>baz</div>,
      <div key={5}>test</div>
    ],
    highlightLast: false,
    separator: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill={'#787878'}>
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
    </svg>,
    "aria-label": ''
  },
  parameters: {
    controls: {exclude: ['children']}
  }
}

export const Dark: Story = {
  args: {
    afterCollapse: 2,
    beforeCollapse: 1,
    maxEntries: 5,
    dark: true,
    children: [
      <div key={1}>testing</div>,
      <div key={2}>foo</div>,
      <div key={3}>bar</div>,
      <div key={4}>baz</div>,
      <div key={5}>test</div>,
      <div key={6}>last</div>
    ],
    highlightLast: false,
    separator: '/',
    "aria-label": ''
  },
  parameters: {
    controls: {exclude: ['children', 'dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
}