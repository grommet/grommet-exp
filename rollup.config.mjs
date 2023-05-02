import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
  input: "./src/index.ts",
  treeshake: false,
  output: [
    {
      dir: "./dist",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
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
  external: [
    "react",
    "react-dom",
    "hpe-design-tokens",
    "grommet-exp-theme",
    "tslib",
  ],
};
