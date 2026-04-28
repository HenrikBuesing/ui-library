import type {Meta, StoryObj} from "@storybook/react-vite";
import {LinearProgress} from "./linearProgress";

const meta = {
  title: 'feedback/linearProgress',
  component: LinearProgress,
  argTypes: {
    dark: {control: 'boolean'},
    height: {control: 'number'},
    width: {control: 'number'},
    value: {control: 'number'},
    color: {control: 'select', options: ['info', 'success', 'warning', 'error', 'mediumpurple', 'fuchsia']},
  },
} satisfies Meta<typeof LinearProgress>;

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

export const CustomSize: Story = {
  args: {
    dark: false,
    width: 300,
    height: 10,
  },
  parameters: {
    controls: {exclude: ['dark']}
  }
};