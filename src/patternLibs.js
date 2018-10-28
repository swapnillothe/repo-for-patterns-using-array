const repeatCharacter = function(character,height){
  let repeatedCharacter = "";
  for(let index = 0; index < height; index++){
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

const starAtStartEnd = function(widthForStar){
    return "*" + repeatSpace(widthForStar-2) + "*";
} 

const createRightTriangle = function(height){
  let createdTriangle = "";
  let delimeter = "";

  for(let index = 1; index <= height; index++){
    let justifiedLayer = justifyText(repeatStar(index),(height-index));
    createdTriangle = createdTriangle+delimeter+justifiedLayer;
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

const createFilledRect = function(width,height){
  let rectangle = "";
  let delimeter = "\n";

  for(let index = 0; index < height; index++){
    rectangle += repeatStar(width) + delimeter;
  }
  return rectangle;
}

const createAlternateRect = function(width,height){
  let rectangle = "";
  let delimeter = "";

  for(let lineIndex = height; lineIndex > 0; lineIndex--){
    rectangle += delimeter;
    delimeter = "\n";
    rectangle += repeatStar(width);
    lineIndex = lineIndex-1;
    if(lineIndex > 0){
      rectangle += delimeter
      rectangle += repeatDash(width);
    }
  }
  return rectangle;
}

const createEmptyRect = function(width,height){
  let requiredRectangle = "";
  let delimeter = "\n";
  requiredRectangle = repeatStar(width) + delimeter;
  for(let lineIndex3 = 2; lineIndex3 < height; lineIndex3++ ){
    requiredRectangle += starAtStartEnd(width) + delimeter;
  }
  requiredRectangle += repeatStar(width);
  return requiredRectangle;
}

const generateDiamond = function(sizeOfDiamond){
  let keyIndex = 1;
  let indexForStar = 0;
  let diamond = "";
  let delimeter = "";

  for(let index = sizeOfDiamond; index > 0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    let requiredLine = repeatSpace(indexForSpaces);
    indexForStar = (sizeOfDiamond-(2*indexForSpaces));
    requiredLine += repeatStar(indexForStar);
    diamond = diamond + delimeter + requiredLine;
    keyIndex = keyIndex+2;
    delimeter = "\n";
  }
  return diamond;
}

const generateHollow = function(sizeOfDiamond){
  let keyIndex = 1;
  let indexForStar = 0;
  let diamond = "";
  let delimeter = "";

  for(let index = sizeOfDiamond; index > 0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    let requiredLine = repeatSpace(indexForSpaces);
    requiredLine += repeatStar(1);
    spacesForHollow = (sizeOfDiamond-2*indexForSpaces)-2;
    requiredLine += repeatSpace(spacesForHollow);
    if(index != sizeOfDiamond && index != 1 ){
      requiredLine += repeatStar(1);
    }
    diamond = diamond + delimeter + requiredLine;
    keyIndex = Math.abs(keyIndex+2);
    delimeter = "\n";
  }
  return diamond;
}

const generateAngled = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let keyIndex = 1;
  let indexForStar = 0;

  for(let index = sizeOfDiamond; index > 0; index--){
    let symbolForLeftSide = "\/";
    let symbolForRightSide = "\\";
    let middleLayer = Math.ceil(sizeOfDiamond/2);
    let indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);

    let requiredLine = repeatSpace(indexForSpaces);

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

    requiredLine += symbolForLeftSide;
    spacesForHollow = (sizeOfDiamond-2*indexForSpaces)-2;
    requiredLine += repeatSpace(spacesForHollow);
    requiredLine += symbolForRightSide;
    keyIndex = keyIndex+2;
    diamond = diamond + delimeter + requiredLine;
    delimeter = "\n";
  }
  return diamond;
}

exports.generateDiamond = generateDiamond;
exports.generateHollow = generateHollow;
exports.generateAngled = generateAngled;
exports.createRightTriangle = createRightTriangle;
exports.createLeftTriangle = createLeftTriangle;
exports.createFilledRect = createFilledRect;
exports.createEmptyRect = createEmptyRect;
exports.createAlternateRect = createAlternateRect;
