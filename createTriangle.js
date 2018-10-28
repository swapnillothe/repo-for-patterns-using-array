const lib = require("./src/patternLibs.js");
const createTriangle = lib.createTriangle;

const main = function(){
  let typeOfTriangle = process.argv[2];
  let height = +process.argv[3];
  return console.log(createTriangle(typeOfTriangle,height));
}
main();
