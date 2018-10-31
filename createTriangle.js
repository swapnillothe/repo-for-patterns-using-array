const library1 = require("./src/patternLibs.js");
const library2 = require("./src/patternUtilLib.js")
const createTriangle = library1.createTriangle;
const readUserArgs = library2.readUserArgs;

const main = function(){
  console.log(createTriangle(readUserArgs(process.argv)));
}
main();
