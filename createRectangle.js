const library1 = require("./src/patternLibs.js");
const library2 = require("./src/patternUtilLib.js");
const createRectangle = library1.createRectangle;
const readUserArgs = library2.readUserArgs;

const main = function() {
  console.log( createRectangle(readUserArgs(process.argv)));
}

main();
