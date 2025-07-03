import type {Meta, StoryObj} from '@storybook/react-vite';
import {Skeleton} from "./skeleton";

const meta = {
  title: 'feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    dark: {control: 'boolean'},
    radius: {control: 'select', options: ['5px', '20px', '25%', '50%', null]},
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