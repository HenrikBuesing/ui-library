import type {StorybookConfig} from '@storybook/react-vite';
import {join, dirname} from 'path';
import * as path from 'node:path';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  addons: [getAbsolutePath('@storybook/addon-a11y')],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  framework: getAbsolutePath('@storybook/react-vite'),
  stories: [
    '../src/components/*/*.stories.@(ts|tsx)'
  ],
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