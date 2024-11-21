import {sassPlugin} from 'esbuild-sass-plugin';
import * as esbuild from "esbuild";

export const buildPlugin = {
  name: 'build',
  setup(build) {
    const options = build.initialOptions;
    options.minify = process.env.NODE_ENV === 'production';
    options.sourcemap = process.env.NODE_ENV !== 'production';

    build.onStart(() => {
      console.log(`using [${process.env.NODE_ENV ?? 'dev'}] config...`);
    });

    build.onEnd(async result => {
      console.log(await esbuild.analyzeMetafile(result.metafile));
    })
  },
}

export const watchPlugin = {
  name: 'watch',
  setup(build) {
    const options = build.initialOptions;
    options.minify = false;
  },
}

export function getBuildConfig(entry, out, plugins = []) {
  plugins.push(
    sassPlugin({
      type: 'local-css'
    }),
  );

  return {
    entryPoints: entry,
    outdir: out,
    bundle: true,
    minify: true,
    sourcemap: false,
    metafile: true,
    external: ['react'],
    format: 'esm',
    target: ['esnext'],
    plugins,
  }
}