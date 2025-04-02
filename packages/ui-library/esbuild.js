import {sassPlugin} from 'esbuild-sass-plugin';
import {writeFileSync} from 'node:fs';
import * as esbuild from 'esbuild';

try {
  console.log(`using [${process.env.NODE_ENV ?? 'dev'}] config...`);
  
  const result = await esbuild.build(
    {
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      bundle: true,
      minify: process.env.NODE_ENV === 'production',
      sourcemap: process.env.NODE_ENV !== 'production',
      metafile: true,
      external: ['react', 'react-dom'],
      format: 'esm',
      target: ['esnext'],
      plugins: [sassPlugin({
        type: 'local-css'
      })],
    }
  );

  if (process.env.NODE_ENV !== 'production') {
    writeFileSync('meta.json', JSON.stringify(result.metafile));
  }

  console.log(await esbuild.analyzeMetafile(result.metafile));
} catch (e) {
  console.error(e);
  process.exit(1);
}