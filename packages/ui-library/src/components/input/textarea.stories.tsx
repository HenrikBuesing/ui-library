import type {Meta, StoryObj} from '@storybook/react-vite';
import {Textarea} from './textarea';
import {fn} from 'storybook/test';

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,
  argTypes: {
    dark: {control: 'boolean'},
    error: {control: 'boolean'},
    resize: {control: 'select', options: ['both', 'vertical', 'horizontal', 'none']},
    rows: {control: 'number'},
    cols: {control: 'number'},
  },
  args: {onClick: fn()},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Textarea',
    dark: false,
    rows: 1,
    cols: 20,
    helpText: '',
    error: false
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
};

export const Dark: Story = {
  args: {
    label: 'Textarea',
    dark: true,
    rows: 1,
    cols: 20,
    helpText: '',
    error: false
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};