import type {Meta, StoryObj} from "@storybook/react-vite";
import {CircularProgress} from "./circularProgress";

const meta = {
  title: 'feedback/circularProgress',
  component: CircularProgress,
  argTypes: {
    dark: {control: 'boolean'},
    size: {control: 'number'},
    value: {control: 'number'},
    color: {control: 'select', options: ['info', 'success', 'warning', 'error', 'mediumpurple', 'fuchsia']},
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
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