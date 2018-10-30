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
const createNumberSeries = library.createNumberSeries;

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
  createdTriangle = createNumberSeries(height)
  return createdTriangle.map(repeatStar).join("\n");
}

const createFilledRectangle = function(width,height){
  rectangle = new Array(height).fill(width);
  rectangle = rectangle.map(repeatStar);
  return rectangle.join("\n");
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

const createHollowDiamond = function(sizeOfDiamond){
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

const createAngledDiamond = function(sizeOfDiamond){
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

const Triangle = {};
Triangle.left = createLeftTriangle;
Triangle.right = createRightTriangle;

const Rectangle = {};
Rectangle.filled = createFilledRectangle;
Rectangle.empty = createEmptyRectangle;
Rectangle.alternating = createAlternateRectangle;

const Diamond = {};
Diamond.filled = createFilledDiamond;
Diamond.hollow = createHollowDiamond;
Diamond.angled = createAngledDiamond;

const createTriangle = function(specification){
  type = specification.type;
  height = specification.height;
  return Triangle[type](height);
}

const createRectangle = function(specification){
  type = specification.type;
  height = specification.height;
  width = specification.width;
  return Rectangle[type](width,height);
}

const createDiamond = function(specification){
  type = specification.type;
  size = specification.size;
  return Diamond[type](size);
}

exports.createTriangle = createTriangle;
exports.createRectangle = createRectangle;
exports.createDiamond = createDiamond;
