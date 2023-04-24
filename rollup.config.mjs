import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import typescript from 'rollup-plugin-typescript2';
import copy from "rollup-plugin-copy";

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
    copy({
      targets: [
        { src: ["package.json", "LICENSE", "README.md"], dest: "dist" },
      ],
    }),
  ],
  external: ["react", "react-dom", "grommet-exp-theme", "tslib"],
};
