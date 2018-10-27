const lib = require("./src/patternLibs.js");
const generateDiamond = lib.generateDiamond;
const generateHollow = lib.generateHollow;
const generateAngled = lib.generateAngled;

const main = function(){
  let typeOfDiamond = process.argv[2]; 
  let sizeOfDiamond = +process.argv[3];
  if(typeOfDiamond=="diamond"){
    return generateDiamond(sizeOfDiamond);
  }
  if(typeOfDiamond=="hollow"){
    return generateHollow(sizeOfDiamond);
  }
  if(typeOfDiamond=="angled"){
    return generateAngled(sizeOfDiamond);
  }
}

main();
