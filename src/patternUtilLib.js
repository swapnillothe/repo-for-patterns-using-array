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
  if(widthForStar == 1){
    return "*";
  }
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

const generateUpperPartDiamond = function(width){
  return generateLine("\/"," ","\\",width);
}

const generateLowerPartDiamond = function(width){
  return generateLine("\\"," ","\/",width);
}

const calculateJustifyWidth = function(width){
  let layerWidth = getOddNumber();
  return function(){
    return Math.abs((width - layerWidth())/2);
  }
}

const increment = function(){
  let number = 1;
  return function(){
    return number++;
  }
}

const createNumberSeries = function(limit){
  let series = new Array(limit).fill(1);
  createSeries = increment();
  return series.map(createSeries);
}

const readUserArgs = function(args){
  let type = args[2];
  let height = +args[3];
  if(args[4]!=undefined){
    let width = +args[4];
    return { type, height, width };
  }
  return { type, height };
}

exports.repeatCharacter = repeatCharacter;
exports.repeatStar = repeatStar;
exports.repeatSpace = repeatSpace;
exports.repeatDash = repeatDash;
exports.justifyText = justifyText;
exports.createStarredEnd = createStarredEnd;
exports.getOddNumber = getOddNumber;
exports.generateLine = generateLine;
exports.generateFilledLine = generateFilledLine;
exports.generateHollowLine = generateHollowLine;
exports.calculateJustifyWidth = calculateJustifyWidth;
exports.increment = increment;
exports.createNumberSeries = createNumberSeries;
exports.generateUpperPartDiamond = generateUpperPartDiamond;
exports.generateLowerPartDiamond = generateLowerPartDiamond;
exports.readUserArgs = readUserArgs;
