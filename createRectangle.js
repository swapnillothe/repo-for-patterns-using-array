const lib = require("./src/patternLibs.js");
const createRectangle = lib.createRectangle;

const main = function() {
  let typeOfRectangle = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  return console.log(createRectangle(typeOfRectangle,width,height));
}

main();
