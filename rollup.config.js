import { terser } from "rollup-plugin-terser"
import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./src/index.js",
  output: [
    {
      file: "modules/leaf.es.js",
      format: "es"
    },
    {
      file: "modules/leaf.cjs.js",
      format: "cjs"
    },
    {
      file: "modules/leaf.umd.js",
      format: "umd",
      name: "leaf"
    },
    {
      file: "modules/leaf.browser.js",
      format: "iife",
      name: "leaf"
    },
    {
      file: "modules/leaf.amd.js",
      format: "amd"
    }
  ],
  plugins: [
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser()
  ]
}