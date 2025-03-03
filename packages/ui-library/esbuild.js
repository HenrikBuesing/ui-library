import * as esbuild from 'esbuild';
import {writeFileSync} from 'node:fs';
import {getBuildConfig, buildPlugin} from '../../esbuild.config.js';

const input = ['src/index.ts'];
const output = 'dist';

try {
  const result = await esbuild.build(getBuildConfig(input, output, [buildPlugin]));

  if (process.env.NODE_ENV !== 'production') {
    writeFileSync('meta.json', JSON.stringify(result.metafile));
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}