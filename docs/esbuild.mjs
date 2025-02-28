import * as esbuild from 'esbuild';
import {getBuildConfig, buildPlugin, watchPlugin} from '../esbuild.config.js';

const input = ['../packages/src/index.ts'];
const output = 'src/uil-bundle';

if (process.env.NODE_ENV === 'production') {
  try {
    await esbuild.build(getBuildConfig(input, output, [buildPlugin]));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
} else {
  watch();
}

async function watch() {
  let ctx = await esbuild.context(getBuildConfig(input, output, [watchPlugin]));
  await ctx.watch();
  console.log('Watching...');
}