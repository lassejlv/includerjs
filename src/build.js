const { version, author, license, name } = require("../package.json");
const repo = require("../package.json").repository.url;
let time = Date.now();

require("esbuild")
  .build({
    entryPoints: ["./src/includer.js"],
    banner: {
      js: `/* 
    ${name} v${version} 
    Copyright (c) 2022 ${author} 
    Licensed under the ${license} license
    Github: ${repo}
*/`,
    },
    bundle: false,
    minify: true,
    outfile: `./dist/includer-${version}.bundle.js`,
  })
  .then(() => {
    console.log(`Build completed in ${Date.now() - time}ms`);
  })
  .catch(() => process.exit(1));
