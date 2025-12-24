import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Select} from './select';
import type {SelectProps} from './types';
import * as React from 'react';

const meta = {
  title: 'Inputs/Select',
  component: Select,
  argTypes: {
    placeholder: {control: 'text'},
    disabled: {control: 'boolean'},
    dark: {control: 'boolean'},
    openPosition: {control: 'select', options: ['top', 'bottom']},
    onChange: {action: 'change'},
    options: {control: 'object'},
  },
  args: {
    placeholder: 'Select an option',
    disabled: false,
    onChange: fn(),
    openPosition: 'bottom',
    options: [
      {
        label: 'Citrus',
        disabled: false,
        options: [
          {value: 'orange', label: 'Orange'},
          {value: 'lemon', label: 'Lemon', disabled: true},
          {value: 'test', label: 'Test', disabled: false},
        ],
      },
      {
        label: 'Berries',
        disabled: false,
        options: [
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'blueberry', label: 'Blueberry'},
        ],
      }
    ],
    dark: false
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupedOptions: Story = {
  render: (args: SelectProps) => {
    const [value, setValue] = React.useState(args.value);
    return <Select {...args} value={value} onChange={setValue}/>;
  },
  args: {
    value: '',
    dark: false
  }
};

export const Options: Story = {
  render: (args: SelectProps) => {
    const [value, setValue] = React.useState(args.value);
    return <Select {...args} value={value} onChange={setValue}/>;
  },
  args: {
    value: 'kiwi',
    dark: false,
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
      { value: "kiwi", label: "Kiwi" },
    ],
  }
};

export const Dark: Story = {
  render: (args: SelectProps) => <Select {...args} />,
  args: {
    value: '',
    dark: true
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};

export const Disabled: Story = {
  render: (args: SelectProps) => <Select {...args} />,
  args: {
    disabled: true,
    value: ''
  },
};
