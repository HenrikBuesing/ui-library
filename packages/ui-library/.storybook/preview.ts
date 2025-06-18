import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      disableSaveFromUI: true,
    },
    layout: 'centered',
  },
};

export default preview;