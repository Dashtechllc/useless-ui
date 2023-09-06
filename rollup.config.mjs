import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import common from '@rollup/plugin-commonjs'

export default [
  {
    input: './src/index.ts',
    output: [
      { file: 'dist/index.js', format: 'cjs' },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],

    plugins: [
      common(),
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve({
        extensions: ['.js', '.tsx', '.ts'],
      }),
      typescript(),
    ],
  },
];
