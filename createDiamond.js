const lib = require("./src/patternLibs.js");
const createDiamond = lib.createDiamond;

const main = function(){
  let type = process.argv[2]; 
  let size = +process.argv[3];
  console.log(createDiamond({type,size}));
  return;
}

main();
