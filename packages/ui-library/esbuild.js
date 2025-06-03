import {sassPlugin} from 'esbuild-sass-plugin';
import {writeFileSync} from 'node:fs';
import * as esbuild from 'esbuild';

try {
  const isProduction = process.env.NODE_ENV === 'production';
  
  console.log(`using ${isProduction ? 'production' : 'dev'} config...`);
  
  const result = await esbuild.build(
    {
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      bundle: true,
      minify: isProduction,
      sourcemap: !isProduction,
      metafile: true,
      external: ['react', 'react-dom'],
      format: 'esm',
      target: ['esnext'],
      plugins: [sassPlugin({
        type: 'local-css'
      })],
    }
  );

  if (!isProduction) {
    writeFileSync('meta.json', JSON.stringify(result.metafile));
  }

  console.log(await esbuild.analyzeMetafile(result.metafile));
} catch (e) {
  console.error(e);
  process.exit(1);
}