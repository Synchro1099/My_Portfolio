// Copies the PDF.js worker that matches react-pdf's own pdfjs-dist version into
// /public, so the resume viewer never depends on a third-party CDN.
const fs = require("fs");
const path = require("path");

const pdfjsPackage = require.resolve("pdfjs-dist/package.json", {
  paths: [path.dirname(require.resolve("react-pdf"))],
});
const source = path.join(path.dirname(pdfjsPackage), "build", "pdf.worker.min.mjs");
const target = path.join(__dirname, "..", "public", "pdf.worker.min.mjs");

fs.copyFileSync(source, target);
console.log(`Copied PDF worker (pdfjs-dist ${require(pdfjsPackage).version}) to public/`);
