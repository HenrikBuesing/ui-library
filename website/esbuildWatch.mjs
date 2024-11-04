import * as esbuild from "esbuild";
import {sassPlugin} from "esbuild-sass-plugin";
import postcss from "postcss";
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
    type: "css-text",
    async transform(source) {
      const {css} = await postcss([
        cssnanoPlugin({
          preset: 'cssnano-preset-advanced',
        })
      ]).process(source, {from: 'undefined'})
      return css
    }
  })],
  external: ['react'],
}

async function watch() {
  let ctx = await esbuild.context(esbuild_config);
  await ctx.watch();
  console.log('Watching...');
}

watch();
