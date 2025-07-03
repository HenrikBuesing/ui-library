import type {Meta, StoryObj} from '@storybook/react-vite';
import {Skeleton} from "./skeleton";

const meta = {
  title: 'feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    dark: {control: 'boolean'},
    rounded: {control: 'select', options: ['light', 'medium', 'full', null]},
  }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
    disableAnimation: false,
    height: 50,
    width: 50,
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
};

export const Dark: Story = {
  args: {
    dark: true,
    disableAnimation: false,
    height: 50,
    width: 50,
  },
  parameters: {
    controls: {exclude: ['dark']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
};