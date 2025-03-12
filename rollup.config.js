import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url"; // 
import copy from "rollup-plugin-copy"; 
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss(),
      url({ // ✅ Add this block to handle images
        include: ["**/*.png", "**/*.jpg", "**/*.svg", "**/*.gif"],
        limit: 10000, // Convert images < 10kb to Base64
        publicPath: "/assets/", // Set public path for larger images
      }),
      copy({
        targets: [
          { src: "src/assets/*", dest: "dist/assets" }, // ✅ Correct copy config
        ],
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];