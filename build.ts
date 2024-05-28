Bun.build({
  format: "esm",
  target: "browser",
  entrypoints: ["index.ts"],
  outdir: "dist",
  minify: { whitespace: true },
});
