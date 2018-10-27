const lib = require("./src/rectangleGenerator.js");
const createFilledRect = lib.createFilledRect;
const createEmptyRect = lib.createEmptyRect;
const createAlternateRect = lib.createAlternateRect;

const main = function() {
  let typeOfRectangle = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  if(typeOfRectangle==="filled"){
    console.log(createFilledRect(width,height));
  }
  if(typeOfRectangle==="empty"){
    console.log(createEmptyRect(width,height));
  }
  if(typeOfRectangle==="alternating"){
    console.log(createAlternateRect(width,height));
  }
}

main();
