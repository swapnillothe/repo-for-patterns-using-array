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
