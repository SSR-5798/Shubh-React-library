import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");
const dts = require('rollup-plugin-dts')

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ]
    },
    {
        input:"dist/esm/types/index.d.ts", 
        output:[{file:"dist/index.d.ts", format:"esm"}],
        plugins:[dts.default()]
    }
]