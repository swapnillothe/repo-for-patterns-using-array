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

const createStarredEnd = function(widthForStar){
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

const createEmptyRect = function(width,height){
  let rectangle = "";
  let delimeter = "\n";

  rectangle = repeatStar(width) + delimeter;
  for(let index = 2; index < height; index++ ){
    rectangle = rectangle + createStarredEnd(width) + delimeter;
  }
  rectangle = rectangle + repeatStar(width);

  return rectangle;
}

const generateDiamond = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let keyIndex = 1;

  for(let index = sizeOfDiamond; index > 0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    let requiredLayer = repeatSpace(indexForSpaces);
    let indexForStar = (sizeOfDiamond-(2*indexForSpaces));
    requiredLayer += repeatStar(indexForStar);
    diamond = diamond + delimeter + requiredLayer;
    keyIndex = keyIndex+2;
    delimeter = "\n";
  }
  return diamond;
}

const generateHollow = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let keyIndex = 1;

  for(let index = sizeOfDiamond; index > 0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    let requiredLayer = repeatSpace(indexForSpaces);
    requiredLayer += repeatStar(1);
    spacesForHollow = (sizeOfDiamond-2*indexForSpaces)-2;
    requiredLayer += repeatSpace(spacesForHollow);
    if(index != sizeOfDiamond && index != 1 ){
      requiredLayer += repeatStar(1);
    }
    diamond = diamond + delimeter + requiredLayer;
    keyIndex = Math.abs(keyIndex+2);
    delimeter = "\n";
  }
  return diamond;
}

const generateAngled = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let keyIndex = 1;

  for(let index = sizeOfDiamond; index > 0; index--){
    let symbolForLeftSide = "\/";
    let symbolForRightSide = "\\";
    let middleLayer = Math.ceil(sizeOfDiamond/2);
    let indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);

    let requiredLayer = repeatSpace(indexForSpaces);

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
    spacesForHollow = (sizeOfDiamond-2*indexForSpaces)-2;
    requiredLayer += repeatSpace(spacesForHollow);
    requiredLayer += symbolForRightSide;
    keyIndex = keyIndex+2;
    diamond = diamond + delimeter + requiredLayer;
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
