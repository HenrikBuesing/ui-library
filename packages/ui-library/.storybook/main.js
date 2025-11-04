import {dirname} from "path"
import {fileURLToPath} from "url"
import * as path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config = {
  core: {
    disableTelemetry: true
  },
  stories: [
    '../src/components/*/**/*.stories.@(ts|tsx)'
  ],
  addons: [getAbsolutePath('@storybook/addon-a11y')],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
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