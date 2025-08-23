import type {Meta, StoryObj} from '@storybook/react-vite';
import {Pagination} from './pagination';

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    dark: {control: 'boolean'},
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dark: false,
    pages: 20,
    siblings: 1,
    boundary: 1,
    activePage: 9,
    disableFirstButton: false,
    disableLastButton: false,
    disableNextButton: false,
    disablePrevButton: false
  },
  parameters: {
    controls: {exclude: ['ariaLabels', 'dark', 'firstButton', 'lastButton', 'nextButton', 'prevButton', 'onChange']}
  }
}

export const Dark: Story = {
  args: {
    dark: true,
    pages: 20,
    siblings: 1,
    boundary: 1,
    activePage: 9,
    disableFirstButton: false,
    disableLastButton: false,
    disableNextButton: false,
    disablePrevButton: false
  },
  parameters: {
    controls: {exclude: ['ariaLabels', 'dark', 'firstButton', 'lastButton', 'nextButton', 'prevButton', 'onChange']}
  },
  globals: {
    backgrounds: {value: 'dark'}
  }
}