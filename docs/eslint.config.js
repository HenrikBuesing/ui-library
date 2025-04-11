import baseConfig from '../eslint.config.js';
import {FlatCompat} from '@eslint/eslintrc';
import {fileURLToPath} from 'url';
import eslint from '@eslint/js';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  resolvePluginsRelativeTo: 'docs'
});

export default [
  ...baseConfig,
  ...compat.config({
    extends: ['eslint:recommended', 'next'],
  }),
  {
    rules: {
      "@next/next/no-img-element": 0
    }
  }
]