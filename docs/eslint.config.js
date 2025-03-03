import {fileURLToPath} from "url";
import {dirname} from "path";
import {FlatCompat} from "@eslint/eslintrc";
import eslint from "@eslint/js";
import baseConfig from "../eslint.config.js";

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
]