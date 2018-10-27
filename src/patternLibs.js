const repeatCharacter = function(character,height){
  return new Array(height).fill(character).join("");
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

const createRightTriangle = function(height){
  let createdTriangle = "";
  let delimeter = "";
  for(let index=1; index<=height; index++){
    let justifiedLayer = justifyText(repeatStar(index),(height-index));
    createdTriangle = createdTriangle+delimeter+justifiedLayer;
    delimeter = "\n";
  }
  return createdTriangle;
}

const createLeftTriangle = function(height){
  let createdTriangle = "";
  let delimeter = "";
  for(let index=1; index<=height; index++){
    let layer = repeatStar(index);
    createdTriangle = createdTriangle+delimeter+layer;
    delimeter = "\n";
  }
  return createdTriangle;
}

exports.createRightTriangle = createRightTriangle;
exports.createLeftTriangle = createLeftTriangle;

const repeatDash = function(width){
  return repeatCharacter("-",width);
}
const starAtStartEnd = function(widthForStar){
  let line = "*";
  for(index3=2; index3<widthForStar; index3++){
    line = line + " ";
  }
  line = line + "*";
    return line;
} 

const createFilledRect = function(width,height){
  let delimiter = "\n";
  let requiredRectangle = "";
  for(let lineIndex=0; lineIndex<height; lineIndex++){
    requiredRectangle += repeatStar(width) + delimiter;
  }
  return requiredRectangle;
}

const createAlternateRect= function(width,height){
  let requiredRectangle = "";
  let delimiter = "";
  for(let lineIndex2=height; lineIndex2>0; lineIndex2--){
    requiredRectangle += delimiter;
    delimiter = "\n";
    requiredRectangle += repeatStar(width);
    lineIndex2=lineIndex2-1;
    if(lineIndex2>0){
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

exports.createFilledRect = createFilledRect;
exports.createEmptyRect = createEmptyRect;
exports.createAlternateRect = createAlternateRect;

let requiredLine="";
let keyIndex=1;
let indexForStar=0;

const space = function(noOfSpaces){
  let spaces="";
  for(index=noOfSpaces; index>0; index--){
    spaces+=" ";
  }
  return spaces;
}

const star = function(noOfStars){
  let stars="";
  for(index=noOfStars; index>0; index--){
    stars+="*";
  }
  return stars;
}

const generateDiamond = function(sizeOfDiamond){
  for(let index=sizeOfDiamond; index>0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    requiredLine+=space(indexForSpaces);
    indexForStar=(sizeOfDiamond-(2*indexForSpaces));
    requiredLine+=star(indexForStar);
    console.log(requiredLine);
    requiredLine="";
    keyIndex=Math.abs(keyIndex+2);
  }
}

const generateHollow = function(sizeOfDiamond){
  for(let index=sizeOfDiamond; index>0; index--){
    indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);
    requiredLine+=space(indexForSpaces);
    indexForStar=(1);
    requiredLine+=star(indexForStar);
    spacesForHollow=(sizeOfDiamond-2*indexForSpaces)-2;
    requiredLine+=space(spacesForHollow);
    if(index != sizeOfDiamond && index != 1 ){
      requiredLine+=star(1);
    }
    console.log(requiredLine);
    requiredLine="";
    keyIndex=Math.abs(keyIndex+2);
  }
}

const generateAngled = function(sizeOfDiamond){
  for(let index=sizeOfDiamond; index>0; index--){
    let symbolForLeftSide="\/";
    let symbolForRightSide="\\";
    let middleLayer=Math.ceil(sizeOfDiamond/2);
    let indexForSpaces = Math.abs((sizeOfDiamond - keyIndex)/2);

    requiredLine+=space(indexForSpaces);

    if(index < middleLayer){
      symbolForLeftSide="\\";
      symbolForRightSide="\/";
    }
    if(index==1 || index==sizeOfDiamond){
      symbolForRightSide="";
      symbolForLeftSide="*";
    }
    if(index == middleLayer){
      symbolForLeftSide="*";
      symbolForRightSide="*";
    }

    requiredLine+=symbolForLeftSide;
    spacesForHollow=(sizeOfDiamond-2*indexForSpaces)-2;
    requiredLine+=space(spacesForHollow);
    requiredLine+=symbolForRightSide;
    console.log(requiredLine);
    requiredLine="";
    keyIndex=Math.abs(keyIndex+2);
  }
}

exports.generateDiamond = generateDiamond;
exports.generateHollow = generateHollow;
exports.generateAngled = generateAngled;
