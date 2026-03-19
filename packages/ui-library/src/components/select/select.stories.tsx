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
    width: {control: 'number'},
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
          {value: 'grapefruit', label: 'Grapefruit'},
        ],
      },
      {
        label: 'Berries',
        disabled: false,
        options: [
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'blueberry', label: 'Blueberry'},
          {value: 'banana', label: 'Banana'},
        ],
      },
      {
        label: 'Vegetables',
        disabled: true,
        options: [
          {value: 'cucumber', label: 'Cucumber'},
          {value: 'carrot', label: 'Carrot'},
          {value: 'cabbage', label: 'Cabbage'},
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
    if (args.multi) {
      throw new Error('Options story is single-select only');
    }
    
    const [value, setValue] = React.useState(args.value);
    return <Select {...args} multi={false} value={value} onChange={setValue}/>;
  },
  args: {
    value: '',
    multi: false,
    dark: false
  },
  parameters: {
    controls: {exclude: ['multi', 'value']}
  },
};

export const Options: Story = {
  render: (args) => {
    if (args.multi) {
      throw new Error('Options story is single-select only');
    }

    const [value, setValue] = React.useState(args.value);

    return <Select{...args} multi={false} value={value} onChange={setValue}/>;
  },
  args: {
    value: 'kiwi',
    multi: false,
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
      { value: "kiwi", label: "Kiwi" },
    ],
  },
  parameters: {
    controls: {exclude: ['multi', 'value']}
  },
};

export const MultiSelect: Story = {
  render: (args: SelectProps) => {
    if (!args.multi) {
      throw new Error('Options story is multi-select only');
    }
    
    const [value, setValue] = React.useState(args.value);
    return <Select {...args} value={value} multi onChange={setValue}/>;
  },
  args: {
    value: [''],
    multi: true,
    dark: false
  },
  parameters: {
    controls: {exclude: ['multi', 'value']}
  },
};

export const CustomWidth: Story = {
  render: (args: SelectProps) => {
    if (!args.multi) {
      throw new Error('Options story is multi-select only');
    }

    const [value, setValue] = React.useState(args.value);
    return <Select {...args} value={value} multi onChange={setValue}/>;
  },
  args: {
    value: [''],
    multi: true,
    dark: false,
    width: 200
  },
  parameters: {
    controls: {exclude: ['multi', 'value']}
  },
};

export const Dark: Story = {
  render: (args: SelectProps) => {
    if (args.multi) {
      throw new Error('Options story is single-select only');
    }
    
    const [value, setValue] = React.useState(args.value);
    return <Select {...args} value={value} onChange={setValue}/>;
  },
  args: {
    value: '',
    dark: true
  },
  parameters: {
    controls: {exclude: ['dark', 'multi', 'value']}
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
  parameters: {
    controls: {exclude: ['multi', 'value']}
  },
};
