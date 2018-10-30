const lib = require("./src/patternLibs.js");
const createTriangle = lib.createTriangle;

const main = function(){
  type = process.argv[2];
  height = +process.argv[3];
  console.log(createTriangle({type,height}));
  return;
}
main();
