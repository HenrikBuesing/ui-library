import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Button} from './button';

const meta = {
  title: 'Inputs/Button',
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

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'medium'
  },
  parameters: {
    controls: {exclude: ['variant', 'dark']}
  }
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'medium'
  },
  parameters: {
    controls: {exclude: ['variant', 'dark']}
  }
};

export const Dark: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: true,
    rounded: false,
    size: 'medium'
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};

export const Rounded: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: true,
    size: 'medium'
  },
  parameters: {
    controls: {exclude: ['rounded']}
  }
};

export const Small: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'small'
  },
  parameters: {
    controls: {exclude: ['size']}
  }
};

export const Medium: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'medium'
  },
  parameters: {
    controls: {exclude: ['size']}
  }
};

export const Large: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'large'
  },
  parameters: {
    controls: {exclude: ['size']}
  }
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'medium',
    disabled: true
  },
  parameters: {
    controls: {exclude: ['disabled']}
  }
};

export const Link: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    dark: false,
    rounded: false,
    size: 'medium',
    href: '/?path=/story/inputs-button--link',
    target: ''
  },
};
