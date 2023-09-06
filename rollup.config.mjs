import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import common from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

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
      postcss({
        plugins: [
          tailwindcss('./tailwind.config.js'),
          autoprefixer,
        ],
        inject: false, 
        extract: true, 
        minimize: true, 
      }),
      external(),
      resolve({
        extensions: ['.js', '.tsx', '.ts'],
      }),
      typescript(),
    ],
  },
];
