import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

const pkg = require('./package.json');

const makeExternalPredicate = (externalArr) => {
    if (externalArr.length === 0) return () => false;
    return (id) => new RegExp(`^(${externalArr.join('|')})($|/)`).test(id);
};

export default {
    input: './src/package/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    external: makeExternalPredicate(
        Object.keys(pkg.peerDependencies || {}).concat(Object.keys(pkg.dependencies || {}))
    ),
    plugins: [
        peerDepsExternal(),
        nodeResolve(),
        url(),
        svgr({
            svgoConfig: {
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: false
                    }
                ]
            }
        }),
        json(),
        typescript({ tsconfig: './tsconfig.json', include: 'src/**/*.{jsx,js,ts,tsx}' }),
        commonjs(),
        postcss()
    ]
};
