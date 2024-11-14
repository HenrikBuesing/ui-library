import * as esbuild from 'esbuild';
import {getBuildConfig, getDevConfig} from '../esbuild.config.js';

const input = '../packages/src/index.ts';
const output = 'src/uil-bundle';

if (process.env.NODE_ENV === 'production') {
  try {
    await esbuild.build(getBuildConfig(input, output));

    console.log('build complete');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
} else {
  watch();
}

async function watch() {
  let ctx = await esbuild.context(getDevConfig(input, output));
  await ctx.watch();
  console.log('Watching...');
}