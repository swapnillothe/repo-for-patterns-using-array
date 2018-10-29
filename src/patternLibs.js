const library = require("../src/patternUtilLib.js");
const assert = require("assert");
const repeatCharacter = library.repeatCharacter;
const repeatStar = library.repeatStar;
const repeatSpace = library.repeatSpace;
const justifyText = library.justifyText;
const repeatDash = library.repeatDash;
const createStarredEnd = library.createStarredEnd;
const getOddNumber = library.getOddNumber;
const generateLine = library.generateLine;
const generateFilledLine = library.generateFilledLine;
const generateHollowLine = library.generateHollowLine;
const calculateJustifyWidth = library.calculateJustifyWidth;

const createRightTriangle = function(height){
  let createdTriangle = "";
  let delimeter = "";

  for(let index = 1; index <= height; index++){
    let justifiedLayer = justifyText(repeatStar(index),(height-index));
    createdTriangle = createdTriangle + delimeter + justifiedLayer;
    delimeter = "\n";
  }
  return createdTriangle;
}

const createLeftTriangle = function(height){
  let createdTriangle = "";
  let delimeter = "";

  for(let index = 1; index <= height; index++){
    createdTriangle = createdTriangle + delimeter + repeatStar(index);
    delimeter = "\n";
  }
  return createdTriangle;
}

const createFilledRectangle = function(width,height){
  let rectangle = "";
  let delimeter = "";

  for(let index = 0; index < height; index++){
    rectangle = rectangle + delimeter + generateFilledLine(width);
    delimeter = "\n";
  }
  return rectangle;
}

const createAlternateRectangle = function(width,height){
  let rectangle = "";
  let delimeter = "";

  for(let index = height; index > 0; index--){
    rectangle = rectangle + delimeter + repeatStar(width);
    delimeter = "\n";
    index--;
    if(index > 0){
      rectangle = rectangle + delimeter + repeatDash(width); 
    }
  }
  return rectangle;
}

const createEmptyRectangle = function(width,height){
  let rectangle = "";
  let delimeter = "\n";

  rectangle = repeatStar(width) + delimeter;
  for(let index = 2; index < height; index++ ){
    rectangle = rectangle + generateHollowLine(width) + delimeter;
  }
  rectangle = rectangle + repeatStar(width);

  return rectangle;
}

const createFilledDiamond = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let justifyWidth = calculateJustifyWidth(sizeOfDiamond);

  for(let index = sizeOfDiamond; index > 0; index--){
    let spaces = justifyWidth();
    let indexForStar = (sizeOfDiamond-(2*spaces));
    let requiredLayer = repeatSpace(spaces) + repeatStar(indexForStar);
    diamond = diamond + delimeter + requiredLayer;
    delimeter = "\n";
  }
  return diamond;
}

const generateHollow = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let justifyWidth = calculateJustifyWidth(sizeOfDiamond);

  for(let index = sizeOfDiamond; index > 0; index--){
    let spaces = justifyWidth();
    spacesForHollow = (sizeOfDiamond-2*spaces);
    let requiredLayer = repeatSpace(spaces) + generateHollowLine(spacesForHollow);
    diamond = diamond + delimeter + requiredLayer;
    delimeter = "\n";
  }
  return diamond;
}

const generateAngled = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "\n";
  let justifyWidth = calculateJustifyWidth(sizeOfDiamond);
  diamond = repeatSpace(justifyWidth()) + generateFilledLine(1);

  for(let index = sizeOfDiamond-1; index > 1; index--){
    let leftChar = "\/";
    let rightChar = "\\";
    let middleLayer = Math.ceil(sizeOfDiamond/2);
    let spaces = justifyWidth();

    let requiredLayer = repeatSpace(spaces);
    if(index < middleLayer){
      leftChar = "\\";
      rightChar = "\/";
    }
    if(index == middleLayer){
      leftChar = "*";
      rightChar = "*";
    }

    layerWidth = (sizeOfDiamond-2*spaces);
    requiredLayer += generateLine(leftChar," ",rightChar,layerWidth);
    diamond = diamond + delimeter + requiredLayer;
  }
  diamond += delimeter + repeatSpace(justifyWidth()) + generateFilledLine(1);
  return diamond;
}

const createTriangle = function(typeOfTriangle,height){
  if(typeOfTriangle == "left"){
    return createLeftTriangle(height); 
  }
  if(typeOfTriangle == "right"){
    return createRightTriangle(height); 
  }
}

const createRectangle = function(typeOfRectangle,width,height){
  if(typeOfRectangle == "filled"){
    return createFilledRectangle(width,height);
  }
  if(typeOfRectangle == "empty"){
    return createEmptyRectangle(width,height);
  }
  if(typeOfRectangle == "alternating"){
    return createAlternateRectangle(width,height);
  }
}

const createDiamond = function(typeOfDiamond,sizeOfDiamond){
  if(typeOfDiamond == "filled"){
    return createFilledDiamond(sizeOfDiamond);
  }
  if(typeOfDiamond == "hollow"){
    return generateHollow(sizeOfDiamond);
  }
  if(typeOfDiamond == "angled"){
    return generateAngled(sizeOfDiamond);
  }
}

exports.createTriangle = createTriangle;
exports.createRectangle = createRectangle;
exports.createDiamond = createDiamond;
