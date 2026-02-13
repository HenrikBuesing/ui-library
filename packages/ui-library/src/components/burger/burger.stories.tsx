import type {Meta, StoryObj} from '@storybook/react-vite';
import {MenuHeader} from './menuHeader';
import {BurgerMenu} from './burger';
import {MenuItem} from './menuItem';
import React from 'react';

const meta = {
  title: 'Navigation/BurgerMenu',
  component: BurgerMenu,
  argTypes: {
    dark: {control: 'boolean'},
    toggleBackground: {control: 'boolean'},
    alignment: {control: 'select', options: ['left', 'right']},
  }
} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alignment: 'right',
    children: 'Test',
    dark: false,
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
};

export const HelperComponents: Story = {
  args: {
    alignment: 'right',
    children: [
      <MenuHeader key={1}>Header 1</MenuHeader>,
      <MenuItem key={2}>item 1</MenuItem>,
      <MenuItem key={3}>item 2</MenuItem>,
      <MenuHeader key={4}>Header 2</MenuHeader>,
      <MenuItem key={5}>item 3</MenuItem>,
    ],
    dark: false,
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
};

export const DarkMode: Story = {
  args: {
    alignment: 'right',
    children: [
      <MenuHeader key={1}>Header 1</MenuHeader>,
      <MenuItem key={2}>item 1</MenuItem>,
      <MenuItem key={3}>item 2</MenuItem>,
      <MenuHeader key={4}>Header 2</MenuHeader>,
      <MenuItem key={5}>item 3</MenuItem>,
    ],
    dark: true,
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};

export const ToggleBackground: Story = {
  args: {
    alignment: 'right',
    toggleBackground: false,
    children: [
      <MenuHeader key={1}>Header 1</MenuHeader>,
      <MenuItem key={2}>item 1</MenuItem>,
      <MenuItem key={3}>item 2</MenuItem>,
      <MenuHeader key={4}>Header 2</MenuHeader>,
      <MenuItem key={5}>item 3</MenuItem>,
    ],
    dark: false,
  }
};