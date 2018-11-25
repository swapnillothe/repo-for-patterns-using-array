const library = require("../src/patternUtilLib.js");
const assert = require("assert");
const {
  repeatCharacter,
  repeatStar,
  repeatSpace,
  justifyText,
  repeatDash,
  createStarredEnd,
  getOddNumber,
  generateLine,
  generateFilledLine,
  generateHollowLine,
  calculateJustifyWidth,
  createNumberSeries,
  generateUpperPartDiamond,
  generateLowerPartDiamond,
  zipDataSets
} = library;

const createRightTriangle = function(height){
  createdTriangle = createNumberSeries(height).map(repeatStar);
  justifier = createNumberSeries(height).map(x=>x-1);
  justifier = justifier.reverse().map(repeatSpace)
  createdTriangle = zipDataSets(justifier, createdTriangle, "");
  return createdTriangle;
}

const createLeftTriangle = function(height){
  createdTriangle = createNumberSeries(height)
  return createdTriangle.map(repeatStar);
}

const createFilledRectangle = function(width,height){
  let createRectangle = getRectangleShape(width);
  let rectangle = new Array(height).fill(generateFilledLine);
  rectangle = rectangle.map(createRectangle);
  return rectangle;
}

const selectPattern = function(width,layerIndex){
  patterns = [repeatStar,repeatDash];
  return patterns[layerIndex%2](width); 
}

const createAlternateRectangle = function(width,height){
  let rectangle = new Array(height).fill(width);
  rectangle = rectangle.map(selectPattern);
  return rectangle;
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
  return rectangle;
}

const getDiamondShape = function(sizeOfDiamond){
  let justifyWidth = calculateJustifyWidth(sizeOfDiamond);
  return function(layerGenerator){
    let spaces = justifyWidth(layerGenerator);
    layer = layerGenerator(sizeOfDiamond-(2*spaces));
    return repeatSpace(spaces)+layer;
  }
}

const generateDiamond = function(size,tipGenerator,upperPartGenerator,lowerPartGenerator){
  let midLayer = Math.floor(size/2);

  let diamond = new Array(size).fill(upperPartGenerator);
  diamond[0] = diamond[size-1] = diamond[midLayer] = tipGenerator;
  diamond.fill(lowerPartGenerator,midLayer+1,size-1);

  let fillDiamond = getDiamondShape(size);
  return diamond.map(fillDiamond);
}

const createFilledDiamond = function(size){
  return generateDiamond(size, generateFilledLine, generateFilledLine, generateFilledLine);
}

const createHollowDiamond = function(size){
  return generateDiamond(size, generateHollowLine, generateHollowLine, generateHollowLine);
}

const createAngledDiamond = function(size){
  return generateDiamond(size, generateHollowLine, generateUpperPartDiamond, generateLowerPartDiamond);
}

const triangles = {
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
  getTriangle = triangles[type];
  return getTriangle(height).join("\n");
}

const createRectangle = function(specification){
  type = specification.type;
  height = specification.height;
  width = specification.width;
  getRectangle = rectangles[type];
  return getRectangle(width,height).join("\n");
}

const createDiamond = function(specification){
  type = specification.type;
  height = specification.height;
  getDiamond = diamonds[type];
  return getDiamond(height).join("\n");
}

exports.createTriangle = createTriangle;
exports.createRectangle = createRectangle;
exports.createDiamond = createDiamond;
