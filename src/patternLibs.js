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
const generateUpperPartDiamond = library.generateUpperPartDiamond;
const generateLowerPartDiamond = library.generateLowerPartDiamond;

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
  let createRectangle = getRectangleShape(width);
  let rectangle = new Array(height).fill(generateFilledLine);
  rectangle = rectangle.map(createRectangle);
  return rectangle.join("\n");
}

const selectPattern = function(width,layerIndex){
  patterns = [repeatStar,repeatDash];
  return patterns[layerIndex%2](width); 
}

const createAlternateRectangle = function(width,height){
  let rectangle = new Array(height).fill(width);
  rectangle = rectangle.map(selectPattern);
  return rectangle.join("\n");
}

const getRectangleShape = function(width){
  return function(layerGenerator){
    return layerGenerator(width);
  }
}

const createEmptyRectangle = function(width,height){
  let createRectangle = getRectangleShape(width);
  let rectangle = new Array(height).fill(generateHollowLine);
  rectangle[0] = rectangle[height-1] = generateFilledLine;
  rectangle = rectangle.map(createRectangle);
  return rectangle.join("\n");
}

const getDiamondShape = function(sizeOfDiamond){
  let justifyWidth = calculateJustifyWidth(sizeOfDiamond);
  return function(layerGenerator){
    let spaces = justifyWidth(layerGenerator);
    layer = layerGenerator(sizeOfDiamond-(2*spaces));
    return repeatSpace(spaces)+layer;
  }
}

const createFilledDiamond = function(sizeOfDiamond){
  let diamond = new Array(sizeOfDiamond).fill(generateFilledLine);
  let fillDiamond = getDiamondShape(sizeOfDiamond);
  return diamond.map(fillDiamond).join("\n");
}

const createHollowDiamond = function(sizeOfDiamond){
  let diamond = new Array(sizeOfDiamond).fill(generateHollowLine);
  let fillDiamond = getDiamondShape(sizeOfDiamond);
  return diamond.map(fillDiamond).join("\n");
}

const createAngledDiamond = function(size){
  let midLayer = Math.floor(size/2);

  let diamond = new Array(size).fill(generateUpperPartDiamond);
  diamond[0] = diamond[size-1] = generateFilledLine;
  diamond[midLayer] = generateHollowLine;
  diamond.fill(generateLowerPartDiamond,midLayer+1,size-1);

  let fillDiamond = getDiamondShape(size);
  return diamond.map(fillDiamond).join("\n");
}

const triangle = {
"left" : createLeftTriangle,
"right" : createRightTriangle
}

const rectangles = {
"filled" : createFilledRectangle,
"empty" : createEmptyRectangle,
"alternating" : createAlternateRectangle
}

const diamonds = {
"filled" : createFilledDiamond,
"hollow" : createHollowDiamond,
"angled" : createAngledDiamond
}

const createTriangle = function(specification){
  type = specification.type;
  height = specification.height;
  return triangle[type](height);
}

const createRectangle = function(specification){
  type = specification.type;
  height = specification.height;
  width = specification.width;
  return rectangles[type](width,height);
}

const createDiamond = function(specification){
  type = specification.type;
  height = specification.height;
  return diamonds[type](height);
}

exports.createTriangle = createTriangle;
exports.createRectangle = createRectangle;
exports.createDiamond = createDiamond;
