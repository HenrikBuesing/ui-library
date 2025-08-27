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
    entries: 20,
    activePage: 0,
    rowsSelection: [10, 20, 50]
  },
  parameters: {
    controls: {exclude: ['dark', 'onChange']}
  }
}