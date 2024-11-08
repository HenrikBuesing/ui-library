import * as esbuild from "esbuild";
import {postcssModules, sassPlugin} from "esbuild-sass-plugin";
import cssnanoPlugin from "cssnano";

const esbuild_config = {
  entryPoints: ['../packages/src/index.ts'],
  outdir: 'src/uil-bundle',
  bundle: true,
  minify: true,
  sourcemap: false,
  metafile: false,
  format: 'esm',
  target: ['esnext'],
  plugins: [sassPlugin({
    type: "style",
    transform: postcssModules({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }, [
      cssnanoPlugin({
        preset: 'cssnano-preset-advanced',
      })
    ]),
  })],
  external: ['react'],
}

async function watch() {
  let ctx = await esbuild.context(esbuild_config);
  await ctx.watch();
  console.log('Watching...');
}

watch();
