import { rimraf } from "rimraf";

console.log("🧹 Cleaning Build Directory...");
rimraf.sync("build");
console.log("Done! 🥳");
