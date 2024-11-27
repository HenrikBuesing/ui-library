import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import eslint from '@eslint/js';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['*/**/node_modules/**', '*/**/dist/*'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": [
        'error',
        'type'
      ],
    }
  }
];