import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "./src/index.ts",
  treeshake: false,
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
  ],
  external: ["react", "react-dom", "grommet-exp-theme", "tslib"],
};
