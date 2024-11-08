import * as esbuild from "esbuild";
import {postcssModules, sassPlugin} from "esbuild-sass-plugin";
import cssnanoPlugin from "cssnano";

try {
  await esbuild.build({
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
        generateScopedName: '[name]_[hash:base64:5]',
      }, [
        cssnanoPlugin({
          preset: 'cssnano-preset-advanced',
        })
      ]),
    })],
    external: ['react'],
  });

  console.log('build complete')
} catch (e) {
  console.error(e);
  process.exit(1)
}