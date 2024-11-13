import * as esbuild from "esbuild";
import {writeFileSync} from "node:fs";
import {getBuildConfig, getDevConfig} from "../esbuild.config.js";

let config;

if (process.env.NODE_ENV === "production") {
  console.log('using production config...');
  config = getBuildConfig('src/index.ts', 'dist', true)
} else {
  console.log('using dev config...');
  config = getDevConfig('src/index.ts', 'dist');
}

try {
  const result = await esbuild.build(config);

  writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}))
} catch (e) {
  console.error(e);
  process.exit(1)
}