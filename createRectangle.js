const lib = require("./src/patternLibs.js");
const createRectangle = lib.createRectangle;

const main = function() {
  type = process.argv[2];
  width = +process.argv[3];
  height = +process.argv[4];
  console.log(createRectangle({type,width,height}));
}

main();
