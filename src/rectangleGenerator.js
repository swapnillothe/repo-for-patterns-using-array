const repeatCharacter = function(character,width){
  return new Array(width).fill(character).join("");
}

const repeatStar = function(width){
  return repeatCharacter("*",width);
}

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

const main = function() {
  let typeOfRectangle = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  if(typeOfRectangle==="filled"){
    console.log(createFilledRect(width,height));
  }
  if(typeOfRectangle==="empty"){
    console.log(createEmptyRect(width,height));
  }
  if(typeOfRectangle==="alternating"){
    console.log(createAlternateRect(width,height));
  }
}
main();
