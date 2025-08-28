import type {Meta, StoryObj} from '@storybook/react-vite';
import {TablePagination} from './tablePagination';

const meta = {
  title: 'Navigation/TablePagination',
  component: TablePagination,
  argTypes: {
    dark: {control: 'boolean'},
  },
} satisfies Meta<typeof TablePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
    entries: 200,
    activePage: 1,
    rows: [10, 25, 50, 100]
  },
  parameters: {
    controls: {exclude: ['dark', 'onChange']}
  }
}

export const Dark: Story = {
  args: {
    dark: true,
    entries: 200,
    activePage: 1,
    rows: [10, 25, 50, 100]
  },
  parameters: {
    controls: {exclude: ['dark', 'onChange']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
}