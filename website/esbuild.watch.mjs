import * as esbuild from 'esbuild';
import {getDevConfig} from '../esbuild.config.js';

async function watch() {
  let ctx = await esbuild.context(getDevConfig('../packages/src/index.ts', 'src/uil-bundle'));
  await ctx.watch();
  console.log('Watching...');
}

watch();
