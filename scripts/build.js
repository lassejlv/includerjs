const { version, author, license, name } = require("../package.json");
const { build } = require("esbuild");

const time = Date.now();

build({
  entryPoints: ["./src/includer.js"],
  bundle: false,
  banner: {
    js: `/* * v${version} * Copyright (c) 2022 ${author} * Licensed under the ${license} license */`,
  },
  minify: true,
  sourcemap: "external",
  write: false,
  outfile: `./build/${name}-${version}.bundle.js`,
})
  .then(() => {
    console.log(`Build completed in ${Date.now() - time}ms`);
  })
  .catch(() => process.exit(1));
