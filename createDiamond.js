const lib = require("./src/patternLibs.js");
const createDiamond = lib.createDiamond;

const main = function(){
  let typeOfDiamond = process.argv[2]; 
  let sizeOfDiamond = +process.argv[3];
  return console.log(createDiamond(typeOfDiamond,sizeOfDiamond));
}

main();
