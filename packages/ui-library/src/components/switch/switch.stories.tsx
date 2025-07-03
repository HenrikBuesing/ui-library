import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Switch} from './switch';

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {
    dark: {control: 'boolean'},
    disabled: {control: 'boolean'},
    color: {control: 'select', options: ['info', 'success', 'warning', 'error', '#7f2bcf', '#39dddd']},
    size: {control: 'select', options: ['small', 'medium', 'large']},
  },
  args: {onClick: fn()},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
    disabled: false
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
};

export const Dark: Story = {
  args: {
    dark: true,
    disabled: false
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};