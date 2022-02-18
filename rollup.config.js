import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

const packageJson = require('./package.json');

export default {
    input: './src/package/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    external : Object.keys(packageJson.dependencies),
    plugins: [
        peerDepsExternal(),
        nodeResolve(),
        url(),
        svgr({icon: true}),
        json(),
        typescript({ tsconfig: './tsconfig.json', include: 'src/**/*.{jsx,js,ts,tsx}' }),
        commonjs(),
        postcss()
    ]
};
