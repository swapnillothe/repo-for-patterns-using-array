const repeatCharacter = function(character,width){
  let repeatedCharacter = "";
  for(let index = 0; index < width; index++){
    repeatedCharacter = repeatedCharacter + character;
  }
  return repeatedCharacter;
}

const repeatStar = function(width){
  return repeatCharacter("*",width);
}

const repeatSpace = function(width){
  return repeatCharacter(" ",width);
}

const justifyText = function(text,justifyingWidth){
  return repeatSpace(justifyingWidth)+text;
}

const repeatDash = function(width){
  return repeatCharacter("-",width);
}

const createStarredEnd = function(widthForStar){
    return "*" + repeatSpace(widthForStar-2) + "*";
} 

const getOddNumber = function(){
  let start = -1;
  return function(){
    return start += 2;
  }
}

const generateLine = function(leftChar, middleChar, rightChar, width){
  let line = repeatCharacter(leftChar,1%(width+1));
  line = line + repeatCharacter(middleChar, width-2);
  return line + repeatCharacter(rightChar,1%width);
}

const generateFilledLine = function(width){
  return generateLine("*","*","*",width);
}

const generateHollowLine = function(width){
  return generateLine("*"," ","*",width);
}

const calculateJustifyWidth = function(width){
  let layerWidth = getOddNumber();
  return function(){
    return Math.abs((width - layerWidth())/2);
  }
}

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
  let delimeter = "\n";

  for(let index = 0; index < height; index++){
    rectangle = rectangle + generateFilledLine(width) + delimeter;
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
    let requiredLayer = repeatSpace(spaces);
    let indexForStar = (sizeOfDiamond-(2*spaces));
    requiredLayer += repeatStar(indexForStar);
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
    let requiredLayer = repeatSpace(spaces); 
    spacesForHollow = (sizeOfDiamond-2*spaces);
    requiredLayer += generateHollowLine(spacesForHollow);
    diamond = diamond + delimeter + requiredLayer;
    delimeter = "\n";
  }
  return diamond;
}

const generateAngled = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let justifyWidth = calculateJustifyWidth(sizeOfDiamond);

  for(let index = sizeOfDiamond; index > 0; index--){
    let symbolForLeftSide = "\/";
    let symbolForRightSide = "\\";
    let middleLayer = Math.ceil(sizeOfDiamond/2);
    let spaces = justifyWidth();

    let requiredLayer = repeatSpace(spaces);

    if(index < middleLayer){
      symbolForLeftSide = "\\";
      symbolForRightSide = "\/";
    }
    if(index == 1 || index == sizeOfDiamond){
      symbolForRightSide = "";
      symbolForLeftSide = "*";
    }
    if(index == middleLayer){
      symbolForLeftSide = "*";
      symbolForRightSide = "*";
    }

    requiredLayer += symbolForLeftSide;
    spacesForHollow = (sizeOfDiamond-2*spaces)-2;
    requiredLayer += repeatSpace(spacesForHollow);
    requiredLayer += symbolForRightSide;
    diamond = diamond + delimeter + requiredLayer;
    delimeter = "\n";
  }
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
