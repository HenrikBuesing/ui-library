import * as esbuild from 'esbuild';
import {writeFileSync} from 'node:fs';
import {getBuildConfig, getDevConfig} from '../esbuild.config.js';

const env = process.env.NODE_ENV;
const input = 'src/index.ts';
const output = 'dist';

const config = env === 'production' ? getBuildConfig(input, output, true) : getDevConfig(input, output);
console.log(`using [${env ?? 'dev'}] config...`);

try {
  const result = await esbuild.build(config);

  writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}));
} catch (e) {
  console.error(e);
  process.exit(1);
}