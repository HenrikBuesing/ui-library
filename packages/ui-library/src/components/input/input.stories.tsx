import type {Meta, StoryObj} from '@storybook/react-vite';
import {InputDecorator} from './inputDecorator';
import {fn} from 'storybook/test';
import {Input} from './input';
import React from 'react';

const meta = {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    dark: {control: 'boolean'},
    error: {control: 'boolean'},
    required: {control: 'boolean'},
    variant: {control: 'select', options: ['basic', 'outlined']},
    type: {control: 'select', options: ['text', 'number', 'password']},
  },
  args: {onClick: fn()},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Testing',
    dark: false,
    error: false,
    required: false
  },
  parameters: {
    controls: {exclude: ['variant', 'dark']}
  }
};

export const Basic: Story = {
  args: {
    variant: 'basic',
    label: 'Testing',
    dark: false,
    error: false,
    required: false
  },
  parameters: {
    controls: {exclude: ['variant', 'dark']}
  }
};

export const Dark: Story = {
  args: {
    variant: 'outlined',
    label: 'Testing',
    dark: true,
    error: false,
    required: false
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
    variant: 'outlined',
    label: 'Testing',
    dark: false,
    error: false,
    disabled: true,
    required: false
  }
};

export const HelpText: Story = {
  args: {
    variant: 'outlined',
    label: 'Testing',
    dark: false,
    error: false,
    required: false,
    helpText: 'Testing help text'
  }
};

export const DecoratorStart: Story = {
  args: {
    variant: 'outlined',
    label: 'Testing',
    dark: false,
    error: false,
    required: false,
    children: <InputDecorator position={'start'}>kg</InputDecorator>
  },
  parameters: {
    controls: {exclude: ['children']}
  },
};

export const DecoratorEnd: Story = {
  args: {
    variant: 'outlined',
    label: 'Testing',
    dark: false,
    error: false,
    required: false,
    children: <InputDecorator position={'end'}>kg</InputDecorator>
  },
  parameters: {
    controls: {exclude: ['children']}
  },
};

export const DecoratorFocus: Story = {
  args: {
    variant: 'outlined',
    label: 'Testing',
    dark: false,
    error: false,
    required: false,
    children: <InputDecorator onFocus>kg</InputDecorator>
  },
  parameters: {
    controls: {exclude: ['children']}
  },
};