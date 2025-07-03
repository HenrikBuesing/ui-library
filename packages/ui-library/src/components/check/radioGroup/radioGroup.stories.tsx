import type {Meta, StoryObj} from '@storybook/react-vite';
import type {RadioOption} from './types';
import {RadioGroup} from './radioGroup';

const meta = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  argTypes: {
    dark: {control: 'boolean'},
    direction: {control: 'select', options: ['column', 'row']},
    disabled: {control: 'boolean'},
    color: {control: 'color'},
    name: {control: 'text'},
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: RadioOption[] = [
  {value: 'radio', label: 'Radio'},
  {value: 'foo', label: 'Foo'},
  {value: 'bar', label: 'Bar'},
  {value: 'disabled', label: 'Disabled', disabled: true},
];

export const Default: Story = {
  args: {
    dark: false,
    direction: 'column',
    name: '',
    options: options,
    selected: 'radio',
    disabled: false
  },
  parameters: {
    controls: {exclude: ['dark', 'options', 'onChange']}
  }
};

export const Dark: Story = {
  args: {
    dark: true,
    direction: 'column',
    name: '',
    options: options,
    selected: 'radio',
    disabled: false
  },
  parameters: {
    controls: {exclude: ['dark', 'options', 'onChange']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};

export const Disabled: Story = {
  args: {
    dark: false,
    direction: 'column',
    name: '',
    options: options,
    selected: 'radio',
    disabled: true
  },
  parameters: {
    controls: {exclude: ['disabled', 'options', 'onChange']}
  }
};