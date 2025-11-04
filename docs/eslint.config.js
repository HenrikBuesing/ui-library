import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = defineConfig([
  nextPlugin.configs['core-web-vitals'],
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      "@next/next/no-img-element": 0
    }
  }
])

export default eslintConfig