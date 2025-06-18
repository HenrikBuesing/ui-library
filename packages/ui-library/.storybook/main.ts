import type {StorybookConfig} from '@storybook/react-vite';
import {join, dirname} from 'path';
import * as path from 'node:path';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: [
    '../**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [getAbsolutePath('@storybook/addon-a11y')],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  viteFinal: async (config) => {
    config.resolve.alias = [
      {find: '@common', replacement: path.resolve(__dirname, '../src/components/common/')},
      {find: '@hooks', replacement: path.resolve(__dirname, '../src/hooks/')},
      {find: '@utils', replacement: path.resolve(__dirname, '../src/utils/')}
    ];
    
    return config;
  }
};
export default config;