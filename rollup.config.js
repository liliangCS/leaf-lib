import { terser } from "rollup-plugin-terser"
import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./src/index.js",
  output: [
    {
      file: "modules/leaf.esm.js",
      format: "es"
    },
    {
      file: "modules/leaf.cjs.js",
      format: "cjs"
    },
    {
      file: "leaf.min.js",
      format: "iife",
      name: "leaf"
    }
  ],
  plugins: [
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser()
  ]
}