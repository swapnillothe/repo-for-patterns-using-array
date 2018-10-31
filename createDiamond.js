const library1 = require("./src/patternLibs.js");
const library2 = require("./src/patternUtilLib.js");
const createDiamond = library1.createDiamond;
const readUserArgs = library2.readUserArgs;

const main = function(){
  console.log(createDiamond(readUserArgs(process.argv)));
}

main();
