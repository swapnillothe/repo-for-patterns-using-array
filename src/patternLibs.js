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
    return start+=2;
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

const createFilledRect = function(width,height){
  let rectangle = "";
  let delimeter = "\n";

  for(let index = 0; index < height; index++){
    rectangle = rectangle + generateFilledLine(width) + delimeter;
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
    rectangle = rectangle + generateHollowLine(width) + delimeter;
  }
  rectangle = rectangle + repeatStar(width);

  return rectangle;
}

const generateDiamond = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let layerWidth = getOddNumber();

  for(let index = sizeOfDiamond; index > 0; index--){
    justifyWidth = Math.abs((sizeOfDiamond - layerWidth())/2);
    let requiredLayer = repeatSpace(justifyWidth);
    let indexForStar = (sizeOfDiamond-(2*justifyWidth));
    requiredLayer += repeatStar(indexForStar);
    diamond = diamond + delimeter + requiredLayer;
    delimeter = "\n";
  }
  return diamond;
}

const generateHollow = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let layerWidth = getOddNumber();

  for(let index = sizeOfDiamond; index > 0; index--){
    justifyWidth = Math.abs((sizeOfDiamond - layerWidth())/2);
    let requiredLayer = repeatSpace(justifyWidth);
    requiredLayer += repeatStar(1);
    spacesForHollow = (sizeOfDiamond-2*justifyWidth)-2;
    requiredLayer += repeatSpace(spacesForHollow);
    if(index != sizeOfDiamond && index != 1 ){
      requiredLayer += repeatStar(1);
    }
    diamond = diamond + delimeter + requiredLayer;
    delimeter = "\n";
  }
  return diamond;
}

const generateAngled = function(sizeOfDiamond){
  let diamond = "";
  let delimeter = "";
  let layerWidth = getOddNumber();

  for(let index = sizeOfDiamond; index > 0; index--){
    let symbolForLeftSide = "\/";
    let symbolForRightSide = "\\";
    let middleLayer = Math.ceil(sizeOfDiamond/2);
    let justifyWidth = Math.abs((sizeOfDiamond - layerWidth())/2);

    let requiredLayer = repeatSpace(justifyWidth);

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
    spacesForHollow = (sizeOfDiamond-2*justifyWidth)-2;
    requiredLayer += repeatSpace(spacesForHollow);
    requiredLayer += symbolForRightSide;
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
