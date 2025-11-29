const path = require("path");
console.log("current file: \n");
console.log("fileName", __filename);
console.log("directoryname", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filepath = "/samir/document/nextLevel.pdf";
console.log("analysis path :", filepath, "\n");
console.log("Directory: ", path.dirname(filepath));
console.log("Base name: ", path.basename(filepath));
console.log("File Extension: ", path.extname(filepath));
console.log("File Name: ", path.basename(filepath, path.extname(filepath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filepath);
console.log("Parsed path object: ", parsed);
console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted path: ", path.format(parsed));
