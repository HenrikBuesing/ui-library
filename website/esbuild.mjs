import * as esbuild from "esbuild";
import {getBuildConfig} from "../esbuild.config.js";

try {
  await esbuild.build(getBuildConfig('../packages/src/index.ts', 'src/uil-bundle'));

  console.log('build complete')
} catch (e) {
  console.error(e);
  process.exit(1)
}