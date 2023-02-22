import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  treeshake: false,
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss(),
  ],
  external: ['react', 'react-dom', 'grommet-exp-theme', 'tslib'],
};
