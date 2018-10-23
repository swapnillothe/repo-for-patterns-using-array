let typeOfDiamond = process.argv[2]; 
let sizeOfDiamond = +process.argv[3];
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

if(typeOfDiamond=="diamond"){
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

if(typeOfDiamond=="hollow"){
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

if(typeOfDiamond=="angled"){
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
