const lib = require("./src/patternLibs.js");
const createTriangle = lib.createTriangle;

const main = function(){
  typeOfTriangle = process.argv[2];
  height = process.argv[3];
  return console.log(createTriangle(typeOfTriangle,height));
}
main();
