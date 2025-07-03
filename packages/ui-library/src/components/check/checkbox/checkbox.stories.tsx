import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Checkbox} from "./checkbox";

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    dark: {control: 'boolean'},
    color: {control: 'color'},
    children: {control: 'select', options: ['testing label', null]},
  },
  args: {onClick: fn()},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
};

export const Dark: Story = {
  args: {
    dark: true,
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};

export const Disabled: Story = {
  args: {
    dark: false,
    disabled: true,
  },
  parameters: {
    controls: {exclude: ['disabled']}
  }
};

export const DisabledChecked: Story = {
  args: {
    dark: false,
    disabled: true,
    checked: true
  },
  parameters: {
    controls: {exclude: ['disabled', 'checked']}
  }
};