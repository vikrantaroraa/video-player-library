import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

const rollupConfig = {
  input: "src/App.tsx",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    exports: "default",
  },
  plugins: [
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    tsConfigPaths(),
    // node resolve will also work WITHOUT options object provided below. See what browser: true and
    // extensions: [array of extensions] in options object is used for
    nodeResolve({
      browser: true,
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    styles({ minimize: true }),
    terser(),
  ],
};

export default rollupConfig;
