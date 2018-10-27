const lib = require("./src/triangleGenerator.js");
const createRightTriangle = lib.createRightTriangle;
const createLeftTriangle = lib.createLeftTriangle;

const main = function(){
  let typeOfTriangle = process.argv[2];
  let height = +process.argv[3];
  if(typeOfTriangle=="left"){
    console.log(createLeftTriangle(height));
  }
  if(typeOfTriangle=="right"){
    console.log(createRightTriangle(height));
  }
  return;
}
main();
