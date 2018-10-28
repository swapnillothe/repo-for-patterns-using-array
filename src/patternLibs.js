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
    let layer = repeatStar(index);
    createdTriangle = createdTriangle+delimeter+layer;
    delimeter = "\n";
  }
  return createdTriangle;
}

const createFilledRect = function(width,height){
  let delimiter = "\n";
  let requiredRectangle = "";
  for(let lineIndex = 0; lineIndex < height; lineIndex++){
    requiredRectangle += repeatStar(width) + delimiter;
  }
  return requiredRectangle;
}

const createAlternateRect = function(width,height){
  let requiredRectangle = "";
  let delimiter = "";
  for(let lineIndex = height; lineIndex > 0; lineIndex--){
    requiredRectangle += delimiter;
    delimiter = "\n";
    requiredRectangle += repeatStar(width);
    lineIndex = lineIndex-1;
    if(lineIndex > 0){
      requiredRectangle += delimiter
      requiredRectangle += repeatDash(width);
    }
  }
  return requiredRectangle;
}

const createEmptyRect = function(width,height){
  let requiredRectangle = "";
  let delimiter = "\n";
  requiredRectangle = repeatStar(width) + delimiter;
  for(let lineIndex3 = 2; lineIndex3 < height; lineIndex3++ ){
    requiredRectangle += starAtStartEnd(width) + delimiter;
  }
  requiredRectangle += repeatStar(width);
  return requiredRectangle;
}

const generateDiamond = function(sizeOfDiamond){
  let requiredLine = "";
  let keyIndex = 1;
  let indexForStar = 0;
  for(let index = sizeOfDiamond; index > 0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    requiredLine += repeatSpace(indexForSpaces);
    indexForStar = (sizeOfDiamond-(2*indexForSpaces));
    requiredLine += repeatStar(indexForStar);
    console.log(requiredLine);
    requiredLine = "";
    keyIndex = Math.abs(keyIndex+2);
  }
}

const generateHollow = function(sizeOfDiamond){
  let requiredLine = "";
  let keyIndex = 1;
  let indexForStar = 0;
  for(let index = sizeOfDiamond; index > 0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    requiredLine += repeatSpace(indexForSpaces);
    indexForStar = (1);
    requiredLine += repeatStar(indexForStar);
    spacesForHollow = (sizeOfDiamond-2*indexForSpaces)-2;
    requiredLine += repeatSpace(spacesForHollow);
    if(index != sizeOfDiamond && index != 1 ){
      requiredLine += repeatStar(1);
    }
    console.log(requiredLine);
    requiredLine = "";
    keyIndex=Math.abs(keyIndex+2);
  }
}

const generateAngled = function(sizeOfDiamond){
  let requiredLine = "";
  let keyIndex = 1;
  let indexForStar = 0;
  for(let index = sizeOfDiamond; index > 0; index--){
    let symbolForLeftSide = "\/";
    let symbolForRightSide = "\\";
    let middleLayer = Math.ceil(sizeOfDiamond/2);
    let indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);

    requiredLine += repeatSpace(indexForSpaces);

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
    console.log(requiredLine);
    requiredLine = "";
    keyIndex = Math.abs(keyIndex+2);
  }
}

exports.generateDiamond = generateDiamond;
exports.generateHollow = generateHollow;
exports.generateAngled = generateAngled;
exports.createRightTriangle = createRightTriangle;
exports.createLeftTriangle = createLeftTriangle;
exports.createFilledRect = createFilledRect;
exports.createEmptyRect = createEmptyRect;
exports.createAlternateRect = createAlternateRect;
