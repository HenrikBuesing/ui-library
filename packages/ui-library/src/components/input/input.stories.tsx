import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Button} from '../button';

const meta = {
  title: 'Inputs/Input',
  component: Button,
  argTypes: {
    dark: {control: 'boolean'},
    rounded: {control: 'boolean'},
    color: {control: 'select', options: ['info', 'success', 'warning', 'error', '#7f2bcf', '#39dddd']},
    children: {control: 'text'},
  },
  args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'medium'
  },
  parameters: {
    controls: {exclude: ['variant', 'dark']}
  }
};