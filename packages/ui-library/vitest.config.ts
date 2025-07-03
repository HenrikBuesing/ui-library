import {configDefaults, coverageConfigDefaults, defineConfig} from 'vitest/config';
import * as path from "node:path";

const exclude = [
  'esbuild.js',
  './src/index.ts',
  './src/*/**/index.ts',
  './src/*/**/types.ts',
  './src/components/**/*.stories.@(ts|tsx)'
];

export default defineConfig(
  {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      alias: {
        "@common": path.resolve(__dirname, './src/components/common/'),
        "@hooks": path.resolve(__dirname, './src/hooks/'),
        "@utils": path.resolve(__dirname, './src/utils/')
      },
      exclude: [
        ...exclude,
        ...configDefaults.exclude
      ],
      coverage: {
        provider: 'v8',
        exclude: [
          ...exclude,
          ...coverageConfigDefaults.exclude
        ],
        reporter: ['text']
      },
      css: {
        include: [/.+/],
        modules: {
          classNameStrategy: 'non-scoped'
        }
      },
      bail: 1,
      silent: true
    }
  }
);