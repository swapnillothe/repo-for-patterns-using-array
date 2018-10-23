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

const main = function(){
  let typeOfTriangle = process.argv[2];
  let height = +process.argv[3];
  if(typeOfTriangle=="left"){
    console.log(createLeftTriangle(height));
  }
  if(typeOfTriangle=="right"){
    console.log(createRightTriangle(height));
  }
  return;
}
main();
